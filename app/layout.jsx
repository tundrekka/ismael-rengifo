import { JetBrains_Mono, Instrument_Serif } from "next/font/google";
import Header from "@/components/Header";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-instrumentSerif",
});

export const metadata = {
  title: "Ismael Rengifo — Software Developer",
  description: "Frontend developer crafting refined, performant interfaces. Top-rated on Upwork. Meta + Google certified.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="custom-scrollbar scroll-smooth">
      <body className={`${jetbrainsMono.variable} ${instrumentSerif.variable} relative`}>
        {/* atmospheric backgrounds */}
        <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
          {/* radial green glow top-left */}
          <div className="absolute -left-[20%] -top-[20%] h-[60vh] w-[60vh] rounded-full bg-accent/[0.07] blur-[120px]" />
          {/* warm amber glow bottom-right */}
          <div className="absolute -bottom-[20%] -right-[20%] h-[55vh] w-[55vh] rounded-full bg-secondary/[0.06] blur-[120px]" />
          {/* subtle vignette */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(0,0,0,0.6))]" />
          {/* grain */}
          <div className="absolute inset-0 opacity-[0.035] mix-blend-overlay [background-image:url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22160%22 height=%22160%22><filter id=%22n%22><feTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%222%22 stitchTiles=%22stitch%22/></filter><rect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23n)%22/></svg>')]" />
        </div>
        <div className="relative z-10">
          <Header />
          <main className="container mx-auto">{children}</main>
        </div>
      </body>
    </html>
  );
}
