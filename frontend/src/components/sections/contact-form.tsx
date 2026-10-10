"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/cn";

/**
 * Set NEXT_PUBLIC_CONTACT_EMAIL to a real inbox and the form offers a
 * pre filled mail link instead of a dead end.
 */
const CONTACT_EMAIL = process.env.NEXT_PUBLIC_CONTACT_EMAIL;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

type Values = { name: string; email: string; message: string };
type Errors = Partial<Record<keyof Values, string>>;
type Status = "idle" | "preview";

const EMPTY: Values = { name: "", email: "", message: "" };

function validate({ name, email, message }: Values): Errors {
  const errors: Errors = {};
  const trimmedName = name.trim();
  const trimmedEmail = email.trim();
  const trimmedMessage = message.trim();

  if (!trimmedName) errors.name = "Please tell us your name.";
  else if (trimmedName.length < 2) errors.name = "That name looks too short.";

  if (!trimmedEmail) errors.email = "We need an email address to reply to.";
  else if (!EMAIL_PATTERN.test(trimmedEmail)) errors.email = "Please check this email address.";

  if (!trimmedMessage) errors.message = "Tell us a little about the project.";
  else if (trimmedMessage.length < 20)
    errors.message = `A little more detail helps. ${20 - trimmedMessage.length} more characters.`;

  return errors;
}

const fieldClass =
  "w-full border-b border-line-night bg-transparent pb-3 pt-2 text-[0.98rem] text-paper placeholder:text-muted-night/45 transition-colors duration-300 outline-none focus:border-accent-bright";

const labelClass = "font-mono text-muted-night text-[0.66rem] tracking-[0.2em] uppercase";

export function ContactForm() {
  const [values, setValues] = useState<Values>(EMPTY);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [submittedValues, setSubmittedValues] = useState<Values>(EMPTY);

  const update = (field: keyof Values) => (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const next = { ...values, [field]: event.target.value };
    setValues(next);
    if (errors[field]) {
      setErrors((current) => ({ ...current, [field]: validate(next)[field] }));
    }
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      const firstField = (["name", "email", "message"] as const).find((field) => nextErrors[field]);
      if (firstField) document.getElementById(`contact-${firstField}`)?.focus();
      return;
    }

    setSubmittedValues(values);
    setStatus("preview");
  };

  const mailtoHref = CONTACT_EMAIL
    ? `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
        `Project enquiry from ${submittedValues.name.trim() || "the website"}`,
      )}&body=${encodeURIComponent(
        `${submittedValues.message.trim()}\n\nReply to: ${submittedValues.email.trim()}`,
      )}`
    : undefined;

  if (status === "preview") {
    return (
      <div
        role="status"
        aria-live="polite"
        className="border-line-night bg-night-raised flex flex-col items-start gap-5 border p-7 sm:p-9"
      >
        <p className="font-mono text-accent-bright text-[0.66rem] tracking-[0.2em] uppercase">
          Validated, not sent
        </p>
        <p className="text-[1.05rem] leading-relaxed text-paper">
          Your details pass validation. This site has no backend attached yet, so the message was not
          transmitted anywhere.
        </p>
        <p className="text-muted-night text-[0.93rem] leading-relaxed">
          {mailtoHref
            ? "Open the prepared email in your mail app to send it to us directly."
            : "Once a contact address is configured this step hands the message to your mail app."}
        </p>
        <div className="mt-1 flex flex-wrap gap-3">
          {mailtoHref ? (
            <Button variant="accent" onClick={() => window.open(mailtoHref, "_self")}>
              Open in mail app
            </Button>
          ) : null}
          <Button
            variant="inverse"
            onClick={() => {
              setValues(EMPTY);
              setErrors({});
              setStatus("idle");
            }}
          >
            Write another message
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="flex flex-col gap-7">
      <div className="grid gap-7 sm:grid-cols-2">
        <Field
          id="contact-name"
          label="Name"
          error={errors.name}
          value={values.name}
          onChange={update("name")}
          placeholder="Your name"
          autoComplete="name"
        />
        <Field
          id="contact-email"
          label="Email"
          type="email"
          error={errors.email}
          value={values.email}
          onChange={update("email")}
          placeholder="you@company.com"
          autoComplete="email"
        />
      </div>

      <div>
        <label htmlFor="contact-message" className={labelClass}>
          Project details
        </label>
        <textarea
          id="contact-message"
          rows={4}
          value={values.message}
          onChange={update("message")}
          placeholder="What does your school need? Homework, classwork, attendance, or something else?"
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "contact-message-error" : undefined}
          className={cn(
            fieldClass,
            "resize-y",
            errors.message ? "border-danger-night" : "border-line-night",
          )}
        />
        {errors.message ? (
          <p id="contact-message-error" className="text-danger-night mt-2.5 text-[0.82rem]">
            {errors.message}
          </p>
        ) : null}
      </div>

      <div className="flex flex-wrap items-center gap-x-6 gap-y-4">
        <Button type="submit" variant="accent" size="lg">
          Send message
        </Button>
        <p className="text-muted-night max-w-[30ch] text-[0.8rem] leading-relaxed">
          This form is a front end preview. It validates what you type, but no message leaves the
          browser yet.
        </p>
      </div>
    </form>
  );
}

function Field({
  id,
  label,
  error,
  value,
  onChange,
  placeholder,
  type = "text",
  autoComplete,
}: {
  id: string;
  label: string;
  error?: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  type?: string;
  autoComplete?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className={labelClass}>
        {label}
      </label>
      <input
        id={id}
        name={id.replace("contact-", "")}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        autoComplete={autoComplete}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        className={cn(fieldClass, error ? "border-danger-night" : "border-line-night")}
      />
      {error ? (
        <p id={`${id}-error`} className="text-danger-night mt-2.5 text-[0.82rem]">
          {error}
        </p>
      ) : null}
    </div>
  );
}