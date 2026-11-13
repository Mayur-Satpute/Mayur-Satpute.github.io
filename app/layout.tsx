import './globals.css';
import type { Metadata } from 'next';

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
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}

