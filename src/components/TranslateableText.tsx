// Refactored TranslateableText component
import React, { useState } from "react";
import { useTranslation } from "../contexts/TranslationProvider";
import { useTranslateText } from "../hooks/useTranslateTexts";

type TranslatableTextProps = {
  id: string;
  defaultText: string;
  elementType?: React.ElementType;
} & React.HTMLAttributes<HTMLElement>;

const TranslateableText: React.FC<TranslatableTextProps> = ({
  id,
  defaultText,
  elementType = "span",
  ...props
}) => {
  const { language } = useTranslation();
  const [value, setValue] = useState(defaultText);
  const {
    data: translatedText,
    isLoading,
    error,
  } = useTranslateText(defaultText, language);

  const Element = elementType;

  if (elementType === "textarea") {
    // Handle <textarea> separately
    // TODO: decide how to handle the changes
    // in the textarea text
    const value = isLoading
      ? "Loading..."
      : error
      ? "Error fetching translation"
      : translatedText || defaultText;

    console.log("🚀 ~ value:", value);
    return (
      <textarea
        {...props}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    );
  }

  return (
    <Element {...props}>
      {isLoading && "Loading..."}
      {error && "Error fetching translation"}
      {!isLoading && !error && (translatedText || defaultText)}
    </Element>
  );
};

export default TranslateableText;
