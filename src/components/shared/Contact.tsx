import {Button, buttonVariants} from '@/components/ui/button'
import { ContactForm, Section, SectionTitle } from '@/components/shared'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { SocialMediaProfiles } from '@/data/constent'

export default function Contact() {
  return (
      <Section>
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">
              Let&apos;s build something great together
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Whether you have a project in mind or just want to chat about technology, 
              I&apos;m always open to new opportunities and collaborations.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              size="lg" 
              className="min-w-50"
              asChild
            >
              <a 
                href="https://wa.me/212679186173?text=Hi%2C%20I%27d%20like%20to%20discuss%20a%20project%20with%20you"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get in Touch
              </a>
            </Button>
            <div className="flex items-center gap-3">
              {SocialMediaProfiles.map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-border hover:border-primary hover:bg-primary/5 flex items-center justify-center transition-colors"
                >
                  {social.icon && <social.icon className="w-4 h-4" />}
                </a>
              ))}
            </div>
          </div>
        </div>
      </Section>
  )
}