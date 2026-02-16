import {ArrowUpRight } from "lucide-react";

export default function Experience({year, role, company}: {year: string; role: string; company: string}) {
  return (
    <div className="group pb-5 md:pb-10 not-last:border-b border-border transition-all duration-300">
      <div className="flex items-start justify-between">

        {/* year */}
        <div className="relative overflow-hidden text-2xl text-muted-foreground italic">
            <span>{year}</span>
        </div>

        {/* grid center  Stack: role, company */}
        <div className="grid md:grid-cols-2 gap-2 flex-1 text-right md:text-center md:mx-16 ">
          <div><h3 className="text-2xl text-foreground">{role}</h3></div>
          <div className="relative overflow-hidden text-muted-foreground md:text-2xl md:text-foreground md:text-center" >
            <span>{company}</span>
          </div>
        </div>

        {/* Arrow */}
        <ArrowUpRight className="hidden md:block w-8 h-8 text-foreground group-hover:rotate-45 group-hover:-translate-y-1 transition-all duration-300 " />
      </div>
    </div>
  )

}