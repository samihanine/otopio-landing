"use client";
import React, { useEffect } from "react";
import { useFormStatus } from "react-dom";
import { Button } from "./Button";
import { LoadingSpinner } from "./LoadingSpinner";
import { useI18n } from "@/locale/client";

export const SubmitFormButton = ({
  children,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  const { pending, data } = useFormStatus();
  const t = useI18n();

  useEffect(() => {
    if (data) {
      alert(t("contact.form.submitConfirmation"));
    }
  }, [data]);

  return (
    <Button {...props}>
      {pending ? (
        <>
          <LoadingSpinner className="mr-4 !h-4 !w-4" />
        </>
      ) : (
        children
      )}
    </Button>
  );
};
