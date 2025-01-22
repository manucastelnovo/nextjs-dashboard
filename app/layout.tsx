import { lato } from "./ui/fonts";
import "./ui/global.css";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${lato.className} antialiased`}>{children}</body>
    </html>
  );
}
