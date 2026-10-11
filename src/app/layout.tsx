import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import { IBM_Plex_Mono, Syne } from "next/font/google";
import "./globals.css";

const syne = Syne({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
  preload: true,
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://vishaljoshi.vercel.app"),
  title: {
    default: "Vishal Joshi — Senior Mobile Engineer | React Native & Flutter",
    template: "%s · Vishal Joshi",
  },
  description:
    "Freelance React Native & Flutter engineer. 5+ years shipping production mobile apps for startups and agencies — USA, UK, EU, UAE, APAC, and India.",
  applicationName: "Vishal Joshi Portfolio",
  authors: [{ name: "Vishal Joshi" }],
  creator: "Vishal Joshi",
  keywords: [
    "React Native developer",
    "Flutter developer",
    "mobile engineer",
    "freelance",
    "Ahmedabad",
    "remote",
  ],
  openGraph: {
    title: "Vishal Joshi — Senior Mobile Engineer",
    description:
      "Production mobile apps that ship clean and stay fast. React Native & Flutter.",
    type: "website",
    locale: "en_US",
    siteName: "Vishal Joshi",
    url: "https://vishaljoshi.vercel.app",
  },
  twitter: {
    card: "summary",
    title: "Vishal Joshi — Senior Mobile Engineer",
    description:
      "React Native & Flutter engineer. Production apps for startups and agencies.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://vishaljoshi.vercel.app",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#050605",
  colorScheme: "dark",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${plexMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body
        className="site-shell flex min-h-full flex-col bg-bg text-fg"
        suppressHydrationWarning
      >
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
