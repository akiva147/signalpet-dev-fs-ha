import React, { ReactNode } from "react";
import { useTranslation } from "react-i18next";
import { useDynamicTranslation } from "../hooks/prev_useDynamicTranslation";

type DynamicTranslationProps = {
  children: ReactNode;
  translate?: boolean;
};

const DynamicTranslation: React.FC<DynamicTranslationProps> = ({
  children,
  translate,
}) => {
  // const { i18n } = useTranslation();
  // const {
  //   data: translatedText,
  //   isLoading,
  //   error,
  // } = useDynamicTranslation(children, targetLang);
  // const targetLang = i18n.language;

  // if (!translate || typeof children !== "string") return <>{children}</>;

  // if (isLoading) return <>{children} (Translating...)</>;
  // if (error) return <>{children} (Translation Error)</>;

  // return <>{translatedText || children}</>;
  return <>{children}</>;
};

export default DynamicTranslation;
