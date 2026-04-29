"use client";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { Loader } from "lucide-react";
import clsx from "clsx";
import { useT } from "@/lib/i18n/LanguageProvider";

const ErrorMessage = ({ message }) => {
  return <span className="mt-2 text-xs text-red-400">{message}</span>;
};

const LabelInput = ({ htmlFor, text }) => {
  return (
    <label className="mb-2 font-mono text-[10px] uppercase tracking-[0.22em] text-ink-dim" htmlFor={htmlFor}>
      {text}
    </label>
  );
};

const ContactForm = () => {
  const { t } = useT();
  const [formLoading, setFormLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [fieldsWithError, setFieldsWithError] = useState({});

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    const errorsObj = {};

    if (!data.get("firstname")) errorsObj.firstname = t("contact.form.errors.required");
    if (!data.get("email")) errorsObj.email = t("contact.form.errors.required");
    if (data.get("firstname") && !/^[a-zA-ZÀ-ÿ\s]*$/.test(data.get("firstname"))) {
      errorsObj.firstname = t("contact.form.errors.onlyLetters");
    }
    if (data.get("email") && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.get("email"))) {
      errorsObj.email = t("contact.form.errors.invalidEmail");
    }

    if (Object.keys(errorsObj).length > 0) {
      setFieldsWithError(errorsObj);
      setStatusMessage(t("contact.form.errors.checkForm"));
      return;
    }

    setFormLoading(true);
    setStatusMessage("");
    setFieldsWithError({});

    fetch("https://formspree.io/f/xovqzlql", {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    })
      .then((response) => {
        if (response.ok) {
          event.target.reset();
          setStatusMessage(t("contact.form.success"));
        } else {
          response.json().then((data) => {
            if (Object.hasOwn(data, "errors")) {
              const errorsFormSpree = data["errors"].map((error) => error["message"]).join(", ");
              setStatusMessage(errorsFormSpree);
            } else {
              setStatusMessage(t("contact.form.errors.submit"));
            }
          });
        }
      })
      .catch(() => {
        setStatusMessage(t("contact.form.errors.submit"));
      })
      .finally(() => {
        setFormLoading(false);
      });
  };

  return (
    <form onSubmit={handleSubmit} className="card-surface flex flex-col gap-6 p-6 lg:p-10">
      <div>
        <div className="section-eyebrow">{t("contact.form.eyebrow")}</div>
        <h3 className={clsx("font-display text-4xl italic text-ink xl:text-5xl", { "animate-pulse": formLoading })}>
          <span>{t("contact.form.headline")}</span>
          {formLoading && (
            <span className="ml-2 inline">
              <Loader className="inline" />
            </span>
          )}
        </h3>
        <p className="mt-3 text-[15px] text-ink-muted">{t("contact.form.sub")}</p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="flex flex-col">
          <LabelInput htmlFor="firstname" text={t("contact.form.firstname")} />
          <Input
            className={clsx({ "border-red-400": fieldsWithError.firstname })}
            name="firstname"
            id="firstname"
            type="text"
            placeholder={t("contact.form.firstnamePlaceholder")}
          />
          {fieldsWithError.firstname && <ErrorMessage message={fieldsWithError.firstname} />}
        </div>
        <div className="flex flex-col">
          <LabelInput htmlFor="lastname" text={t("contact.form.lastname")} />
          <Input name="lastname" id="lastname" type="text" placeholder={t("contact.form.lastnamePlaceholder")} />
        </div>

        <div className="flex flex-col">
          <LabelInput htmlFor="email" text={t("contact.form.email")} />
          <Input
            className={clsx({ "border-red-400": fieldsWithError.email })}
            name="email"
            id="email"
            type="email"
            placeholder={t("contact.form.emailPlaceholder")}
          />
          {fieldsWithError.email && <ErrorMessage message={fieldsWithError.email} />}
        </div>
        <div className="flex flex-col">
          <LabelInput htmlFor="phone" text={t("contact.form.phone")} />
          <Input name="phone" id="phone" type="phone" placeholder={t("contact.form.phonePlaceholder")} />
        </div>
      </div>

      <label className="flex flex-col">
        <span className="mb-2 font-mono text-[10px] uppercase tracking-[0.22em] text-ink-dim">{t("contact.form.selectService")}</span>
        <Select name="service">
          <SelectTrigger className="w-full">
            <SelectValue placeholder={t("contact.form.selectService")} />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="web-development">{t("contact.form.services.web")}</SelectItem>
              <SelectItem value="pen-testing">{t("contact.form.services.pen")}</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </label>

      <div className="flex flex-col">
        <LabelInput htmlFor="information" text={t("contact.form.message")} />
        <Textarea
          id="information"
          name="description-message"
          className="h-[200px]"
          placeholder={t("contact.form.messagePlaceholder")}
        />
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={formLoading}
          className={clsx(
            "group inline-flex h-[52px] items-center gap-2 rounded-full bg-accent px-7 font-mono text-[12px] uppercase tracking-[0.22em] font-semibold text-primary transition-all hover:bg-accent-hover disabled:opacity-50",
            { "animate-pulse": formLoading },
          )}
        >
          {formLoading ? <Loader /> : <span>{t("contact.form.send")}</span>}
        </button>
        <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-muted md:ml-2">{statusMessage}</span>
      </div>
    </form>
  );
};

export default ContactForm;
