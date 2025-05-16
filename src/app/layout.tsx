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
        <body className="relative overflow-x-hidden">
          <link rel="icon" href="./favicon.png" />
          <title>GBO STUDIO</title>
          {children}
          <StyleLink
            href="/"
            className="w-[100px] h-[100px] rounded-full bg-[#000] text-xs flex items-center justify-center flex-col fixed bottom-[100px] right-[50px] z-50"
          >
            <span className="text-white">Talk</span>
          </StyleLink>
        </body>
      </html>
    </>
  );
}
