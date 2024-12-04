import React, { createContext, useContext, ReactNode } from "react";
import { LanguageType } from "../models/translation";

type TranslationContextType = {
  language: LanguageType;
  setLanguage: (lang: LanguageType) => void;
};

const TranslationContext = createContext<TranslationContextType | undefined>(
  undefined
);

export const TranslationProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [language, setLanguage] = React.useState<LanguageType>("English");

  return (
    <TranslationContext.Provider value={{ language, setLanguage }}>
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslation = () => {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error("useTranslation must be used within a TranslationProvider");
  }
  return context;
};
