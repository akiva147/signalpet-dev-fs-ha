import { MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";
import ReportSection from "./ReportSection";
import AddressInfoSection from "./AddressInfoSection";
import ContactInfoSection from "./ContactInfoSection";
import ParentDetailsSection from "./ParentDetailsSection";
import ReportFindings from "./ReportFindings";

const styles = {
    container: {
        display: "flex",
        flexDirection: "row" as "row",
        // justifyContent: "space-between",
        width: "90%",
    },
    segmentContainer: {
        paddingTop: "2rem",
        paddingBottom: "2rem",
        paddingLeft: "1rem",
        paddingRight: "1rem",
        width: "fit-content",
        textWrap: "nowrap" as "nowrap",
    },
    segmentTitle: {
        fontSize: "0.875rem",
        lineHeight: "1.25rem",
        fontWeight: 600,
        paddingRight: "10%",
    },
    segmentContent: {},
    segmentImg: {
        width: "8rem",
        gridColumn: 3,
        alignSelf: "center",
    },
};

const ReportBasicInfoSection = () => {
    return (
        <div>
            <ReportSection title="Report" secondaryText="ID: 91">
                <div style={styles.container}>
                    <div
                        style={{
                            ...styles.segmentContainer,
                            borderRight: "1px solid #064c60",
                            paddingRight: "31%",
                        }}
                    >
                        <span style={styles.segmentTitle}>Service:</span>
                        <span style={styles.segmentContent}>SignalRAY</span>
                    </div>
                    <div style={styles.segmentContainer}>
                        <span style={styles.segmentTitle}>Date:</span>
                        <span style={styles.segmentContent}>01-01-1994</span>
                    </div>
                </div>
            </ReportSection>
            <ReportSection
                title="Hospital Details"
                contentWrapperStyle={{
                    width: "100%",
                    justifyContent: "space-around",
                }}
            >
                <AddressInfoSection />
                <ContactInfoSection style={{ gridColumn: 2 }} />
                <img
                    alt="report-logo"
                    src={require("../static/report-logo.png")}
                    style={styles.segmentImg}
                />
            </ReportSection>
            <ReportSection title="Patient Details">
                <ParentDetailsSection patientId={9} />
            </ReportSection>
            <ReportSection title="Abnormal Findings" secondaryText="Confidence">
                <ReportFindings
                    isNormal={false}
                    editable={true}
                    findings={require("../fetches/fetchAbnormalFindings.json")}
                />
            </ReportSection>
            <ReportSection title="Normal Findings" secondaryText="Confidence">
                <ReportFindings
                    isNormal={true}
                    editable={true}
                    findings={require("../fetches/fetchNormalFindings.json")}
                />
            </ReportSection>
        </div>
    );
};

export default ReportBasicInfoSection;
