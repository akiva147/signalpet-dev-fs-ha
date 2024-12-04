import { languages } from "../utils/constants";

export type languagesType = typeof languages;

export type LanguageType = (typeof languages)[number];
