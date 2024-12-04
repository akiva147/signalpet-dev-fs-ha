import React, { useMemo, useState } from "react";
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
  } = useTranslateText(value, language);

  // used to memoize the value of the translated text for textarea
  const memoValue = useMemo(() => {
    if (isLoading) return "Loading...";
    if (error) return "Error fetching translation";
    if (translatedText) return translatedText;
    return value;
  }, [translatedText, isLoading, error, value]);

  const Element = elementType;

  if (elementType === "textarea") {
    return (
      <textarea
        {...props}
        value={memoValue}
        onChange={(e) => setValue(e.target.value)}
      />
    );
  }

  // instead of using only span, use can chose an
  // element type that suits the use case
  return (
    <Element {...props}>
      {isLoading && "Loading..."}
      {error && "Error fetching translation"}
      {!isLoading && !error && (translatedText || defaultText)}
    </Element>
  );
};

export default TranslateableText;
