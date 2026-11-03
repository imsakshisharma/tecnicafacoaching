import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Tecnica FA Coaching Ltd | Youth Football Coaching, Academy Hubs & Futsal',
  description: 'Specialized youth football coaching in South London and Kent. Midweek technical academy hubs, school partnerships, futsal masterclasses, 1-to-1 coaching, and pro academy showcases.',
  icons: {
    icon: '/assets/logo-blue.svg',
    shortcut: '/assets/logo-blue.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/assets/logo-blue.svg" type="image/svg+xml" />
      </head>
      <body className="bg-slate-50 text-slate-800 antialiased selection:bg-gold-500 selection:text-navy-950">
        {children}
      </body>
    </html>
  );
}

