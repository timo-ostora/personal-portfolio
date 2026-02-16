
import { Section } from "@/components/shared";
import { Badge } from "@/components/ui/badge";

export default function Tools() {
  return (
    <>
          {/* Tools */}
          <Section invert={true} title="Tools & Technologies" >
            <div className="grid md:flex  items-center justify-between flex-wrap gap-8">
              {/* Frontend */}
              <div>
                <h4 className="text-sm font-semibold mb-3 uppercase tracking-wide text-foreground/70">Frontend</h4>
                <div className="flex gap-2
                ">
                  <Badge variant="outline" className="bg-background">React</Badge>
                  <Badge variant="outline" className="bg-background">TypeScript</Badge>
                  <Badge variant="outline" className="bg-background">Tailwind CSS</Badge>
                  <Badge variant="outline" className="bg-background">Next.js</Badge>
                </div>
              </div>
      
              {/* Backend */}
              <div>
                <h4 className="text-sm font-semibold mb-3 uppercase tracking-wide text-foreground/70">Backend</h4>
                <div className="flex gap-3">
                  <Badge variant="outline" className="bg-background">Node.js</Badge>
                  <Badge variant="outline" className="bg-background">Laravel</Badge>
                  <Badge variant="outline" className="bg-background">REST APIs</Badge>
                  <Badge variant="outline" className="bg-background">GraphQL</Badge>
                </div>
              </div>
      
              {/* Database & Infrastructure */}
              <div>
                <h4 className="text-sm font-semibold mb-3 uppercase tracking-wide text-foreground/70">Database & Infrastructure</h4>
                <div className="flex gap-3">
                  <Badge variant="outline" className="bg-background">MySQL</Badge>
                  <Badge variant="outline" className="bg-background">PostgreSQL</Badge>
                  <Badge variant="outline" className="bg-background">Docker</Badge>
                  <Badge variant="outline" className="bg-background">AWS</Badge>
                </div>
              </div>
      
              {/* DevOps & Tools */}
              <div>
                <h4 className="text-sm font-semibold mb-3 uppercase tracking-wide text-foreground/70">DevOps & Tools</h4>
                <div className="flex gap-3">
                  <Badge variant="outline" className="bg-background">Git</Badge>
                  <Badge variant="outline" className="bg-background">CI/CD</Badge>
                  <Badge variant="outline" className="bg-background">Linux</Badge>
                  <Badge variant="outline" className="bg-background">Figma</Badge>
                </div>
              </div>
            </div>
          </Section>
    </>
  )
}