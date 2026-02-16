import { cn } from "@/lib/utils"

interface SectionProps {
  title?: string,
  subtitle?: string,
  invert?: boolean,
  children?: React.ReactNode,
  props?: React.ReactInstance

}

const Section = ({title,subtitle,invert = false,children}: SectionProps) => {



  return (
    <div className={cn("flex flex-col p-6 md:p-12 gap-4 md:gap-12 rounded-2xl", invert ? 'bg-muted': 'bg-background')}>
      <div className="grid gap-4 md:grid-cols-[1fr_3fr]">
        {title && (
          <h2>{title}</h2>
        )}
        {subtitle && (
          <p className="text-md text-muted-foreground leading-5">{subtitle}</p>
        )}
      </div>
      {children}
    </div>
  )
}

export default Section;