"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ModeToggle, Corner, SocialMedia } from "@/components/shared";
import { ReactNode, useEffect, useState } from "react";
import { X, MenuIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  function MenuTrigger() {
    setMenuOpen(!menuOpen);
  }

  return (
    <header className={cn(
      "relative container mx-auto md:min-h-14 md:flex items-center justify-center z-30 backdrop-blur-mdtransition-all duration-500",
       menuOpen ? 'pt-10' : '' 
    )}>
      
      <Corner backgound='--background' className="bg-muted"  position="top-left">
        <Link href="/" className="group">
          <div className="flex items-center gap-3">
            <Avatar size="lg" className="border-2 border-border transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg">
              <AvatarImage src="/assets/image.png" />
              <AvatarFallback>MA</AvatarFallback>
            </Avatar>

            <div>
              <h5 className="mb-1 text-meta text-foreground transition-colors duration-300 group-hover:text-foreground/95">
                Mohammed Azizi
              </h5>
              <p className="text-meta text-foreground/80 transition-colors duration-300 group-hover:text-foreground/70">
                Full-Stack Developer
              </p>
            </div>
          </div>
        </Link>
      </Corner>
      

      <Corner backgound='--background'className="bg-muted"  position="top-right">
        <div className="flex items-center gap-4">
          <nav className=" hidden md:flex items-center justify-center gap-6 text-base py-2 font-medium tracking-tight text-foreground transition-all duration-75">
              <Link className="hover:text-muted" href="/">Home</Link>
              <Link className="hover:text-muted" href="/about">About</Link>
              <Link className="hover:text-muted" href="/work">Works</Link>
              <Link className="hover:text-muted" href="/contact">Contact</Link>
          </nav>
          <ModeToggle />
          <div
            onClick={MenuTrigger}
            className="cursor-pointer transition-transform duration-300 hover:scale-110 active:scale-95 md:hidden"
          >
            <span className="text-foreground transition-all duration-300">
              {menuOpen ? <X /> : <MenuIcon />}
            </span>
          </div>
          <Button className="hidden md:inline-block" >Resume</Button>
        </div>
      </Corner>

      {/* Animated Menu */}
      <div
        className={`
          overflow-hidden
          md:hidden 
          container mx-auto
          transition-all duration-500 ease-in-out
          ${menuOpen
            ? "max-h-175 opacity-100 translate-y-0 pointer-events-auto"
            : "max-h-0 opacity-0 -translate-y-4 pointer-events-none"}
        `}
      >
        <div className="pt-10">
          <nav className="mb-px font-display text-5xl font-medium tracking-tight">
            <NavigationRow>
              <NavigationItem href="/">Home</NavigationItem>
              <NavigationItem href="/about">About</NavigationItem>
              <NavigationItem href="/work">Works</NavigationItem>
              <NavigationItem href="/contact">Contact</NavigationItem>
            </NavigationRow>
          </nav>

          <div className="relative before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-foreground/70">
            <div className="grid gap-y-8 pb-8 pt-4 sm:pt-8">
              <div className="grid items-start gap-6 text-foreground">
                <h4 className="font-display font-semibold text-foreground transition-opacity duration-300 hover:opacity-80">
                  Follow me
                </h4>
                <SocialMedia invert />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

const NavigationRow = ({ children }: { children: ReactNode }) => {
  return (
    <div className="even:mt-px sm:bg-neutral-100 dark:sm:bg-neutral-950/80 transition-all duration-300">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 place-items-start">
        {children}
      </div>
    </div>
  );
};

const NavigationItem = ({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) => {
  return (
    <Link
      href={href}
      className="group relative w-full isolate dark:bg-neutral-950 bg-neutral-100 px-6 py-10 even:mt-px sm:mx-0 sm:px-0 sm:py-16 transition-all duration-500 dark:hover:bg-neutral-900 hover:bg-neutral-400 hover:pl-8 hover:tracking-wide before:absolute before:bottom-6 before:left-6 before:h-px before:w-0 before:bg-neutral-400 dark:before:bg-white before:transition-all before:duration-500 hover:before:w-12"
    >
      {children}
    </Link>
  );
};
