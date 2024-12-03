import { Metadata } from "next";
import "../index.css";

export const metadata: Metadata = {
  title: "SignalPET Report - Translate HA",
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div id="root">{children}</div>
      </body>
    </html>
  );
}
