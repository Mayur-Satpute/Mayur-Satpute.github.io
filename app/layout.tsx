import './globals.css';
import type { Metadata, Viewport } from 'next';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  viewportFit: 'cover',
  themeColor: '#070b14',
};

export const metadata: Metadata = {
  title: 'Mayur Satpute | Software Engineer & Python Backend Developer',
  description: 'Portfolio of Mayur Satpute - Software Engineer specializing in Python, Django, REST APIs, and Web Application Modernization.',
  keywords: ['Mayur Satpute', 'Software Engineer', 'Python Backend Developer', 'Django', 'REST APIs', 'buildwithmayurr'],
  authors: [{ name: 'Mayur Satpute' }],
  creator: 'Mayur Satpute',
  verification: {
    google: 'ec8OJqrCxqBlvOwiljzcJdxgZYICMvpCP8HY2kOCazc',
  },
  openGraph: {
    title: 'Mayur Satpute | Software Engineer & Python Backend Developer',
    description: 'Portfolio of Mayur Satpute - Software Engineer specializing in Python, Django, REST APIs, and Web Application Modernization.',
    url: 'https://mayur-satpute.github.io/',
    siteName: 'Mayur Satpute Portfolio',
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="font-sans antialiased min-h-screen selection:bg-blue-500/25 selection:text-blue-200">
        {children}
      </body>
    </html>
  );
}
