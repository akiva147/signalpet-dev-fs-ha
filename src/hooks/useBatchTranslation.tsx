import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const LIBRETRANSLATE_URL = "http://localhost:5000/translate";

const batchTranslate = async ({
  texts,
  targetLang,
}: {
  texts: string[];
  targetLang: string;
}) => {
  const requests = texts.map((text) =>
    axios.post(LIBRETRANSLATE_URL, {
      q: text,
      source: "en",
      target: targetLang,
      format: "text",
    })
  );
  const responses = await Promise.all(requests);
  return responses.map((res) => res.data.translatedText);
};

export const useBatchTranslation = (texts: string[], targetLang: string) => {
  return useQuery({
    queryKey: ["batchTranslation", texts, targetLang],
    queryFn: () => batchTranslate({ texts, targetLang }),
    staleTime: Infinity,
  });
};
