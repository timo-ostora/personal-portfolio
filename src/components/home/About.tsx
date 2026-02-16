
import { SectionTitle , Section } from "@/components/shared";
import { Badge } from "@/components/ui/badge";

export default function About(){
  return (
    <>
      {/* About Section */}
      {/* <Section invert={true} title="About Me" subtitle="I am a Full-Stack Web Developer with a strong focus on backend architecture and modern frontend development.
          I specialize in building structured Laravel applications, REST and GraphQL APIs, and React-based user interfaces designed for performance and clarity.
          My approach emphasizes clean code, scalable architecture, and solutions aligned with real business needs.">

      </Section> */}

    <Section>
      <SectionTitle title="Get to know me" />
      <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
        {/* Left Column - About */}
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-4 text-base md:text-lg text-muted-foreground leading-relaxed">
            <p>
              I’m a full-stack developer based in Rabat, building structured web products from idea to production. My work sits at the intersection of system thinking and visual clarity. I don’t approach projects as pages to design or features to ship, but as operational systems that need to work, scale, and make sense for real users.            </p>
            <p>
              My work spans frontend and backend development using React, Next.js, and Laravel, while maintaining strong design fundamentals. I develop clean architectures, REST APIs, and authentication systems, then ensure pixel-accurate implementation with proper spacing systems and UI consistency.
            </p>
            <p>
              I don&apos;t separate design from development—I treat them as one unified workflow. This approach allows me to build products that are reliable, maintainable, and genuinely usable.
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 gap-4 pt-4">
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-foreground">2+</span>
              <span className="text-sm text-muted-foreground">Years Experience</span>
            </div>
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-foreground">10+</span>
              <span className="text-sm text-muted-foreground">Projects Completed</span>
            </div>
          </div>
        </div>

        {/* Right Column - Skills */}
        <div className="flex flex-col gap-6">
          {/* Skills Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Technical Skills</h3>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">React & Next.js</Badge>
              <Badge variant="secondary">Laravel & PHP</Badge>
              <Badge variant="secondary">TypeScript</Badge>
              <Badge variant="secondary">Tailwind CSS</Badge>
              <Badge variant="secondary">REST APIs</Badge>
              <Badge variant="secondary">MySQL</Badge>
              <Badge variant="secondary">Git & GitHub</Badge>
              <Badge variant="secondary">Responsive Design</Badge>
            </div>
          </div>

          {/* Design Skills */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Design & UX</h3>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline">User Research</Badge>
              <Badge variant="outline">UI/UX Design</Badge>
              <Badge variant="outline">Design Systems</Badge>
              <Badge variant="outline">Prototyping</Badge>
              <Badge variant="outline">Figma</Badge>
            </div>
          </div>

          {/* Currently Learning (Optional) */}
          <div className="p-4 rounded-lg bg-muted/50 border">
            <h3 className="text-sm font-semibold mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              Currently Exploring
            </h3>
            <p className="text-sm text-muted-foreground">
              Advanced animation with Framer Motion and exploring AI integrations in web applications
            </p>
          </div>
        </div>
      </div>
    </Section>
    </>
  )
}