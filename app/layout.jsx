import { JetBrains_Mono } from "next/font/google";
import Header from "@/components/Header";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono",
});

export const metadata = {
  title: "Ismael Rengifo",
  description: "My portfolio website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="custom-scrollbar">
      <body className={jetbrainsMono.variable}>
        <Header />
        {/* <StairTransition /> */}
        <main className="container mx-auto">{children}</main>
      </body>
    </html>
  );
}
