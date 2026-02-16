'use client'

import { Section } from "@/components/shared"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { personalInfo, skills, stats, SocialMediaProfiles } from '@/data/constent'
import { Experience } from "@/components/home"
import Image from "next/image"

export default function About() {
  return (
    <>
      {/* Hero Section - The Opening */}
      <Section>
        <div className="grid md:grid-cols-[1fr_300px] gap-12 items-start mb-20">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
                Hi, I&apos;m {personalInfo.name.split(' ')[0]}
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                A full-stack developer from {personalInfo.location.split(',')[0]} who loves turning complex problems 
                into elegant, user-friendly solutions.
              </p>
            </div>
            
            <p className="text-base text-muted-foreground leading-relaxed max-w-2xl">
              I&apos;ve spent the last {stats.yearsOfExperience} years building web applications—from government portals 
              serving thousands of citizens to e-commerce platforms helping businesses grow. What excites me most 
              isn&apos;t just writing code, but understanding the people who&apos;ll use it and crafting experiences that 
              genuinely make their lives easier.
            </p>
          </div>

          {/* Profile Image */}
          <div className="relative md:sticky md:top-24">
            <div className="aspect-square rounded-xl overflow-hidden bg-muted border">
              {/* Replace with actual image when available */}
                <Image 
                  src={'/assets/image.png'} 
                  alt="mohammed azizi profile"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
            </div>
            <div className="mt-4 text-sm text-muted-foreground text-center">
              {personalInfo.location}
            </div>
          </div>
        </div>
      </Section>

      {/* Story Section - The Journey */}
      <Section>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">My Journey</h2>
          
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              I started my journey in web development with a simple curiosity: 
              <span className="text-foreground font-medium"> how do websites work? </span>
              That curiosity turned into passion as I discovered the power of code to solve real problems 
              and create meaningful digital experiences.
            </p>
            
            <p>
              What began as building simple websites evolved into architecting complex full-stack applications. 
              I&apos;ve had the privilege of working on 
              <span className="text-foreground font-medium"> government portals that serve thousands of citizens, </span>
              e-commerce platforms that help businesses grow, and digital tools that make people&apos;s lives easier.
            </p>

            <p>
              Each project taught me something invaluable: 
              <span className="text-foreground font-medium"> great code isn&apos;t just about functionality—it&apos;s about empathy. </span>
              Understanding users, solving their pain points, and delivering solutions that feel intuitive 
              and delightful to use. That&apos;s what drives me every day.
            </p>

            <p>
              Today, I combine technical expertise with design thinking to build digital products that don&apos;t 
              just work well—they feel right. Whether it&apos;s optimizing performance, crafting pixel-perfect 
              interfaces, or architecting scalable backends, 
              <span className="text-foreground font-medium"> I&apos;m obsessed with the details that make exceptional experiences.</span>
            </p>
          </div>
        </div>
      </Section>

      {/* Stats Section - Proof of Work */}
      <Section>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center space-y-2">
            <div className="text-4xl md:text-5xl font-bold text-primary">
              {stats.yearsOfExperience}+
            </div>
            <div className="text-sm text-muted-foreground">Years Experience</div>
          </div>
          <div className="text-center space-y-2">
            <div className="text-4xl md:text-5xl font-bold text-primary">
              {stats.projectsCompleted}+
            </div>
            <div className="text-sm text-muted-foreground">Projects Completed</div>
          </div>
          <div className="text-center space-y-2">
            <div className="text-4xl md:text-5xl font-bold text-primary">
              {stats.happyClients}+
            </div>
            <div className="text-sm text-muted-foreground">Happy Clients</div>
          </div>
          <div className="text-center space-y-2">
            <div className="text-4xl md:text-5xl font-bold text-primary">
              {Math.floor(stats.linesOfCode / 1000)}K+
            </div>
            <div className="text-sm text-muted-foreground">Lines of Code</div>
          </div>
        </div>
      </Section>

      {/* Experience Timeline */}
      <Experience />

      {/* Skills Section */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Skills & Expertise</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Frontend */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary"></span>
                Frontend Development
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills
                  .filter(s => s.category === 'frontend')
                  .map((skill, i) => (
                    <Badge key={i} variant="secondary" className="text-sm">
                      {skill.name}
                    </Badge>
                  ))}
              </div>
            </div>

            {/* Backend */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary"></span>
                Backend Development
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills
                  .filter(s => s.category === 'backend')
                  .map((skill, i) => (
                    <Badge key={i} variant="secondary" className="text-sm">
                      {skill.name}
                    </Badge>
                  ))}
              </div>
            </div>

            {/* Tools */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary"></span>
                Tools & Platforms
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills
                  .filter(s => s.category === 'tools')
                  .map((skill, i) => (
                    <Badge key={i} variant="secondary" className="text-sm">
                      {skill.name}
                    </Badge>
                  ))}
              </div>
            </div>

            {/* Design */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary"></span>
                Design & UX
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills
                  .filter(s => s.category === 'design')
                  .map((skill, i) => (
                    <Badge key={i} variant="secondary" className="text-sm">
                      {skill.name}
                    </Badge>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Values Section - Building Trust */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">How I Work</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold">Problem-First Thinking</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                I don&apos;t just write code—I solve problems. Every project starts with understanding 
                the real challenge and crafting the right solution.
              </p>
            </div>

            <div className="space-y-3">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-2xl">💬</span>
              </div>
              <h3 className="text-xl font-semibold">Clear Communication</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Technical jargon won&apos;t help anyone. I believe in transparent, jargon-free 
                communication that keeps everyone aligned.
              </p>
            </div>

            <div className="space-y-3">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-2xl">✨</span>
              </div>
              <h3 className="text-xl font-semibold">Attention to Detail</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                The difference between good and great is in the details. I sweat the small stuff 
                so you don&apos;t have to.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}