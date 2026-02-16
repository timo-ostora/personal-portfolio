import FixedCta from "@/components/FixedCta";
import ThemeProvider  from "@/components/shared/theme-provider"
import RootLayout from "@/layouts/RootLayout";
import { Suspense } from "react";


export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
    >
      <RootLayout>
        <FixedCta />
        {children}
      </RootLayout>
    </ThemeProvider>
  );
}
