"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { CheckCircle2, AlertCircle, ArrowRight, Mail, RotateCcw } from "lucide-react";
import { siteConfig } from "@/config/site";
import { Button } from "../common/Button";

interface FormState {
  fullName: string;
  businessEmail: string;
  companyName: string;
  phone: string;
  serviceOfInterest: string;
  businessSize: string;
  message: string;
  privacyConsent: boolean;
}

interface FormErrors {
  fullName?: string;
  businessEmail?: string;
  companyName?: string;
  phone?: string;
  serviceOfInterest?: string;
  businessSize?: string;
  message?: string;
  privacyConsent?: string;
}

export function ContactForm() {
  const searchParams = useSearchParams();
  const preselectedService = searchParams.get("service") || "";
  const preselectedIndustry = searchParams.get("industry") || "";

  const initialMessage = preselectedIndustry
    ? `We are interested in discussing IT solutions specifically for our operations in the ${preselectedIndustry} sector.`
    : "";

  const [formData, setFormData] = useState<FormState>({
    fullName: "",
    businessEmail: "",
    companyName: "",
    phone: "",
    serviceOfInterest: preselectedService || "General Technology Consultation",
    businessSize: "11–50 employees",
    message: initialMessage,
    privacyConsent: false,
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState<boolean>(false);
  const [referenceId, setReferenceId] = useState<string>("");
  const [apiErrorMessage, setApiErrorMessage] = useState<string>("");

  useEffect(() => {
    if (preselectedService) {
      setFormData((prev) => ({ ...prev, serviceOfInterest: preselectedService }));
    }
  }, [preselectedService]);

  const validateField = (name: keyof FormState, value: any): string => {
    switch (name) {
      case "fullName":
        if (!value || value.trim().length < 2) {
          return "Full name is required (minimum 2 characters).";
        }
        return "";
      case "businessEmail":
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!value || !emailRegex.test(value.trim())) {
          return "Please provide a valid business email address.";
        }
        return "";
      case "companyName":
        if (!value || value.trim().length < 1) {
          return "Company name is required.";
        }
        return "";
      case "message":
        if (!value || value.trim().length < 15) {
          return "Please describe your project requirements (minimum 15 characters).";
        }
        return "";
      case "privacyConsent":
        if (!value) {
          return "You must acknowledge our privacy policy to submit an enquiry.";
        }
        return "";
      default:
        return "";
    }
  };

  const handleBlur = (field: keyof FormState) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    const error = validateField(field, formData[field]);
    setErrors((prev) => ({ ...prev, [field]: error }));
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    const fieldValue = type === "checkbox" ? checked : value;

    setFormData((prev) => ({ ...prev, [name]: fieldValue }));

    if (touched[name]) {
      const error = validateField(name as keyof FormState, fieldValue);
      setErrors((prev) => ({ ...prev, [name]: error }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setApiErrorMessage("");

    // Validate all fields
    const newErrors: FormErrors = {
      fullName: validateField("fullName", formData.fullName),
      businessEmail: validateField("businessEmail", formData.businessEmail),
      companyName: validateField("companyName", formData.companyName),
      message: validateField("message", formData.message),
      privacyConsent: validateField("privacyConsent", formData.privacyConsent),
    };

    setTouched({
      fullName: true,
      businessEmail: true,
      companyName: true,
      message: true,
      privacyConsent: true,
    });

    setErrors(newErrors);

    const hasErrors = Object.values(newErrors).some((err) => !!err);
    if (hasErrors) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitSuccess(true);
        setReferenceId(data.referenceId || "CAL-CONFIRMED");
      } else {
        setApiErrorMessage(
          data.error || "Unable to deliver your enquiry at this time. Please use our direct email fallback below."
        );
        if (data.fieldErrors) {
          setErrors(data.fieldErrors);
        }
      }
    } catch (err) {
      setApiErrorMessage(
        "Network communication failure. Please email your enquiry directly to " + siteConfig.contact.email
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setFormData({
      fullName: "",
      businessEmail: "",
      companyName: "",
      phone: "",
      serviceOfInterest: "General Technology Consultation",
      businessSize: "11–50 employees",
      message: "",
      privacyConsent: false,
    });
    setTouched({});
    setErrors({});
    setSubmitSuccess(false);
    setReferenceId("");
    setApiErrorMessage("");
  };

  // Success Confirmation Screen
  if (submitSuccess) {
    return (
      <div className="rounded-2xl border border-emerald-500/40 bg-gradient-to-b from-[#0B1A24] to-[#0A101C] p-8 sm:p-12 text-center space-y-6 animate-in fade-in-50 duration-200">
        <div className="w-16 h-16 rounded-full bg-emerald-950/80 border border-emerald-500/50 flex items-center justify-center text-emerald-400 mx-auto">
          <CheckCircle2 className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-emerald-400">
            Enquiry Received & Logged
          </span>
          <h3 className="text-2xl sm:text-3xl font-bold text-white font-display">
            Thank you, {formData.fullName}.
          </h3>
          <p className="text-sm sm:text-base text-slate-300 max-w-lg mx-auto leading-relaxed">
            Your business enquiry has been registered in our advisory queue. A senior technology
            consultant will review your specifications and contact you within one business day.
          </p>
        </div>

        <div className="p-4 rounded-xl bg-[#090E18] border border-white/10 max-w-md mx-auto text-xs text-left space-y-2 font-mono">
          <div className="flex justify-between text-slate-400">
            <span>Reference ID:</span>
            <span className="text-blue-400 font-semibold">{referenceId}</span>
          </div>
          <div className="flex justify-between text-slate-400">
            <span>Company:</span>
            <span className="text-slate-200">{formData.companyName}</span>
          </div>
          <div className="flex justify-between text-slate-400">
            <span>Service Scope:</span>
            <span className="text-slate-200 truncate max-w-[200px]">{formData.serviceOfInterest}</span>
          </div>
        </div>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            type="button"
            variant="secondary"
            size="md"
            onClick={resetForm}
            leftIcon={<RotateCcw className="w-4 h-4" />}
          >
            Submit Another Enquiry
          </Button>
          <Button
            href="/"
            variant="primary"
            size="md"
            rightIcon={<ArrowRight className="w-4 h-4" />}
          >
            Return to Homepage
          </Button>
        </div>
      </div>
    );
  }

  // Pre-compiled mailto fallback link with pre-filled subject and body
  const mailtoUrl = `mailto:${siteConfig.contact.email}?subject=${encodeURIComponent(
    `Business Enquiry: ${formData.companyName || "Technology Consultation"}`
  )}&body=${encodeURIComponent(
    `Name: ${formData.fullName}\nCompany: ${formData.companyName}\nEmail: ${formData.businessEmail}\nPhone: ${formData.phone}\nService: ${formData.serviceOfInterest}\nTeam Size: ${formData.businessSize}\n\nProject Requirements:\n${formData.message}`
  )}`;

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-2xl border border-white/[0.08] bg-[#0E1627] p-6 sm:p-10 space-y-6 shadow-xl"
      aria-label="Redifff Business Enquiry Form"
    >
      {apiErrorMessage && (
        <div
          role="alert"
          className="p-4 rounded-xl bg-red-950/60 border border-red-800 text-xs sm:text-sm text-red-200 flex items-start gap-3"
        >
          <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
          <div className="space-y-2">
            <p>{apiErrorMessage}</p>
            <a
              href={mailtoUrl}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-white bg-red-800/80 px-3 py-1.5 rounded-md hover:bg-red-700 transition-colors"
            >
              <Mail className="w-3.5 h-3.5" /> Send via Email Client Instead
            </a>
          </div>
        </div>
      )}

      {/* Row 1: Name and Business Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="fullName"
            className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2 font-display"
          >
            Full Name <span className="text-blue-400">*</span>
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            required
            autoComplete="name"
            value={formData.fullName}
            onChange={handleChange}
            onBlur={() => handleBlur("fullName")}
            aria-invalid={!!errors.fullName}
            aria-describedby={errors.fullName ? "fullName-error" : undefined}
            disabled={isSubmitting}
            placeholder="e.g. Eleanor Vance"
            className={`w-full px-4 py-3 rounded-xl bg-[#090E18] text-sm text-white placeholder-slate-500 border transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors.fullName
                ? "border-red-500 focus:border-red-500"
                : "border-white/10 hover:border-slate-600 focus:border-blue-500"
            }`}
          />
          {errors.fullName && (
            <p id="fullName-error" className="mt-1.5 text-xs text-red-400" role="alert">
              {errors.fullName}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="businessEmail"
            className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2 font-display"
          >
            Business Email <span className="text-blue-400">*</span>
          </label>
          <input
            id="businessEmail"
            name="businessEmail"
            type="email"
            required
            autoComplete="email"
            value={formData.businessEmail}
            onChange={handleChange}
            onBlur={() => handleBlur("businessEmail")}
            aria-invalid={!!errors.businessEmail}
            aria-describedby={errors.businessEmail ? "businessEmail-error" : undefined}
            disabled={isSubmitting}
            placeholder="name@company.com"
            className={`w-full px-4 py-3 rounded-xl bg-[#090E18] text-sm text-white placeholder-slate-500 border transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors.businessEmail
                ? "border-red-500 focus:border-red-500"
                : "border-white/10 hover:border-slate-600 focus:border-blue-500"
            }`}
          />
          {errors.businessEmail && (
            <p id="businessEmail-error" className="mt-1.5 text-xs text-red-400" role="alert">
              {errors.businessEmail}
            </p>
          )}
        </div>
      </div>

      {/* Row 2: Company Name and Phone Number */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="companyName"
            className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2 font-display"
          >
            Company Name <span className="text-blue-400">*</span>
          </label>
          <input
            id="companyName"
            name="companyName"
            type="text"
            required
            autoComplete="organization"
            value={formData.companyName}
            onChange={handleChange}
            onBlur={() => handleBlur("companyName")}
            aria-invalid={!!errors.companyName}
            aria-describedby={errors.companyName ? "companyName-error" : undefined}
            disabled={isSubmitting}
            placeholder="e.g. Apex Dynamics Ltd"
            className={`w-full px-4 py-3 rounded-xl bg-[#090E18] text-sm text-white placeholder-slate-500 border transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors.companyName
                ? "border-red-500 focus:border-red-500"
                : "border-white/10 hover:border-slate-600 focus:border-blue-500"
            }`}
          />
          {errors.companyName && (
            <p id="companyName-error" className="mt-1.5 text-xs text-red-400" role="alert">
              {errors.companyName}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="phone"
            className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2 font-display"
          >
            Phone Number <span className="text-slate-500 text-[10px] lowercase">(optional)</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={formData.phone}
            onChange={handleChange}
            disabled={isSubmitting}
            placeholder="+44 20 7946 0991"
            className="w-full px-4 py-3 rounded-xl bg-[#090E18] text-sm text-white placeholder-slate-500 border border-white/10 hover:border-slate-600 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
          />
        </div>
      </div>

      {/* Row 3: Service of Interest and Business Size */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="serviceOfInterest"
            className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2 font-display"
          >
            Service of Interest
          </label>
          <select
            id="serviceOfInterest"
            name="serviceOfInterest"
            value={formData.serviceOfInterest}
            onChange={handleChange}
            disabled={isSubmitting}
            className="w-full px-4 py-3 rounded-xl bg-[#090E18] text-sm text-white border border-white/10 hover:border-slate-600 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
          >
            <option value="General Technology Consultation">General Technology Consultation</option>
            {siteConfig.services.map((s) => (
              <option key={s.slug} value={s.title}>
                {s.title}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label
            htmlFor="businessSize"
            className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2 font-display"
          >
            Approximate Business Size
          </label>
          <select
            id="businessSize"
            name="businessSize"
            value={formData.businessSize}
            onChange={handleChange}
            disabled={isSubmitting}
            className="w-full px-4 py-3 rounded-xl bg-[#090E18] text-sm text-white border border-white/10 hover:border-slate-600 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
          >
            <option value="1–10 employees">1–10 employees</option>
            <option value="11–50 employees">11–50 employees</option>
            <option value="51–200 employees">51–200 employees</option>
            <option value="201–500 employees">201–500 employees</option>
            <option value="500+ employees">500+ employees</option>
          </select>
        </div>
      </div>

      {/* Row 4: Message */}
      <div>
        <label
          htmlFor="message"
          className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2 font-display"
        >
          Message / Project Requirements <span className="text-blue-400">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          value={formData.message}
          onChange={handleChange}
          onBlur={() => handleBlur("message")}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
          disabled={isSubmitting}
          placeholder="Please describe your current IT setup, primary challenges, timelines, or specific goals..."
          className={`w-full px-4 py-3 rounded-xl bg-[#090E18] text-sm text-white placeholder-slate-500 border transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 ${
            errors.message
              ? "border-red-500 focus:border-red-500"
              : "border-white/10 hover:border-slate-600 focus:border-blue-500"
          }`}
        />
        {errors.message && (
          <p id="message-error" className="mt-1.5 text-xs text-red-400" role="alert">
            {errors.message}
          </p>
        )}
      </div>

      {/* Row 5: Privacy Consent Checkbox */}
      <div>
        <label className="flex items-start gap-3 cursor-pointer select-none">
          <input
            type="checkbox"
            name="privacyConsent"
            checked={formData.privacyConsent}
            onChange={handleChange}
            onBlur={() => handleBlur("privacyConsent")}
            aria-invalid={!!errors.privacyConsent}
            aria-describedby={errors.privacyConsent ? "privacyConsent-error" : undefined}
            disabled={isSubmitting}
            className="w-4 h-4 mt-0.5 rounded bg-[#090E18] border-white/20 text-blue-600 focus:ring-blue-500 focus:ring-offset-slate-900"
          />
          <span className="text-xs text-slate-300 leading-relaxed">
            I acknowledge that Redifff will process my details to respond to this commercial enquiry
            in accordance with the{" "}
            <Link href="/privacy-policy" className="text-blue-400 hover:underline" target="_blank">
              Privacy Policy
            </Link>
            . <span className="text-blue-400">*</span>
          </span>
        </label>
        {errors.privacyConsent && (
          <p id="privacyConsent-error" className="mt-1.5 text-xs text-red-400" role="alert">
            {errors.privacyConsent}
          </p>
        )}
      </div>

      {/* Submit Button */}
      <div className="pt-2">
        <Button
          type="submit"
          variant="primary"
          size="lg"
          isLoading={isSubmitting}
          disabled={isSubmitting}
          className="w-full sm:w-auto"
          rightIcon={<ArrowRight className="w-4 h-4" />}
        >
          Submit Business Enquiry
        </Button>
      </div>

      <p className="text-[11px] text-slate-400 leading-relaxed">
        Confidentiality guaranteed. We never sell or share commercial enquiry data. Direct advisory: {siteConfig.contact.email}.
      </p>
    </form>
  );
}
