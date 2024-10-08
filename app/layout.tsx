import React from 'react';
import type { Metadata } from "next";
import localFont from "next/font/local";
import { Layout } from '../components'; // Importing the old Layout
import './globals.css'; // Global CSS
import { StateContext} from '../context/StateContext';
import { Toaster } from 'react-hot-toast'

// Font configuration
const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});

const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

// Metadata
export const metadata: Metadata = {
  title: 'Ecom',
  description: 'Made by Utkarsh_gt7',
};

// RootLayout with the merged Layout
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* Using the old Layout here */}
        <StateContext>
        <Layout>
          <Toaster/>
          {children}
        </Layout>
        </StateContext>
      </body>
    </html>
  );
}
