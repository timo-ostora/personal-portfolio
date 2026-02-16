import { Section } from "@/components/shared"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { projects, getMainProjectImage } from '@/data/constent'
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

interface PageProps {
  params: Promise<{
    slug: string
  }>
}

export default async function ProjectPage(props: PageProps) {
  const { slug } = await props.params
  
  // Find the project by slug
  const project = projects.find(p => p.slug === slug)
  
  // If project not found, show 404
  if (!project) {
    notFound()
  }

  const mainImage = getMainProjectImage(project)
  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
  }

  return (
    <>
      {/* Back Navigation */}
      <div className="pb-0">
        <Link 
          href="/work" 
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to work
        </Link>
      </div>

      {/* Project Header */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6 mb-12">
            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              {project.title}
            </h1>
            
            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {formatDate(project.startDate)} — {formatDate(project.endDate)}
              </span>
              <span className="w-1 h-1 rounded-full bg-muted-foreground/30" />
              <span>{project.services.length} services</span>
              <span className="w-1 h-1 rounded-full bg-muted-foreground/30" />
              <span>{project.services.reduce((acc, s) => acc + s.tools.length, 0)} tools</span>
            </div>

            {/* Description */}
            <p className="text-lg text-muted-foreground leading-relaxed">
              {project.description}
            </p>

            {/* Services Tags */}
            <div className="flex flex-wrap gap-2">
              {project.services.map((service, i) => (
                <Badge key={i} variant="secondary" className="text-sm">
                  {service.title}
                </Badge>
              ))}
            </div>
          </div>

          {/* Main Project Image */}
          {mainImage && (
            <div className="relative aspect-video rounded-xl overflow-hidden bg-muted border mb-16">
              <Image
                src={mainImage.src}
                alt={mainImage.alt}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 1024px"
              />
            </div>
          )}
        </div>
      </Section>

      {/* Services & Tools Breakdown */}
      <Section invert>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">Services & Technology</h2>
          
          <div className="space-y-12">
            {project.services.map((service, i) => (
              <div key={i} className="space-y-4">
                {/* Service Header */}
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Tools Grid */}
                <div className="grid sm:grid-cols-2 gap-4 pl-4 border-l-2 border-border">
                  {service.tools.map((tool, j) => (
                    <div key={j} className="space-y-1">
                      <h4 className="font-medium text-sm">{tool.title}</h4>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {tool.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>


      {project.gallery.length > 1 && (
        <Section>
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">Gallery</h2>
            
            <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
              {project.gallery.map((image, i) => (
                <div 
                  key={i} 
                  className="break-inside-avoid relative rounded-lg overflow-hidden bg-muted group cursor-pointer"
                >
                  <div className="relative w-full">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={600}
                      height={400}
                      className="w-full h-auto group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  
                  {/* Subtle hover effect */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                </div>
              ))}
            </div>
          </div>
        </Section>
      )}

      {/* Other Projects */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl md:text-3xl font-bold">More Projects</h2>
            <Link href="/work">
              <Button variant="outline" size="sm">
                View all
              </Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {projects
              .filter(p => p.slug !== slug)
              .slice(0, 2)
              .map((otherProject, i) => {
                const otherMainImage = getMainProjectImage(otherProject)
                return (
                  <Link 
                    key={i} 
                    href={`/work/${otherProject.slug}`}
                    className="group"
                  >
                    <div className="space-y-3">
                      {/* Thumbnail */}
                      <div className="relative aspect-video rounded-lg overflow-hidden bg-muted border">
                        {otherMainImage ? (
                          <Image
                            src={otherMainImage.src}
                            alt={otherMainImage.alt}
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                            sizes="(max-width: 768px) 100vw, 50vw"
                          />
                        ) : (
                          <>
                            <div className="absolute inset-0 bg-linear-to-br from-primary/15 to-transparent" />
                            <div className="absolute inset-0 flex items-center justify-center">
                              <span className="text-4xl font-bold text-muted-foreground/20">
                                {otherProject.title.charAt(0)}
                              </span>
                            </div>
                          </>
                        )}
                      </div>
                      
                      {/* Info */}
                      <div>
                        <h3 className="font-semibold group-hover:text-primary transition-colors">
                          {otherProject.title}
                        </h3>
                        <p className="text-sm text-muted-foreground line-clamp-2 mt-1">
                          {otherProject.description}
                        </p>
                      </div>
                    </div>
                  </Link>
                )
              })}
          </div>
        </div>
      </Section>
    </>
  )
}