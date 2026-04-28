"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import clsx from "clsx";
import { useState } from "react";
import { Controller, useForm, useWatch } from "react-hook-form";
import * as z from "zod";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(50),
  email: z.string().email("Invalid email address"),
  phone: z
    .string()
    .min(1, "Contact is required")
    .refine((v) => /^\+?[1-9]\d{1,14}$/.test(v), "Invalid contact number"),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(500),
  agree: z.boolean().refine((val) => val === true, "You must agree to terms"),
});

type FormData = z.infer<typeof formSchema>;

export default function ContactForm({
  variant = "light",
  className = "",
  formId = "contact",
}: {
  variant?: "light" | "dark";
  className?: string;
  formId?: string;
}) {
  const isLight = variant === "light";
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const labelClass = clsx(
    "font-['Inter'] text-sm font-[500]",
    isLight ? "text-black" : "text-gray-100"
  );

  const inputClass = (hasError: boolean) =>
    clsx(
      "mt-2 block w-full rounded-2xl border px-4 py-3 font-['Inter'] text-black outline-none",
      isLight
        ? ["bg-white", hasError ? "border-gray-800" : "border-gray-300"]
        : [
            "bg-gray-800 text-gray-100",
            hasError ? "border-gray-400" : "border-gray-600",
          ]
    );

  const agreeLabelClass = clsx(
    "font-['Inter'] text-sm",
    isLight ? "text-gray-600" : "text-gray-400"
  );

  const checkboxClass = clsx(
    "mt-1 h-4 w-4 rounded",
    isLight
      ? "border-gray-400 accent-[color:var(--icfg-leaf)]"
      : "border-gray-500 accent-white"
  );

  const errorTextClass = "mt-2 text-sm font-[600] text-gray-900";

  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
      agree: false,
    },
  });

  const onSubmit = async (data: FormData) => {
    setSubmitError(null);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          phone: data.phone.trim(),
        }),
      });

      if (!response.ok) {
        const body = await response.json().catch(() => ({}));
        throw new Error(
          (body as { error?: string }).error ?? "Failed to submit"
        );
      }

      reset();
      setSubmitted(true);
    } catch (err) {
      setSubmitError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again."
      );
    }
  };

  const watchMessage = useWatch({ control, name: "message" }) ?? "";

  if (submitted) {
    return (
      <div
        className={clsx(
          "mx-auto mt-16 w-full max-w-[40rem] rounded-2xl border px-8 py-10 text-center",
          isLight
            ? "border-gray-200 bg-white"
            : "border-gray-700 bg-gray-800"
        )}
      >
        <p
          className={clsx(
            "font-['Inter'] text-[1.1rem] font-[600]",
            isLight ? "text-black" : "text-white"
          )}
        >
          Message received
        </p>
        <p
          className={clsx(
            "mt-2 font-['Inter'] text-[0.95rem]",
            isLight ? "text-gray-600" : "text-gray-400"
          )}
        >
          We&apos;ll get back to you — usually within a few days.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className={clsx(
            "mt-6 font-['Inter'] text-[0.88rem] font-[500] underline-offset-2 hover:underline",
            isLight
              ? "text-[color:var(--icfg-forest)]"
              : "text-gray-300"
          )}
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={clsx(
        "mx-auto mt-16 w-full max-w-[40rem] space-y-6",
        className
      )}
      id={formId}
    >
      <div>
        <label htmlFor={`${formId}-name`} className={labelClass}>
          Name *
        </label>
        <input
          id={`${formId}-name`}
          type="text"
          maxLength={50}
          {...register("name")}
          className={inputClass(!!errors.name)}
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? `${formId}-name-error` : undefined}
        />
        {errors.name && (
          <p id={`${formId}-name-error`} className={errorTextClass}>
            {errors.name.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor={`${formId}-email`} className={labelClass}>
          Email *
        </label>
        <input
          id={`${formId}-email`}
          type="email"
          autoComplete="email"
          {...register("email")}
          className={inputClass(!!errors.email)}
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? `${formId}-email-error` : undefined}
        />
        {errors.email && (
          <p id={`${formId}-email-error`} className={errorTextClass}>
            {errors.email.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor={`${formId}-phone`} className={labelClass}>
          Contact *
        </label>
        <input
          id={`${formId}-phone`}
          type="tel"
          autoComplete="tel"
          {...register("phone")}
          className={inputClass(!!errors.phone)}
          aria-invalid={!!errors.phone}
          aria-describedby={errors.phone ? `${formId}-phone-error` : undefined}
        />
        {errors.phone && (
          <p id={`${formId}-phone-error`} className={errorTextClass}>
            {errors.phone.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor={`${formId}-message`} className={labelClass}>
          Message * ({watchMessage.length || 0}/500)
        </label>
        <textarea
          id={`${formId}-message`}
          rows={4}
          maxLength={500}
          {...register("message")}
          className={inputClass(!!errors.message)}
          aria-invalid={!!errors.message}
          aria-describedby={
            errors.message ? `${formId}-message-error` : undefined
          }
        />
        {errors.message && (
          <p id={`${formId}-message-error`} className={errorTextClass}>
            {errors.message.message}
          </p>
        )}
      </div>

      <div className="flex items-start gap-3">
        <Controller
          name="agree"
          control={control}
          render={({ field }) => (
            <input
              id={`${formId}-agree`}
              type="checkbox"
              checked={field.value}
              onChange={field.onChange}
              onBlur={field.onBlur}
              ref={field.ref}
              className={checkboxClass}
            />
          )}
        />
        <label htmlFor={`${formId}-agree`} className={agreeLabelClass}>
          I agree to the terms and privacy policy.
        </label>
      </div>
      {errors.agree && (
        <p className={errorTextClass}>{errors.agree.message}</p>
      )}

      {submitError && (
        <p
          role="alert"
          className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 font-['Inter'] text-[0.9rem] text-red-700"
        >
          {submitError}
        </p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className={clsx(
          "w-full rounded-2xl px-[3.75rem] py-[1.125rem] font-['Inter'] font-[500] tracking-[-0.02em]",
          isSubmitting
            ? isLight
              ? "cursor-not-allowed bg-gray-300 text-gray-500"
              : "cursor-not-allowed bg-gray-600 text-gray-400"
            : isLight
              ? "icfg-btn-primary"
              : "bg-white text-black shadow-md"
        )}
      >
        {isSubmitting ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
}
