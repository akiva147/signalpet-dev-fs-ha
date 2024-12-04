import React from "react";
import { useTranslateQuery } from "./useTranslateQuery";
import { useTranslation } from "react-i18next";

const DynamicTranslation = ({ text }: { text: string }) => {
  const { i18n } = useTranslation();
  const targetLang = i18n.language;

  const { data: translatedText, isLoading } = useTranslateQuery(
    text,
    targetLang
  );

  if (isLoading) return <span>Translating...</span>;

  return <span>{translatedText || text}</span>;
};

export default DynamicTranslation;
