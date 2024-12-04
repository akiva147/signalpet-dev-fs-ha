import React from "react";
import { useTranslation } from "react-i18next";
import { useTranslateQuery } from "../hooks/useTranslateQuery";

const DynamicTranslation = ({
  text,
  ...props
}: { text: string } & React.HTMLAttributes<HTMLElement>) => {
  const { i18n } = useTranslation();
  const targetLang = i18n.language;

  const { data: translatedText, isLoading } = useTranslateQuery(
    text,
    targetLang
  );

  if (isLoading) return <span {...props}>Translating...</span>;

  return <span {...props}>{translatedText || text}</span>;
};

export default DynamicTranslation;
