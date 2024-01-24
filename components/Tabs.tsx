"use client";

import Link from "next/link";
import clsx from "clsx";
import { useRouter } from "next/router";

function Tab({ tabName, directory }: { tabName?: string; directory: string }) {
  const isDefaultTab = tabName == null;
  let tabSlug;
  if (!isDefaultTab) {
    tabSlug = tabName?.replace(/ /g, "-").toLowerCase();
  }
  const href = isDefaultTab ? `/${directory}` : `/${directory}/${tabSlug}`;
  const path = useRouter().asPath;
  const isActive = path === href;
  if (tabName == null) {
    tabName = directory === "articles" ? "All Articles" : "All Projects";
  }

  return (
    <li>
      <Link
        href={href}
        scroll={false}
        className={clsx(
          "inline-block rounded-full px-5 py-1.5 text-md font-medium transition",
          isActive
            ? "bg-slate-50 text-sky-800 shadow-sm shadow-sky-100/50 ring-1 ring-slate-900/5"
            : "bg-white text-slate-700 duration-200 ease-in-out hover:bg-slate-50/95"
        )}
      >
        {tabName}
      </Link>
    </li>
  );
}

export function Tabs({
  tabs,
  directory,
  className,
  ...props
}: {
  tabs: string[];
  directory: string;
  className?: string;
  [key: string]: any;
}) {
  return (
    <ul className={clsx("flex flex-wrap items-center", className)} {...props}>
      <Tab directory={directory} />
      {tabs.map((tabName, index) => (
        <Tab
          tabName={tabName}
          directory={directory}
          key={`${directory}-tab-${index}`}
        />
      ))}
    </ul>
  );
}
