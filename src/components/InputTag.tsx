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
    editableContainer: {
        width: "80%",
        margin: "auto",
        height: "5rem", // Equivalent to h-20
        overflowY: "auto" as "auto", // Equivalent to overflow-y-auto
        justifyContent: "flex-start", // Equivalent to justify-start
        border: "1px solid", // Equivalent to border
        borderRadius: "0.125rem", // Equivalent to rounded-sm
        borderColor: "#E5E7EB", // Equivalent to border-sp-paper-border
        fontSize: "0.875rem", // Equivalent to text-sm
        resize: "none" as "none", // Equivalent to resize-none
        padding: "0.5rem", // Equivalent to p-2
        backgroundColor: "#EFF6FF", // Equivalent to bg-light-blue
        borderStyle: "none", // Equivalent to border-none
        color: "#000", // Equivalent to text-black
        marginTop: "1%",
        marginBottom: "1%",
    },
};

interface InputTagInterface {
    editable?: boolean;
    icon?: ReactNode;
    children?: ReactNode | string;
    style?: CSSProperties;
}

const InputTag = (props: InputTagInterface) => {
    const { icon, children, style, editable } = props;
    const isEditable = editable ?? false;

    return isEditable ? (
        <textarea
            style={{
                ...styles.tagContainer,
                ...styles.editableContainer,
                ...style,
            }}
        >
            {children}
        </textarea>
    ) : (
        <div style={{ ...styles.tagContainer, ...style }}>
            {icon}
            <span style={styles.tagText}>{children}</span>
        </div>
    );
};

export default InputTag;
