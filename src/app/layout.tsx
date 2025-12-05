import type { Metadata, Viewport } from "next";
import localFont from 'next/font/local';
import ThemeProvider from "@Shared/components/theme-provider";
import '@Shared/styles/Global.css';


const geist = localFont({
  src: '../assets/fonts/Geist.ttf',
  variable: '--font-geist',
  display: 'swap',
});


export const metadata: Metadata = {
  title: {
    template: "Template | %s",
    default: "Template",
  },
  description: 'description for template',

  authors: [{ name: "Lifo123" }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  icons: {
    icon: "/Flifo.svg",
    apple: "/Flifo.svg",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {


  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`text-gray-12 antialiased f-col relative ${geist.variable}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <div className="flex no-select absolute left-0 right-0 opacity-60" style={{
            height: 150,
            zIndex: -1,
            background: `linear-gradient(to bottom, var(--color-info-a2), transparent)`,
          }}></div>
        </ThemeProvider>
      </body>
    </html >
  );
}