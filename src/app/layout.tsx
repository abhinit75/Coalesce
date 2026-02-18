import type { Metadata } from "next";
import "./globals.css";
import WorkspaceLayout from "@/components/layouts/workspace-layout";

export const metadata: Metadata = {
  title: "Perception",
  description: "Secure your AI Systems, from AI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <WorkspaceLayout>{children}</WorkspaceLayout>
      </body>
    </html>
  );
}
