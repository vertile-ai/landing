import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter', 
});

export const metadata: Metadata = {
  title: 'Vertile.ai - Advanced AI Solutions for Enterprises',
  description: 'Vertile.ai provides cutting-edge AI consulting and solutions for enterprises including custom LLMs, RAG systems, and AI agents.',
  keywords: 'AI, artificial intelligence, machine learning, LLM, RAG, AI agents, consulting',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
} 