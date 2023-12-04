import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

const testTitleFlag = process.env.APP_ENV === 'testing' ? 'TESTING ' : '';

export const metadata: Metadata = {
  title: testTitleFlag + 'teallen.com',
  description: 'software developer, language teacher, EN/FR',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
