import React from "react";
import { useTranslation } from "../contexts/TranslationProvider";
import { useTranslateText } from "../hooks/useTranslateTexts";

type TranslatableTextProps = {
  id: string;
  defaultText: string;
} & React.HTMLAttributes<HTMLElement>;

const TranslatableText: React.FC<TranslatableTextProps> = ({
  id,
  defaultText,
}) => {
  const { language } = useTranslation();

  // Use the new hook to fetch the translation for each instance
  const { data, isLoading, error } = useTranslateText(defaultText, language);

  // Loading state
  if (isLoading) {
    return <span>Loading...</span>;
  }

  // Error handling for failed translation fetch
  if (error) {
    return <span>Error fetching translation</span>;
  }

  // If translation is not available, fallback to the default text
  return <span>{data || defaultText}</span>;
};

export default TranslatableText;
