import type { Metadata } from "next";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "PredictAble",
  description: "Daily planning assistant for mobility-aware planning",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-center text-dark-text antialiased">
        {children}
      </body>
    </html>
  );
}
