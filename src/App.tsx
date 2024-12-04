import React from "react";
import "./App.css";
import ReportHeader from "./components/ReportHeader";
import ReportPage from "./components/ReportPage";
import ReportSection from "./components/ReportSection";
import ReportBasicInfoSection from "./components/ReportBasicInfoSection";
import ReportAdditionalInformationSection from "./components/ReportAdditionalInformationSection";
import { additionalInformation } from "./utils/constants";
import { GlobalProvider } from "./contexts/GlobalProvider";

const styles = {
  wrapper: {
    backgroundColor: "#052e39",
    backdropFilter: "blur(2rem)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    width: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column" as "column",
    gapY: "2rem",
    height: "95%",
  },
};

function App() {
  return (
    // created the global provider to put all the providers in one place
    <GlobalProvider>
      <div style={styles.wrapper}>
        <div style={styles.container}>
          <ReportHeader />
          <ReportPage>
            <ReportBasicInfoSection />
          </ReportPage>
          <ReportPage>
            <ReportSection title={additionalInformation.title}>
              <ReportAdditionalInformationSection />
            </ReportSection>
          </ReportPage>
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;
