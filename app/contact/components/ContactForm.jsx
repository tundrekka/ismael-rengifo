"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { Loader } from "lucide-react";
import clsx from "clsx";

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

// main component
const ContactForm = () => {
  const [formLoading, setFormLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [fieldsWithError, setFieldsWithError] = useState({});
  const handleSubmit = async (event) => {
    event.preventDefault();
    var data = new FormData(event.target);
    // setFormLoading(true);
    // setStatusMessage("");
    // setFieldsWithError({});

    // await new Promise((resolve) => setTimeout(resolve, 2000));
    // setFormLoading(false);

    // validations to firt name and email, start
    let errorsObj = {};
    const validations = () => {
      if (!data.get("firstname")) {
        errorsObj.firstname = "This field is required";
      }
      if (!data.get("email")) {
        errorsObj.email = "This field is required";
      }

      // validate name is only letters and spaces
      if (data.get("firstname") && !/^[a-zA-Z\s]*$/.test(data.get("firstname"))) {
        errorsObj.firstname = "Only letters and spaces";
      }

      // validate email
      if (data.get("email") && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.get("email"))) {
        errorsObj.email = "Invalid email";
      }
    };
    validations();

    if (Object.keys(errorsObj).length > 0) {
      setFieldsWithError(errorsObj);
      setStatusMessage("Please check the form for errors");
      return;
    }
    // end validations

    // start the form submission
    setFormLoading(true);
    setStatusMessage("");
    setFieldsWithError({});

    fetch("https://formspree.io/f/xovqzlql", {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          event.target.reset();
          setStatusMessage("Thanks for your submission!");
        } else {
          console.log("error");
          response.json().then((data) => {
            if (Object.hasOwn(data, "errors")) {
              errorsFormSpree = data["errors"].map((error) => error["message"]).join(", ");
              setStatusMessage(errorsFormSpree);
            } else {
              setStatusMessage("Oops! There was a problem submitting your form");
            }
          });
        }
      })
      .catch((error) => {
        setStatusMessage("Oops! There was a problem submitting your form");
      })
      .finally(() => {
        setFormLoading(false);
      });
  };
  return (
    <>
      <form onSubmit={handleSubmit} className="card-surface flex flex-col gap-6 p-6 lg:p-10">
        <div>
          <div className="section-eyebrow">/ Get in touch</div>
          <h3 className={clsx("font-display text-4xl italic text-ink xl:text-5xl", { "animate-pulse": formLoading })}>
            <span>{"Let's"} work together</span>
            {formLoading && (
              <span className="ml-2 inline">
                <Loader className="inline" />
              </span>
            )}
          </h3>
          <p className="mt-3 text-[15px] text-ink-muted">Send me a message to start a new experience.</p>
        </div>
        {/* input */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="flex flex-col">
            <LabelInput htmlFor="firstname" text={"Firstname *"} />
            <Input
              className={clsx({ "border-red-400": fieldsWithError.firstname })}
              name="firstname"
              id="firstname"
              type="text"
              placeholder="Jhon"
            />
            {fieldsWithError.firstname && <ErrorMessage message={fieldsWithError.firstname} />}
          </div>
          <div className="flex flex-col">
            <LabelInput htmlFor="lastname" text={"Lastname"} />
            <Input name="lastname" id="lastname" type="text" placeholder="Doe" />
          </div>

          <div className="flex flex-col">
            <LabelInput htmlFor="email" text={"Email *"} />
            <Input
              className={clsx({ "border-red-400": fieldsWithError.email })}
              name="email"
              id="email"
              type="email"
              placeholder="example@gmail.com"
            />
            {fieldsWithError.email && <ErrorMessage message={fieldsWithError.email} />}
          </div>
          <div className="flex flex-col">
            <LabelInput htmlFor="phone" text={"Phone"} />
            <Input name="phone" id="phone" type="phone" placeholder="584248103737" />
          </div>
        </div>
        {/* select */}

        <label className="flex flex-col">
          <span className="mb-2 font-mono text-[10px] uppercase tracking-[0.22em] text-ink-dim">Select a service</span>
          <Select name="service">
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select a service" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="web-development">Web Development</SelectItem>
                <SelectItem value="pen-testing">Web Penetration Test</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </label>
        {/* textarea */}

        <div className="flex flex-col">
          <LabelInput htmlFor="information" text={"Message"} />

          <Textarea id="information" name="description-message" className="h-[200px]" placeholder="Type your message here." />
        </div>
        {/* btn */}
        <div className="flex flex-wrap items-center gap-4">
          <button
            type="submit"
            disabled={formLoading}
            className={clsx(
              "group inline-flex h-[52px] items-center gap-2 rounded-full bg-accent px-7 font-mono text-[12px] uppercase tracking-[0.22em] font-semibold text-primary transition-all hover:bg-accent-hover disabled:opacity-50",
              { "animate-pulse": formLoading },
            )}
          >
            {formLoading ? <Loader /> : <span>Send message →</span>}
          </button>
          <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-muted md:ml-2">{statusMessage}</span>
        </div>
      </form>
    </>
  );
};

export default ContactForm;
