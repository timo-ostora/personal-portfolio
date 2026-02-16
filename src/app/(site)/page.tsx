// Landing page
import { Hero, About, CaseStudies } from '@/components/home'
import { Section } from '@/components/shared';
import { Badge } from '@/components/ui/badge';
import { skills } from '@/data/constent'
import { servicesOffered } from '@/data/constent';


export default function Home() {



  return (
    <>

    <Hero />
    <CaseStudies />
    <About />
    {/* Skills Section */}
    <Section title='Skills & Expertise '>
      <div className="">
        
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
    </>
  );
}
