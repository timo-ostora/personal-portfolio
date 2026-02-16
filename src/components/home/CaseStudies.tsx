import {Section} from '@/components/shared'
import { Badge } from '@/components/ui/badge'
import { projects } from '@/data/constent'
import { servicesOffered, getMainProjectImage } from '@/data/constent'
import Image from 'next/image'

import Link from 'next/link'

export default function CaseStudies() {
  return(
    <>
      {/* caseStudies */}
      <Section title="Case Studies" subtitle="Below are some of the projects I&apos;ve completed. Each case study showcases my expertise in full-stack development, problem-solving, and delivering scalable solutions tailored to client needs.">
        {/* Projects Stlider */}
        <div className="grid md:grid-cols-2 gap-x-8 gap-y-12">
          {projects.map((p, i) => {
            const mainImage = getMainProjectImage(p)
            return (
              <div key={i} className="relative">
                <Link href={'/work/' + p.slug}>
                  {/* Project Thumbnail */}
                  <div className="relative mb-5 overflow-hidden rounded-xl bg-muted aspect-video border border-border transition-transform duration-300 hover:scale-[1.02]">
                    {mainImage ? (
                      <>
                        {/* Project Image */}
                        <Image
                          src={mainImage.src}
                          alt={mainImage.alt}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                        
                        {/* Gradient Overlay on hover */}
                        <div className="absolute inset-0 bg-linear-to-t from-background/80 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        
                        {/* Hover Text */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <span className="text-sm font-medium bg-background/90 backdrop-blur-sm px-4 py-2 rounded-full">
                            View Project
                          </span>
                        </div>
                      </>
                    ) : (
                      <>
                        {/* Fallback when no image */}
                        <div className="absolute inset-0 bg-linear-to-br from-primary/20 via-primary/10 to-transparent transition-opacity duration-300 group-hover:opacity-100 opacity-70" />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-6xl font-bold text-foreground/10 select-none transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                            {p.title.charAt(0)}
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </Link>
                  <div className='flex flex-col gap-4'>
                    <div>
                      <h4 className="mt-4 mb-2">{p.title}</h4>
                      <div className="text-medium text-gray-600 dark:text-gray-400 leading-5 line-clamp-2">
                        {p.description}
                      </div>
                    </div>
                    <div className='flex items-start flex-wrap gap-1 '>
                      {p.services.map((ele, i) => <Badge key={i} >{ele.title}</Badge>)}
                    </div>
                  </div>
              </div>
            )
          })
        }
        </div>
      </Section>
    </>
  )
}