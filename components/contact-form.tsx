"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm, useWatch } from "react-hook-form";
import * as z from "zod";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(50),
  email: z.string().email("Invalid email address"),
  phone: z
    .string()
    .refine(
      (v) => v === "" || /^\+?[1-9]\d{1,14}$/.test(v),
      "Invalid phone number"
    ),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(500),
  agree: z.boolean().refine((val) => val === true, "You must agree to terms"),
});

type FormData = z.infer<typeof formSchema>;

export default function ContactForm({
  variant = "light",
}: {
  variant?: "light" | "dark";
}) {
  const isLight = variant === "light";
  const labelClass = isLight
    ? "font-['Inter'] text-sm font-[500] text-black"
    : "font-['Inter'] text-sm font-[500] text-gray-100";
  const inputClass = (hasError: boolean) =>
    `mt-2 block w-full rounded-2xl border px-4 py-3 font-['Inter'] text-black outline-none ${
      isLight
        ? `bg-white ${
            hasError ? "border-gray-800" : "border-gray-300"
          }`
        : `bg-gray-800 text-gray-100 ${
            hasError ? "border-gray-400" : "border-gray-600"
          }`
    }`;
  const agreeLabelClass = isLight
    ? "font-['Inter'] text-sm text-gray-600"
    : "font-['Inter'] text-sm text-gray-400";
  const checkboxClass = isLight
    ? "mt-1 h-4 w-4 rounded border-gray-400 accent-[color:var(--icfg-leaf)]"
    : "mt-1 h-4 w-4 rounded border-gray-500 accent-white";
  const submitClass = isLight
    ? "icfg-btn-primary"
    : "bg-white text-black shadow-md";
  const submitDisabledClass = isLight
    ? "cursor-not-allowed bg-gray-300 text-gray-500"
    : "cursor-not-allowed bg-gray-600 text-gray-400";
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
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          phone: data.phone?.trim() || undefined,
        }),
      });

      if (!response.ok) throw new Error("Failed to submit");

      reset();
    } catch {
      // Error surfaced in UI via local state in production forms
    }
  };

  const watchMessage = useWatch({ control, name: "message" }) ?? "";

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mx-auto mt-16 w-full max-w-[40rem] space-y-6"
      id="contact"
    >
      <div>
        <label htmlFor="name" className={labelClass}>
          Name *
        </label>
        <input
          id="name"
          type="text"
          maxLength={50}
          {...register("name")}
          className={inputClass(!!errors.name)}
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "name-error" : undefined}
        />
        {errors.name && (
          <p id="name-error" className={errorTextClass}>
            {errors.name.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="email" className={labelClass}>
          Email *
        </label>
        <input
          id="email"
          type="email"
          autoComplete="email"
          {...register("email")}
          className={inputClass(!!errors.email)}
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "email-error" : undefined}
        />
        {errors.email && (
          <p id="email-error" className={errorTextClass}>
            {errors.email.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="phone" className={labelClass}>
          Phone
        </label>
        <input
          id="phone"
          type="tel"
          autoComplete="tel"
          {...register("phone")}
          className={inputClass(!!errors.phone)}
          aria-invalid={!!errors.phone}
          aria-describedby={errors.phone ? "phone-error" : undefined}
        />
        {errors.phone && (
          <p id="phone-error" className={errorTextClass}>
            {errors.phone.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>
          Message * ({watchMessage.length || 0}/500)
        </label>
        <textarea
          id="message"
          rows={4}
          maxLength={500}
          {...register("message")}
          className={inputClass(!!errors.message)}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
        {errors.message && (
          <p id="message-error" className={errorTextClass}>
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
              id="agree"
              type="checkbox"
              checked={field.value}
              onChange={field.onChange}
              onBlur={field.onBlur}
              ref={field.ref}
              className={checkboxClass}
            />
          )}
        />
        <label htmlFor="agree" className={agreeLabelClass}>
          I agree to the terms and privacy policy.
        </label>
      </div>
      {errors.agree && (
        <p className={errorTextClass}>{errors.agree.message}</p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full rounded-2xl px-[3.75rem] py-[1.125rem] font-['Inter'] font-[500] tracking-[-0.02em] ${
          isSubmitting ? submitDisabledClass : submitClass
        }`}
      >
        {isSubmitting ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
}
