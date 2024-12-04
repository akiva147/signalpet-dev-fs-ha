import { useTranslation } from "../contexts/TranslationProvider";
import { LanguageType } from "../models/translation";
import { languages, reportHeader } from "../utils/constants";
import TranslatableText from "./TranslateableText";

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
  const { language, setLanguage } = useTranslation();

  return (
    <div style={styles.container}>
      <img alt="Logo" src={require("../static/logo.png")} style={styles.logo} />
      <select
        id="language-selector"
        onChange={(e) => setLanguage(e.target.value as LanguageType)}
        value={language}
      >
        {languages.map((lang) => (
          <option key={lang} value={lang}>
            {lang}
          </option>
        ))}
      </select>
      <TranslatableText
        id="loadingText"
        defaultText={reportHeader.secondaryText}
        style={styles.secondaryText}
        translate="yes"
      />
    </div>
  );
};

export default ReportHeader;
