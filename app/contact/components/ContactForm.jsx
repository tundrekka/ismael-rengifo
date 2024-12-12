"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import clsx from "clsx";
import { Loader } from "lucide-react";

const ErrorMessage = ({ message }) => {
  return <span className="text-red-400 text-xs mt-2">{message}</span>;
};

const LabelInput = ({ htmlFor, text }) => {
  return (
    <label className="text-sm text-white/80 mb-2" htmlFor={htmlFor}>
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
      if (
        data.get("firstname") &&
        !/^[a-zA-Z\s]*$/.test(data.get("firstname"))
      ) {
        errorsObj.firstname = "Only letters and spaces";
      }

      // validate email
      if (
        data.get("email") &&
        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.get("email"))
      ) {
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
              errorsFormSpree = data["errors"]
                .map((error) => error["message"])
                .join(", ");
              setStatusMessage(errorsFormSpree);
            } else {
              setStatusMessage(
                "Oops! There was a problem submitting your form"
              );
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
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-6 p-4 lg:p-10 bg-[#27272c] rounded-xl"
      >
        <h3
          className={clsx("text-4xl text-accent", {
            "animate-pulse": formLoading,
          })}
        >
          <span>{"Let's"} work together</span>

          {formLoading && (
            <span className="inline ml-2">
              <Loader className="inline" />
            </span>
          )}
        </h3>
        <p className="text-white/60">
          Send me a message to start a new experience!
        </p>
        {/* input */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col">
            <LabelInput htmlFor="firstname" text={"Firstname *"} />
            <Input
              className={clsx({ "border-red-400": fieldsWithError.firstname })}
              name="firstname"
              id="firstname"
              type="text"
              placeholder="Jhon"
            />
            {fieldsWithError.firstname && (
              <ErrorMessage message={fieldsWithError.firstname} />
            )}
          </div>
          <div className="flex flex-col">
            <LabelInput htmlFor="lastname" text={"Lastname"} />
            <Input
              name="lastname"
              id="lastname"
              type="text"
              placeholder="Doe"
            />
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
            {fieldsWithError.email && (
              <ErrorMessage message={fieldsWithError.email} />
            )}
          </div>
          <div className="flex flex-col">
            <LabelInput htmlFor="phone" text={"Phone"} />
            <Input
              name="phone"
              id="phone"
              type="phone"
              placeholder="584248103737"
            />
          </div>
        </div>
        {/* select */}

        <label className="text-sm text-white/80 mb-2">
          <p className="mb-2">Select a service</p>
          <Select name="service">
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select a service" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="web-development">Web Development</SelectItem>
                <SelectItem value="pen-testing">
                  Web Penetration Test
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </label>
        {/* textarea */}

        <div className="flex flex-col">
          <LabelInput htmlFor="information" text={"Message"} />

          <Textarea
            id="information"
            name="description-message"
            className="h-[200px]"
            placeholder="Type your message here."
          />
        </div>
        {/* btn */}
        <div className="flex flex-wrap gap-4 items-center">
          <Button
            type="submit"
            disabled={formLoading}
            variant={"outline"}
            size="md"
            className={clsx("max-w-40", { "animate-pulse": formLoading })}
          >
            {formLoading ? (
              <span>
                <Loader />
              </span>
            ) : (
              "Send message"
            )}
          </Button>
          <span className="text-white/60 md:ml-3 text-sm">{statusMessage}</span>
        </div>
      </form>
    </>
  );
};

export default ContactForm;
