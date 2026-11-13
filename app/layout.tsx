import './globals.css';
import type { Metadata, Viewport } from 'next';
import { ThemeProvider } from '@/components/theme-provider';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  viewportFit: 'cover',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f8fafc' },
    { media: '(prefers-color-scheme: dark)', color: '#070b14' },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL('https://mayur-satpute.github.io'),
  title: 'Mayur Satpute | Software Engineer & Tech Creator (@buildwithmayurr)',
  description:
    'Portfolio of Mayur Satpute - Software Engineer & Tech Creator (@buildwithmayurr) specializing in Python, Django, REST APIs, ERP Modernization, and Generative AI applications.',
  keywords: [
    'Mayur Satpute',
    'Software Engineer',
    'Tech Creator',
    'buildwithmayurr',
    'Python Backend Developer',
    'Django REST Framework',
    'NextJS',
    'PostgreSQL',
    'ERP Modernization',
    'AI Developer',
  ],
  authors: [{ name: 'Mayur Satpute', url: 'https://mayur-satpute.github.io' }],
  creator: 'Mayur Satpute',
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  verification: {
    google: 'ec8OJqrCxqBlvOwiljzcJdxgZYICMvpCP8HY2kOCazc',
  },
  openGraph: {
    title: 'Mayur Satpute | Software Engineer & Tech Creator',
    description:
      'Explore projects, engineering experience, and technical creations of Mayur Satpute (@buildwithmayurr) - Software Engineer & Tech Creator.',
    url: 'https://mayur-satpute.github.io/',
    siteName: 'Mayur Satpute Portfolio',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/mayur.jpg',
        width: 1024,
        height: 1024,
        alt: 'Mayur Satpute - Software Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mayur Satpute | Software Engineer & Python Backend Developer',
    description:
      'Software Engineer specializing in Python, Django, REST APIs, and Modern Web Systems.',
    creator: '@buildwithmayurr',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body className="font-sans antialiased min-h-screen bg-background text-foreground selection:bg-blue-500/25 selection:text-blue-400">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
