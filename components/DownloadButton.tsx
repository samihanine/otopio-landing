"use client";

import { useI18n } from "@/locale/client";

export function DownloadOffer(props: React.HTMLAttributes<HTMLDivElement>) {
  const t = useI18n();
  const handleDownload = () => {
    window.open("/" + t("home.experience.fileName"), "_blank");
  };
  return <div onClick={handleDownload} {...props} />;
}
