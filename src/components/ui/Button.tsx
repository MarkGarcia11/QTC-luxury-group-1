"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "outline" | "text";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  arrow?: boolean;
};

const styles = {
  primary:
    "bg-champagne text-espresso hover:bg-bronze hover:text-white border border-champagne",
  secondary:
    "bg-transparent text-espresso border border-espresso hover:bg-espresso hover:text-ivory",
  outline:
    "bg-transparent border border-ivory/60 text-ivory hover:bg-ivory hover:text-espresso",
  text:
    "bg-transparent text-espresso border-b border-espresso/30 pb-1 hover:border-espresso px-0",
};

const sizes = {
  sm: "text-xs tracking-[0.2em] uppercase px-5 py-2.5",
  md: "text-[0.75rem] tracking-[0.2em] uppercase px-7 py-3.5",
  lg: "text-[0.8rem] tracking-[0.22em] uppercase px-9 py-4",
};

export default function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className,
  onClick,
  type = "button",
  disabled = false,
  arrow = true,
}: ButtonProps) {
  const classes = cn(
    "btn-primary group inline-flex items-center gap-3 font-medium transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
    variant !== "text" ? "justify-center" : "",
    styles[variant],
    sizes[size],
    disabled && "opacity-50 cursor-not-allowed pointer-events-none",
    className
  );

  const content = (
    <>
      <span className="relative z-10">{children}</span>
      {arrow && (
        <ArrowRight
          className={cn(
            "btn-arrow w-4 h-4 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
            variant === "outline" ? "text-ivory group-hover:text-espresso" : ""
          )}
        />
      )}
    </>
  );

  if (type === "submit" || type === "reset" || onClick) {
    return (
      <button type={type} onClick={onClick} className={classes} disabled={disabled}>
        {content}
      </button>
    );
  }

  return (
    <Link href={href || "#"} className={classes}>
      {content}
    </Link>
  );
}
