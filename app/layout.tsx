import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://onlinequranteachings.com'),
  
  title: {
    default: 'Online Quran Academy - Learn Quran Online with Expert Tutors',
    template: '%s | Online Quran Academy'
  },
  
  description: 'Professional online Quran teaching with qualified tutors. Learn Tajweed, Hifz, Quran reading and Islamic studies in English, Urdu, Punjabi, Chinese & Siraiki. Free trial class available.',
  
  keywords: [
    'online quran classes',
    'learn quran online',
    'quran teacher',
    'tajweed classes',
    'hifz program',
    'quran memorization',
    'online islamic studies',
    'quran tutor',
    'online quran academy',
    'learn quran from home'
  ],
  
  authors: [{ name: 'Online Quran Academy' }],
  
  creator: 'Online Quran Academy',
  
  publisher: 'Online Quran Academy',
  
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
  
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://onlinequranteachings.com',
    siteName: 'Online Quran Academy',
    title: 'Online Quran Academy - Learn Quran Online with Expert Tutors',
    description: 'Professional online Quran teaching with qualified tutors. Learn Tajweed, Hifz, and Islamic studies from home.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Online Quran Academy - Learn Quran Online',
      },
    ],
  },
  
  twitter: {
    card: 'summary_large_image',
    title: 'Online Quran Academy - Learn Quran Online',
    description: 'Professional online Quran teaching with qualified tutors',
    images: ['/og-image.jpg'],
  },
  
  verification: {
    google: 'your-google-search-console-verification-code',
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
  },
  
  alternates: {
    canonical: 'https://onlinequranteachings.com',
  },
  
  category: 'education',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        
        {/* Additional meta tags */}
        <meta name="theme-color" content="#10b981" />
        <meta name="format-detection" content="telephone=no" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}