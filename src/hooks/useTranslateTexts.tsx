import { useQuery } from "@tanstack/react-query";
import { LanguageType } from "../models/translation";
import { languagesInitials } from "../utils/constants";

// const LIBRETRANSLATE_URL = "http://localhost:5000/translate";
// const fetchTranslation = async (text: string, targetLanguage: LanguageType) => {
//   const response = await fetch(LIBRETRANSLATE_URL, {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({
//       q: text,
//       source: "en",
//       target: languagesInitials[targetLanguage],
//       format: "text",
//     }),
//   });

//   const data = await response.json();
//   return data.translatedText;
// };

// // Hook for fetching translations

// export const useTranslateTexts = (
//   texts: { key: string; text: string }[],
//   targetLanguage: LanguageType
// ) => {
//   const translationsQuery = useQuery({
//     queryKey: ["translations", targetLanguage],
//     queryFn: async () => {
//       const translations = await Promise.all(
//         texts.map(({ text }) => fetchTranslation(text, targetLanguage))
//       );
//       return texts.reduce(
//         (acc, { key }, index) => ({ ...acc, [key]: translations[index] }),
//         {} as Record<string, string>
//       );
//     },
//     enabled: targetLanguage !== "English", // Skip query if language is English
//     staleTime: Infinity,
//   });

//   return translationsQuery;
// };

// Fetch the translation for each text individually.
const fetchTranslation = async (text: string, targetLanguage: LanguageType) => {
  const url = "http://localhost:5000/translate"; // Adjust API endpoint
  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      q: text,
      source: "en",
      target: languagesInitials[targetLanguage],
      format: "text",
    }),
  });

  const data = await response.json();
  return data.translatedText;
};

// The hook fetches each translation individually and caches each translation result.
export const useTranslateText = (
  text: string,
  targetLanguage: LanguageType
) => {
  return useQuery({
    queryKey: ["translation", targetLanguage, text], // Use `text` as a part of the key to ensure uniqueness
    queryFn: () => fetchTranslation(text, targetLanguage),
    staleTime: Infinity,
    enabled: targetLanguage !== "English", // Skip query if language is English
  });
};
