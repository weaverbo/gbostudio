import { Inter } from 'next/font/google';
import StyleLink from 'next/link';

import '../styles/globals.css';

const FontInter = Inter({
  subsets: ['latin'],
  variable: '--font-Inria_Sans',
  weight: ['300', '400', '700'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en" className={FontInter.variable}>
        <head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <link rel="icon" href="/glogo.png" />
          <title>GBO STUDIO</title>
        </head>
        <body className="relative overflow-x-hidden">
          {children}
          <StyleLink
            href="/"
            className="w-[80px] h-[80px] rounded-full bg-[#000] text-xs flex items-center justify-center flex-col fixed bottom-[50px] right-[50px] z-50 cursor-none"
          >
            <span className="text-white">Talk</span>
          </StyleLink>
        </body>
      </html>
    </>
  );
}
