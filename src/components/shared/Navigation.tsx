import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Download, Menu } from "lucide-react";

export default function Navigation() {
  return (
    <div className="absolute top-0 left-0 w-full flex items-center justify-between py-2 px-5 md:px-10 border-b border-border">

      <Link href="/" className="text-2xl text-foreground flex-1">
        M.A
      </Link>

      {/* menu trigger */}
      <Button className="md:hidden" ><Menu /></Button>

      <div className="hidden md:flex items-center justify-between flex-1">
        <nav>
          <ul className="flex gap-4">
            <li>
              <Link href="/" className="hover:underline ">
                HOME
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:underline">
                ABOUT 
              </Link>
            </li>
            <li>
              <Link href="/work" className="hover:underline">
                WORK
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:underline">
                CONTACT
              </Link>
            </li>
          </ul>
          
        </nav>

        <Button>RESUME <Download /> </Button>
      </div>
    </div>
  );
}