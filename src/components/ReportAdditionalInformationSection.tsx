import InputTag from "./InputTag";
import { generateXrayAnalysisSummary } from "../utils/strings";
import TranslatableText from "./TranslateableText";

const styles = {
  title: {
    fontSize: "0.875rem",
    lineHeight: "1.25rem",
    fontWeight: 600,
    paddingRight: "10%",
    alignSelf: "center",
    justifyCenter: "center",
    alignText: "center",
  },
};

const ReportAdditionalInformationSection = () => {
  // TODO: Add translations for all needed components,
  // check maybe to put the cache in the local storage
  // and add the reasoning for your choices of thecnologies
  // and why i chose only frontend
  return (
    <div translate="yes">
      <TranslatableText
        id="ReportAdditionalInformationSectionTitle"
        defaultText={"Summary: "}
        style={styles.title}
      />
      {/* <span style={styles.title}>Summary: </span> */}
      <InputTag editable={true}>{generateXrayAnalysisSummary()}</InputTag>
    </div>
  );
};

export default ReportAdditionalInformationSection;
