'use client'
import "@/styles/globals.css";
import { Figtree } from "next/font/google";
import { cn } from "@/lib/utils";
import { useState, useEffect, Suspense } from "react"; 
import Preloader from "@/components/Preloader";
import { Analytics } from "@vercel/analytics/next"

const figtree = Figtree({ 
  subsets: ['latin'], weight: ['400', '500', '600', '700'],
  variable: '--font-figtree'
});


export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const [loading, setLoading] = useState(true); 
  useEffect(() => { const timer = setTimeout(() => setLoading(false), 1500); return () => clearTimeout(timer); }, []);
  
  return (
    <html lang="en">
      <body className={cn("bg-muted relative", figtree.className)}>
        <Analytics />
        {loading ? <Preloader /> : children}
        {/* <Suspense fallback={<Preloader />}>
          {children} 
        </Suspense> */}
      </body>
    </html>
  );
}
