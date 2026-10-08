import type { Metadata, Viewport } from "next";
// Font files are bundled from npm and served from your own site (no external requests).
import "@fontsource/atkinson-hyperlegible/400.css";
import "@fontsource/atkinson-hyperlegible/700.css";
import "@fontsource/atkinson-hyperlegible/400-italic.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Acie Agsalud — Frontend Developer, Winnipeg",
  description:
    "Acie Agsalud is a frontend-focused full-stack developer in Winnipeg with 6+ years building accessible React, TypeScript, and Next.js applications.",
  openGraph: {
    title: "Acie Agsalud — Frontend Developer",
    description: "Accessible, reliable front ends for enterprise software. React, TypeScript, Next.js, AWS.",
    type: "website",
  },
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><rect width='32' height='32' rx='8' fill='%232D5BFF'/><text x='16' y='21' font-family='Arial' font-weight='700' font-size='14' fill='white' text-anchor='middle'>AA</text></svg>",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Enables the scroll-reveal styles only when JavaScript is running */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
