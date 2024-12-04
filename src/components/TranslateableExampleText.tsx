import { useMemo } from "react";
import { useTranslation } from "../contexts/TranslationProvider";
import { languages } from "../utils/constants";
import { LanguageType } from "../models/translation";
import TranslatableText from "./TranslateableText";

// Example App component
export const TranslateExampleComponent: React.FC = () => {
  const { language, setLanguage } = useTranslation();

  // Define all the translatable texts with unique keys
  const translatableTexts = useMemo(
    () => [
      { key: "title", text: "Welcome to SignalPET!" },
      { key: "description", text: "This is a translated report." },
    ],
    []
  );

  return (
    <div>
      <h1>
        <TranslatableText id="title" defaultText="Welcome to SignalPET!" />
      </h1>
      <p>
        <TranslatableText
          id="description"
          defaultText="This is a translated report."
        />
      </p>
      <label htmlFor="language-selector">Choose Language:</label>
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
      <p>
        <TranslatableText id="sdfds" defaultText="dsf report." />
      </p>
    </div>
  );
};
