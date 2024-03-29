"use client";

import Link from "next/link";
import clsx from "clsx";
import { useFormStatus } from "react-dom";
import { LoadingSpinner } from "./LoadingSpinner";

const variantStyles = {
  primaryClassName: "bg-slate-900 text-white hover:bg-sky-800",
  secondaryClassName:
    "text-slate-900 shadow-sm shadow-sky-100/50 ring-1 ring-slate-100 hover:bg-slate-200/60 hover:shadow-sky-100/50 bg-slate-100/80",
  primaryOnDarkClassName: "bg-white hover:bg-sky-50 text-slate-700",
};

type ButtonProps = {
  variant?: "primary" | "secondary" | "primaryOnDark";
  className?: string;
  href?: string;
  [key: string]: any; // to represent rest of the props
};

export function Button({
  variant = "primary",
  className,
  href,
  children,
  ...props
}: ButtonProps) {
  className = clsx(
    "inline-flex items-center rounded-full gap-2.5 justify-center px-7 py-3 text-md font-semibold leading-none outline-offset-2 transition-all duration-200 ease-in-out active:transition-none",
    variantStyles[`${variant}ClassName`],
    className
  );

  return href ? (
    <Link href={href} className={className} {...props}>
      {children}
    </Link>
  ) : (
    <button className={className} {...props}>
      {children}
    </button>
  );
}
