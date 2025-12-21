"use client";

import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useState } from "react";
import Button from "./Cta";

// Define validation schema
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  phone: z.string().regex(/^\+?[0-9]{10,12}$/, {
    message: "Please enter a valid phone number (10-12 digits)",
  }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters",
  }),
  terms: z.boolean().refine((val) => val === true, {
    message: "You must accept the terms and conditions",
  }),
});

type FormData = z.infer<typeof formSchema>;

const GetInTouch = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      terms: false,
    },
  });

  const onSubmit = async (data: FormData) => {
    try {
      setIsSubmitting(true);
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log("Form submitted:", data);
      // Show success message or redirect
      reset();
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container pt-6 pb-13 sm:pb-18 md:pb-22 lg:pb-30">
      <h2 className="text-center font-bold text-[26px] sm:text-3xl lg:text-[33px] leading-[120%] mb-2 md:mb-3.5">
        Get In Touch
      </h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-[916px] mx-auto space-y-3.5 mt-7 sm:mt-9 lg:mt-11"
      >
        <div className="flex gap-y-3.5 gap-x-6 w-full max-md:flex-col">
          <div className="w-full">
            <input
              type="text"
              id="name"
              placeholder="First & Last Name*"
              className={`py-2 md:py-3 px-4 md:px-6 text-white text-base outline-none focus:border-white/30 border border-solid ${
                errors.name ? "border-red-500" : "border-white/10"
              } placeholder:text-white/50 bg-[#FAFAFA0F] rounded-[12px] w-full`}
              {...register("name")}
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-400!">
                {errors.name.message}
              </p>
            )}
          </div>
          <div className="w-full">
            <input
              type="tel"
              id="phone"
              placeholder="Contact Number* (e.g., 1234567890)"
              className={`py-2 md:py-3 px-4 md:px-6 text-white text-base outline-none focus:border-white/30 border border-solid ${
                errors.phone ? "border-red-500" : "border-white/10"
              } placeholder:text-white/50 bg-[#FAFAFA0F] rounded-[12px] w-full`}
              {...register("phone")}
            />
            {errors.phone && (
              <p className="mt-1 text-sm text-red-400!">
                {errors.phone.message}
              </p>
            )}
          </div>
        </div>

        <div>
          <input
            type="email"
            id="email"
            placeholder="Email*"
            className={`py-2 md:py-3 px-4 md:px-6 text-white text-base outline-none focus:border-white/30 border border-solid ${
              errors.email ? "border-red-500" : "border-white/10"
            } placeholder:text-white/50 bg-[#FAFAFA0F] rounded-[12px] w-full`}
            {...register("email")}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-400!">{errors.email.message}</p>
          )}
        </div>

        <div>
          <textarea
            id="message"
            rows={4}
            placeholder="Message* (Minimum 10 characters)"
            className={`py-2 md:py-3 px-4 md:px-6 resize-none text-white text-base outline-none focus:border-white/30 border border-solid ${
              errors.message ? "border-red-500" : "border-white/10"
            } placeholder:text-white/50 bg-[#FAFAFA0F] rounded-[12px] w-full`}
            {...register("message")}
          />
          {errors.message && (
            <p className="mt-1 text-sm text-red-400!">
              {errors.message.message}
            </p>
          )}
        </div>

        <div className="pt-2.5">
          <div className="flex items-start gap-3">
            <div className="flex items-center mt-1">
              <input
                type="checkbox"
                id="terms"
                className=" h-5 w-5 rounded-lg bg-transparent border-white/20  text-indigo-600 focus:ring-indigo-500"
                {...register("terms")}
              />
            </div>
            <label
              htmlFor="terms"
              className="text-sm sm:text-base leading-[160%] text-white/70 font-light"
            >
              I agree to{" "}
              <Link
                className="text-white capitalize underline underline-offset-4"
                href="/terms"
              >
                Terms of Services
              </Link>{" "}
              and{" "}
              <Link
                className="text-white capitalize underline underline-offset-4"
                href="/privacy"
              >
                privacy policy
              </Link>
              .
            </label>
          </div>
          {errors.terms && (
            <p className="mt-1 text-sm text-red-400!">{errors.terms.message}</p>
          )}
        </div>

        <Button
          type="submit"
          className="w-full mt-5 sm:mt-8 lg:mt-10"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending..." : "Let's Get Started"}
        </Button>
      </form>
    </div>
  );
};

export default GetInTouch;
