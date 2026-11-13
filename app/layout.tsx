import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mayur Satpute | Software Engineer & Python Backend Developer',
  description: 'Portfolio of Mayur Satpute - Software Engineer specializing in Python, Django, REST APIs, and Web Application Modernization.',
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

