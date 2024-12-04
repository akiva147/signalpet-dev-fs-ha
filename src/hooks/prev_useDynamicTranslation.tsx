import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const LIBRETRANSLATE_URL = "http://localhost:5000/translate";

const fetchDynamicTranslation = async ({
  text,
  targetLang,
}: {
  text: string;
  targetLang: string;
}) => {
  const response = await axios.post(LIBRETRANSLATE_URL, {
    q: text,
    source: "en",
    target: targetLang,
    format: "text",
  });
  return response.data.translatedText;
};

export const useDynamicTranslation = (text: string, targetLang: string) => {
  return useQuery({
    queryKey: ["dynamicTranslation", text, targetLang],
    queryFn: () => fetchDynamicTranslation({ text, targetLang }),
    staleTime: Infinity,
  });
};
