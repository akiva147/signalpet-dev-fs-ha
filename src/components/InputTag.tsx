import { ReactNode, CSSProperties } from "react";

const styles = {
    tagContainer: {
        display: "flex",
        flexDirection: "row" as "row",
        backgroundColor: "#e1f8ff",
        alignItems: "center",
        paddingLeft: "0.75rem",
        paddingRight: "0.75rem",
        paddingTop: "0.5rem",
        paddingBottom: "0.5rem",
        marginRight: "1rem",
        height: "fit-content",
        alignSelf: "center",
    },
    tagText: {
        marginLeft: "2%",
        textWrap: "nowrap" as "nowrap",
    },
};

interface ContactInputTagInterface {
    icon?: ReactNode;
    children?: ReactNode | string;
}

const ContactInputTag = (props: ContactInputTagInterface) => {
    const { icon, children } = props;
    return (
        <div style={styles.tagContainer}>
            {icon}
            <span style={styles.tagText}>{children}</span>
        </div>
    );
};

export default ContactInputTag;
