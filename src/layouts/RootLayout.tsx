import Header from '@/components/shared/header';
import { Contact } from '@/components/shared';

export default function RootLayout({children}: {children: React.ReactNode}){
  return (
    <div className='pt-2'>
      <Header />
      <main className="container mx-auto min-h-screen text-foreground flex flex-col gap-2">
        {children}
        
        <Contact />
      </main>
      {/* Footer */}
      <footer className="p-6 md:p-12 text-center rounded-t-2xl">
        <p className="text-2xl text-gray-600 dark:text-gray-400">
        © {new Date().getFullYear()} Mohammed Azizi. All rights reserved.
        </p>
      </footer>
    </div>
  )
}



