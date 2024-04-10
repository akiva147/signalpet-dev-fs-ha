import InputTag from "./InputTag";

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
    return (
        <div>
            <span style={styles.title}>Summary: </span>
            <InputTag style={{ height: "5vh" }} editable={true}>
                sumsusmsusmususumsumsumsum
            </InputTag>
        </div>
    );
};

export default ReportAdditionalInformationSection;
