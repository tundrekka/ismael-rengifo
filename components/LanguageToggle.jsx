"use client";
import { useT } from "@/lib/i18n/LanguageProvider";

const options = [
  { code: "en", label: "EN" },
  { code: "es", label: "ES" },
];

const LanguageToggle = ({ className = "" }) => {
  const { locale, setLocale, t } = useT();
  return (
    <div
      role="group"
      aria-label={t("common.langToggleLabel")}
      className={`inline-flex items-center gap-0.5 rounded-full border border-white/[0.06] bg-white/[0.02] p-0.5 backdrop-blur-md ${className}`}
    >
      {options.map((opt) => {
        const active = locale === opt.code;
        return (
          <button
            key={opt.code}
            type="button"
            aria-pressed={active}
            onClick={() => setLocale(opt.code)}
            className={`relative rounded-full px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.16em] transition-all duration-300 ${
              active ? "text-ink" : "text-ink-dim hover:text-ink"
            }`}
          >
            {active && (
              <span aria-hidden="true" className="absolute inset-0 rounded-full border border-white/10 bg-white/[0.06]" />
            )}
            <span className="relative">{opt.label}</span>
          </button>
        );
      })}
    </div>
  );
};

export default LanguageToggle;
