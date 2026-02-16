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
                Full-Stack Web Developer based in Rabat.
              </p>
            </div>
            
            <p className="text-base text-muted-foreground leading-relaxed max-w-2xl">
              I build structured web applications with a strong focus on clarity, maintainability, and real-world usability. My work combines backend architecture and thoughtful interface design to create systems that are not only functional, but reliable and intuitive.
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
              Over the past two years, I have developed full-stack projects as part of my academic training and professional internships. At the Chamber of Representatives in Rabat, I contributed to the development of a parliamentary credit management platform. I participated in user needs analysis, data modeling using Merise methodology, and interface implementation with a strong focus on security and clarity.

              During my internship at NADDEVLOP, I worked on website development while also engaging in commercial validation and digital prospecting. This dual exposure strengthened my understanding of how technical solutions connect to business realities.

              My final-year project focused on designing and developing a car rental management platform using PHP (MVC architecture), MySQL, and Bootstrap. The system includes booking workflows, fleet availability management, and an administrative dashboard for operational control. This project reinforced my approach: clean architecture, structured logic, and role-based system thinking.

              Beyond development, I am deeply interested in visual design and music culture. Designing posters and studying composition influences how I structure interfaces — I pay attention to rhythm, balance, and visual hierarchy. For me, development and design are not separate disciplines, but parts of the same system.

              I am currently completing my Specialized Technician Diploma in Computer Development at IFIAG (expected 2025). I am open to opportunities where I can contribute to structured digital products, collaborate in serious technical environments, and continue growing as a full-stack developer.
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
            <div className="text-sm text-muted-foreground">Years of Practical Development</div>
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
            <div className="text-sm text-muted-foreground">Core Features Implemented in Production Projects</div>
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