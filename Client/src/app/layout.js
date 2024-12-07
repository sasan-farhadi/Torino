import { yekan } from "@/utils/fonts"
import "./globals.css";

export const metadata = {
  title: "Real estate",
  description: "Real estate consultant",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className={yekan.className}>{children}</body>
    </html>
  );
}