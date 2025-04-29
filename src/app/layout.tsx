import type { Metadata } from 'next';
import { Inter, Bubblegum_Sans } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { ThemeProvider } from '@/providers/ThemeProvider';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { SiteFooter } from '@/components/site-footer/SiteFooter';
import Script from 'next/script';
import ParticlesBackground from '@/components/ParticlesBackground';

const fontSans = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const fontHeading = Bubblegum_Sans({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-heading',
});

export const metadata: Metadata = {
  title: {
    template: '%s | Curiosity-Cove',
    default: 'Curiosity-Cove',
  },
  description:
    'Curiosity-Cove is a cloud-native educational technology (EdTech) platform designed to introduce kids to programming, data science, and digital skills. It offers live online coding lessons, personalized learning road maps, AI-powered tutoring, and robust parent engagement tools.',
  keywords: [
    'EdTech',
    'education',
    'technology',
    'coding',
    'programming',
    'data science',
    'AI',
    'parent engagement',
    'digital skills',
    'online coding lessons',
    'personalized learning road maps',
    'AI-powered tutoring',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          'min-h-dvh bg-background overflow-x-hidden font-sans antialiased',
          fontSans.variable,
          fontHeading.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="relative flex min-h-dvh flex-col">
            <ParticlesBackground />
            <main className="flex-1">{children}</main>
            <SiteFooter />
          </div>
        </ThemeProvider>

        <Script
          type="text/javascript"
          src="https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js"
        />
      </body>
    </html>
  );
}
