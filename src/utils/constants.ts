export const reportBasicInfo = {
  service: "Service",
  date: "Date",
  reportTitle: "Report",
  hospitalDetailsTitle: "Hospital Details",
  patientDetailsTitle: "Patient Details",
  abnormalFindingsTitle: "Abnormal Findings",
  normalFindingsTitle: "Normal Findings",
  confidenceTitle: "Confidence",
};

export const reportHeader = {
  secondaryText: "Instant Point-of-Care Radiology Results",
};

export const loadingText = "Loading...";

export const additionalInformation = {
  title: "Additional Information",
};

// created list for supported languages and another one for their initials
// to dispaly the full name in the ui and query with the initials
export const languages = [
  "German",
  "Spanish",
  "French",
  "Portuguese",
  "English",
] as const;

export const languagesInitials = {
  German: "de",
  Spanish: "es",
  French: "fr",
  Portuguese: "pt",
  English: "en",
};
