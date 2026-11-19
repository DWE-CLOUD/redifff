import React from "react";
import Link from "next/link";

interface LogoProps {
  variant?: "full" | "mark";
  theme?: "dark" | "light";
  size?: "sm" | "md" | "lg";
  className?: string;
  linkToHome?: boolean;
}

export function Logo({
  variant = "full",
  theme = "dark",
  size = "md",
  className = "",
  linkToHome = true,
}: LogoProps) {
  const markDimensions = {
    sm: { width: 28, height: 28 },
    md: { width: 36, height: 36 },
    lg: { width: 44, height: 44 },
  }[size];

  const textSize = {
    sm: "text-lg",
    md: "text-xl",
    lg: "text-2xl",
  }[size];

  const wordmarkColor = theme === "dark" ? "text-white" : "text-slate-900";

  const markSvg = (
    <svg
      width={markDimensions.width}
      height={markDimensions.height}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0 transition-transform duration-200 group-hover:scale-105"
      aria-hidden="true"
    >
      <rect width="40" height="40" rx="8" fill={theme === "dark" ? "#17243A" : "#0B111E"} />
      {/* Precision Geometric 'R' Monogram */}
      {/* Vertical Spine */}
      <path
        d="M13 11V29"
        stroke="#3978F6"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      {/* Upper Loop */}
      <path
        d="M13 11H21C24 11 26 12.8 26 15.5C26 18.2 24 20 21 20H13"
        stroke="#3978F6"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Accent Header */}
      <path
        d="M13 11H18"
        stroke="#60A5FA"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      {/* Diagonal Dynamic Leg */}
      <path
        d="M19.5 20L26 29"
        stroke="#60A5FA"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      {/* Inner system connector node */}
      <circle cx="19.5" cy="15.5" r="2.2" fill="#93C5FD" />
    </svg>
  );

  const content = (
    <div className={`inline-flex items-center gap-3 group font-sans ${className}`}>
      {markSvg}
      {variant === "full" && (
        <span
          className={`font-bold tracking-[0.18em] uppercase ${textSize} ${wordmarkColor} font-display flex items-baseline`}
        >
          REDIFF<span className="text-blue-500">F</span>
        </span>
      )}
    </div>
  );

  if (linkToHome) {
    return (
      <Link
        href="/"
        className="focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-lg p-0.5"
        aria-label="Redifff home"
      >
        {content}
      </Link>
    );
  }

  return content;
}
