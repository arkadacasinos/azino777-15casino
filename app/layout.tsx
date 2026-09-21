import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Азино777 официальный сайт — Азино мобайл и казино онлайн',
  description: 'Азино777 официальный сайт: понятный гид по Азино казино, мобильной версии Азино мобайл и безопасной навигации для игроков. Обзор возможностей, ответы на вопросы и советы для игры 18+.',
  metadataBase: new URL('https://azino777-15casino.vercel.app/'),
  alternates: { canonical: '/' },
  robots: { index: true, follow: true },
  openGraph: { title: 'Азино777 официальный сайт', description: 'Понятный гид по Азино777, Азино мобайл и казино онлайн.', url: 'https://azino777-15casino.vercel.app/', siteName: 'Азино777', locale: 'ru_RU', type: 'website' },
  icons: { icon: '/azino777-mark.png', apple: '/azino777-mark.png' },
}

export const viewport: Viewport = { colorScheme: 'light', themeColor: '#f4f5f0', width: 'device-width', initialScale: 1 }

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (<html lang="ru" className="bg-background"><head><link rel="canonical" href="https://azino777-15casino.vercel.app/" /></head><body className="antialiased">{children}{process.env.NODE_ENV === 'production' && <Analytics />}</body></html>)
}
