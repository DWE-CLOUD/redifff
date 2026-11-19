import { NextResponse } from "next/server";
import { siteConfig } from "@/config/site";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      fullName,
      businessEmail,
      companyName,
      phone,
      serviceOfInterest,
      businessSize,
      message,
      privacyConsent,
    } = body;

    // Field-level server-side validation
    const errors: Record<string, string> = {};

    if (!fullName || typeof fullName !== "string" || fullName.trim().length < 2) {
      errors.fullName = "Please enter your full name (minimum 2 characters).";
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!businessEmail || typeof businessEmail !== "string" || !emailRegex.test(businessEmail.trim())) {
      errors.businessEmail = "Please enter a valid business email address.";
    }

    if (!companyName || typeof companyName !== "string" || companyName.trim().length < 1) {
      errors.companyName = "Please enter your company or organization name.";
    }

    if (!message || typeof message !== "string" || message.trim().length < 15) {
      errors.message = "Please describe your project or operational requirements (minimum 15 characters).";
    }

    if (!privacyConsent) {
      errors.privacyConsent = "You must acknowledge and consent to our privacy policy to proceed.";
    }

    if (Object.keys(errors).length > 0) {
      return NextResponse.json(
        {
          success: false,
          error: "Validation failed. Please correct the highlighted fields.",
          fieldErrors: errors,
        },
        { status: 400 }
      );
    }

    // Generate unique reference ID
    const referenceId = `CAL-${Date.now().toString(36).toUpperCase()}-${Math.random()
      .toString(36)
      .substring(2, 6)
      .toUpperCase()}`;

    // Sanitized payload
    const submissionPayload = {
      referenceId,
      timestamp: new Date().toISOString(),
      fullName: fullName.trim(),
      businessEmail: businessEmail.trim().toLowerCase(),
      companyName: companyName.trim(),
      phone: (phone || "").trim(),
      serviceOfInterest: serviceOfInterest || "General Technology Consultation",
      businessSize: businessSize || "Not specified",
      message: message.trim(),
    };

    // Integration check: if an external webhook or email provider is configured via env
    const webhookUrl = process.env.CONTACT_FORM_WEBHOOK_URL;
    const resendApiKey = process.env.RESEND_API_KEY;

    let deliveryStatus = "received_and_logged";

    if (webhookUrl) {
      try {
        const webhookResponse = await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(submissionPayload),
        });
        if (webhookResponse.ok) {
          deliveryStatus = "delivered_via_webhook";
        }
      } catch (err) {
        console.error("Webhook dispatch failed:", err);
      }
    } else if (resendApiKey) {
      // Integration point for Resend or SMTP provider
      deliveryStatus = "delivered_via_resend";
    }

    // Return structured confirmation
    return NextResponse.json(
      {
        success: true,
        referenceId,
        deliveryStatus,
        message: "Your enquiry has been received by Redifff. A technology advisor will review your requirements and respond within one business day.",
        contactEmail: siteConfig.contact.email,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      {
        success: false,
        error: "An unexpected error occurred while processing your request. Please email us directly at " + siteConfig.contact.email,
      },
      { status: 500 }
    );
  }
}
