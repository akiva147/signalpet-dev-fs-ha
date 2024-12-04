import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const LIBRETRANSLATE_URL = "http://localhost:5000/translate";

const fetchTranslation = async ({
  text,
  targetLang,
}: {
  text: string;
  targetLang: string;
}): Promise<string> => {
  const response = await axios.post(LIBRETRANSLATE_URL, {
    q: text,
    source: "en", // Replace with your source language
    target: targetLang,
    format: "text",
  });
  return response.data.translatedText;
};

export const useTranslateQuery = (text: string, targetLang: string) => {
  return useQuery({
    queryKey: ["translation", text, targetLang],
    queryFn: () => fetchTranslation({ text, targetLang }),
    staleTime: Infinity, // Cache translations indefinitely
  });
};
