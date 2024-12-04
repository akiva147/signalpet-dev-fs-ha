import { reportHeader, supportedLanguages } from "../utils/constants";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import DynamicTranslation from "./DynamicTranslation";

const styles = {
  container: {
    backgroundColor: "#064c60",
    display: "flex",
    flexDirection: "row" as "row",
    justifyContent: "space-between",
    padding: "1rem",
    width: "100%",
  },
  logo: {
    width: "10rem",
  },
  secondaryText: {
    color: "#fff",
  },
};

const ReportHeader = () => {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState("en");

  const changeLanguage = (lang: string) => {
    setLanguage(lang);
    i18n.changeLanguage(lang);
  };

  return (
    <div style={styles.container}>
      <img alt="Logo" src={require("../static/logo.png")} style={styles.logo} />
      {supportedLanguages.map((lang) => (
        <button
          key={lang}
          onClick={() => changeLanguage(lang)}
          //   style={{
          //     backgroundColor: lang === language ? "#00A95E" : "#064c60",
          //     color: lang === language ? "#fff" : "#fff",
          //     border: "none",
          //     padding: "0.5rem",
          //     margin: "0.5rem",
          //   }}
        >
          {lang}
        </button>
      ))}
      <DynamicTranslation
        text={reportHeader.secondaryText}
        style={styles.secondaryText}
        translate="yes"
      />
      {/* <span style={styles.secondaryText} translate="yes">
        {reportHeader.secondaryText}
      </span> */}
    </div>
  );
};

export default ReportHeader;
