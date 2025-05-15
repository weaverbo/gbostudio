import { Inter } from 'next/font/google';
import Head from 'next/head';
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
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
        </Head>
        <body className="relative">
          <link rel="icon" href="./favicon.png" />
          <title>GBO STUDIO</title>
          {children}
          <StyleLink
            href="/"
            className="w-[50px] h-[50px] rounded-full bg-submain text-main font-bold text-xs flex items-center justify-center flex-col fixed bottom-[50px] right-[50px] z-50"
          >
            <span>1:1</span>
            <span>talk</span>
          </StyleLink>
        </body>
      </html>
    </>
  );
}
