import { cn } from "@/lib/utils";
import { ArrowDownRight } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "../ui/button";

export default function Hero(){
  return (
    <div className="min-h-screen rounded-2xl flex items-center bg-background  px-6 pt-24 pb-12 md:px-12 md:py-24">
        <div className="flex flex-col gap-12">
          <div className="min-h-[70vh] flex flex-col  justify-end  gap-4 md:gap-4">
            <h2 className="text-4xl mb-3 md:mb-4 md:text-8xl tracking-tighter text-balance uppercase animate-in fade-in slide-in-from-bottom-6 duration-700">Your Digital Vision, Perfectly Realized.</h2>
            <p className="text-xs leading-5 md:text-lg text-gray-600 dark:text-gray-400 max-w-2xl animate-in fade-in slide-in-from-bottom-6 duration-700 delay-75">
              I build complete web products from concept to production. As a full-stack developer I combine technical precision with design thinking—creating products that not only look great but also solve real-world problems.
            </p>
          </div>
          <div className="grid gap-2">
            <div className="flex justify-between items-bottom ">
              <div className="flex gap-4">
                <Link href="/work" className={cn(buttonVariants({variant:'default', size:'lg'}),'group animate-in fade-in slide-in-from-bottom-6 duration-700')}>Explore Recent Projects <ArrowDownRight className=" duration-75  group-hover:-rotate-45" size={'24px'} /> </Link>
                <Link 
                href="/files/resume.pdf" 
                target="_blank"
                rel="noopener noreferrer"
                className={cn(buttonVariants({variant:'secondary', size:'lg'}))}
              >
                View Resume
              </Link>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}