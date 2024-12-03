import { ClientOnly } from "./client";

export function generateStaticParams() {
  return [{ slug: ["/logo.src"] }];
}

export default function Page() {
  return <ClientOnly />;
}
