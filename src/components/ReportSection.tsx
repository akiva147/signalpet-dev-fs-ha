import { CSSProperties, ReactNode } from "react";
import TranslatableText from "./TranslateableText";

interface ReportSectionInterface {
  children?: ReactNode;
  title: string;
  secondaryText?: string;
  style?: CSSProperties;
  contentWrapperStyle?: CSSProperties;
}

const styles = {
  container: {
    border: "1px solid #064c60",
  },
  headerContainer: {
    backgroundColor: "#064c60",
    display: "flex",
    justifyContent: "space-between",
    paddingLeft: "1%",
    paddingRight: "3%",
  },
  titleText: {
    color: "#fff",
  },
  childrenWrapper: {
    display: "inline-grid",
    width: "100%",
  },
};

const ReportSection = (props: ReportSectionInterface) => {
  const { title, children, secondaryText, style, contentWrapperStyle } = props;
  return (
    <div style={{ ...styles.container, ...style }}>
      <div style={styles.headerContainer}>
        <TranslatableText
          id="loadingText"
          defaultText={title}
          style={styles.titleText}
          translate="yes"
        />
        {secondaryText ? (
          <TranslatableText
            id="loadingText"
            defaultText={secondaryText}
            style={styles.titleText}
            translate="yes"
          />
        ) : (
          <span style={styles.titleText} translate="yes"></span>
        )}
      </div>
      <div style={{ ...styles.childrenWrapper, ...contentWrapperStyle }}>
        {children}
      </div>
    </div>
  );
};

export default ReportSection;
