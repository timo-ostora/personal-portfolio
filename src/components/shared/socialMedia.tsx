import { SocialMediaProfiles } from '@/data/constent'
import Link from "next/link";
import { cn } from "@/lib/utils"


const SocialMedia = ({ className= "", invert = false }: {className?: string, invert?: boolean}) => {
  return (
    <ul
      role="list"
      className={cn(
        "flex gap-x-10",
        invert ? "text-white" : "text-neutral-950",
        className
      )}
    >
      {SocialMediaProfiles.map((item) => (
        <li key={item.title}>
          <Link
            href={item.href}
            aria-label={item.title}
            className={cn(
              "transition flex gap-2 text-foreground",
              invert ? "hover:text-forground/70" : "hover:text-forground/4"
            )}
          >
            <item.icon className="h-6 w-6 fill-current" /> <p>{item.title}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default SocialMedia;