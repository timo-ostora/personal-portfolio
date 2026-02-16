'use client'

import { Section } from "@/components/shared"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { projects, servicesOffered, getMainProjectImage } from '@/data/constent'
import { useState, useMemo } from "react"
import Image from "next/image"
import Link from "next/link"

export default function Work() {
  const [selectedService, setSelectedService] = useState<string>('All')
  const [isTransitioning, setIsTransitioning] = useState(false)

  // Memoized filtered projects for performance
  const filteredProjects = useMemo(() => {
    if (selectedService === 'All') return projects
    return projects.filter((project) => 
      project.services.some(service => service.title === selectedService)
    )
  }, [selectedService])

  // Calculate service counts
  const serviceCounts = useMemo(() => {
    const counts: Record<string, number> = { 'All': projects.length }
    servicesOffered.forEach(service => {
      counts[service.title] = projects.filter(p => 
        p.services.some(s => s.title === service.title)
      ).length
    })
    return counts
  }, [])

  const handleFilterChange = (service: string) => {
    setIsTransitioning(true)
    setTimeout(() => {
      setSelectedService(service)
      setIsTransitioning(false)
    }, 150)
  }

  return (
    <Section>
      {/* Header Section */}
      <div className="mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">
          Selected Work
        </h1>
        <p className="text-muted-foreground text-lg max-w-2xl">
          A curated collection of projects demonstrating expertise across full-stack development, design, and digital experiences.
        </p>
      </div> 

      {/* Filter Section */}
      {/* <div className="mb-6 bg-background/95 backdrop-blur-sm z-10 py-4 -mx-4 px-4 rounded-lg border-b animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <span className="text-sm font-medium text-muted-foreground">
              Filter by Service
            </span>
            {selectedService !== 'All' && (
              <button
                onClick={() => handleFilterChange('All')}
                className="text-xs text-primary hover:underline transition-all"
              >
                Clear filter
              </button>
            )}
          </div>
          <div className="text-sm text-muted-foreground">
            <span className="font-medium text-foreground">{filteredProjects.length}</span>
            {' '}{filteredProjects.length === 1 ? 'project' : 'projects'}
          </div>
        </div>
        
        <div className="flex flex-wrap gap-2">
          <Button 
            onClick={() => handleFilterChange('All')}
            variant={selectedService === 'All' ? 'default' : 'outline'}
            size="sm"
            className="transition-all hover:shadow-md"
          >
            All Projects
            <span className="ml-2 text-xs opacity-70">
              {serviceCounts['All']}
            </span>
          </Button>
          
          {servicesOffered.map((service, i) => (
            <Button 
              key={i} 
              onClick={() => handleFilterChange(service.title)}
              variant={selectedService === service.title ? 'default' : 'outline'}
              size="sm"
              disabled={serviceCounts[service.title] === 0}
              className="transition-all hover:shadow-md disabled:opacity-30"
            >
              {service.title}
              <span className="ml-2 text-xs opacity-70">
                {serviceCounts[service.title]}
              </span>
            </Button>
          ))}
        </div>
      </div> */}

      {/* Projects Grid */}
      <div 
        className={`grid md:grid-cols-2 gap-8 lg:gap-12 transition-opacity duration-300 ${
          isTransitioning ? 'opacity-0' : 'opacity-100'
        }`}
      >
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project, i) => {
            const mainImage = getMainProjectImage(project)
            
            return (
              <article
                key={project.slug}
                className="group animate-in fade-in slide-in-from-bottom-6 duration-700"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <Link href={'/work/' + project.slug}>
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
                            {project.title.charAt(0)}
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </Link>


                {/* Project Content */}
                <div className="space-y-4">
                  {/* Title & Year */}
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-xl font-semibold leading-tight transition-colors duration-200 group-hover:text-primary">
                      {project.title}
                    </h3>
                    <time className="text-sm text-muted-foreground whitespace-nowrap mt-1">
                      {project.startDate.getFullYear()}
                    </time>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Services & Tools */}
                  <div className="space-y-3">
                    <div className="flex items-start flex-wrap gap-1.5">
                      {project.services.map((service, idx) => (
                        <Badge 
                          key={idx} 
                          variant="secondary"
                          className="text-xs font-medium transition-colors hover:bg-primary hover:text-primary-foreground cursor-default"
                        >
                          {service.title}
                        </Badge>
                      ))}
                    </div>

                    {/* Tools Count */}
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1.5">
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                        </svg>
                        {project.services.reduce((acc, s) => acc + s.tools.length, 0)} tools used
                      </span>
                    </div>
                  </div>
                </div>

                {/* Bottom Accent Line */}
                <div className="h-0.5 bg-primary mt-4 rounded-full w-0 group-hover:w-full transition-all duration-500" />
              </article>
            )
          })
        ) : (
          <div className="col-span-2 py-32 text-center animate-in fade-in zoom-in-95 duration-500">
            <div className="max-w-md mx-auto space-y-4">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-semibold">No projects found</h3>
              <p className="text-muted-foreground">
                No projects match the selected filter. Try selecting a different service or view all projects.
              </p>
              <Button 
                onClick={() => handleFilterChange('All')}
                variant="outline"
                className="mt-6"
              >
                Show All Projects
              </Button>
            </div>
          </div>
        )}
      </div>
    </Section>
  )
}