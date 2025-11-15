// app/page.tsx (Server Component)
import type { Metadata } from "next";
import QuranAcademy from './QuranAcademy';

export const metadata: Metadata = {
  title: 'Learn Quran Online - Hifz, Tajweed & Islamic Studies',
  description: 'Join our online Quran academy. Expert tutors teaching Hifz, Tajweed, Quran reading in 5 languages. 13+ years experience. Free trial class available.',
  
  openGraph: {
    title: 'Learn Quran Online - Hifz, Tajweed & Islamic Studies',
    description: 'Join our online Quran academy with expert tutors',
    url: 'https://onlinequranteachings.com',
    images: ['/og-home.jpg'],
  },
  
  // Add structured data
  other: {
    'application/ld+json': JSON.stringify({
      "@context": "https://schema.org",
      "@type": "EducationalOrganization",
      "name": "Online Quran Academy",
      "description": "Professional online Quran teaching academy offering Hifz, Tajweed, and Islamic studies",
      "url": "https://onlinequranteachings.com",
      "logo": "https://onlinequranteachings.com/logo.png",
      "email": "kaleemullghallo@gmail.com",
      "areaServed": "Worldwide",
      "availableLanguage": ["English", "Urdu", "Punjabi", "Chinese", "Siraiki"],
      "offers": {
        "@type": "Offer",
        "name": "Free Trial Class",
        "price": "0",
        "priceCurrency": "USD"
      }
    })
  }
};

export default function Page() {
  return <QuranAcademy />;
}