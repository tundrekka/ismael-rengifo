"use client";
import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { dictionaries, DEFAULT_LOCALE, LOCALES } from "./dictionaries";

const STORAGE_KEY = "ismael-locale";

const LanguageContext = createContext({
  locale: DEFAULT_LOCALE,
  setLocale: () => {},
  t: (key) => key,
  dict: dictionaries[DEFAULT_LOCALE],
});

const getByPath = (obj, path) => {
  return path.split(".").reduce((acc, key) => (acc && acc[key] !== undefined ? acc[key] : undefined), obj);
};

const detectInitial = () => {
  if (typeof window === "undefined") return DEFAULT_LOCALE;
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved && LOCALES.includes(saved)) return saved;
    const browser = (window.navigator.language || "").toLowerCase();
    if (browser.startsWith("es")) return "es";
  } catch (e) {
    // ignore
  }
  return DEFAULT_LOCALE;
};

export const LanguageProvider = ({ children }) => {
  const [locale, setLocaleState] = useState(DEFAULT_LOCALE);

  useEffect(() => {
    setLocaleState(detectInitial());
  }, []);

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = locale;
    }
  }, [locale]);

  const setLocale = useCallback((next) => {
    if (!LOCALES.includes(next)) return;
    setLocaleState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch (e) {
      // ignore
    }
  }, []);

  const dict = dictionaries[locale] || dictionaries[DEFAULT_LOCALE];

  const t = useCallback(
    (path, vars) => {
      let value = getByPath(dict, path);
      if (value === undefined) value = getByPath(dictionaries[DEFAULT_LOCALE], path);
      if (value === undefined) return path;
      if (typeof value === "string" && vars) {
        return value.replace(/\$\{(\w+)\}/g, (_, k) => (vars[k] !== undefined ? vars[k] : ""));
      }
      return value;
    },
    [dict],
  );

  const value = useMemo(() => ({ locale, setLocale, t, dict }), [locale, setLocale, t, dict]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useT = () => useContext(LanguageContext);
