
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
      <div className="grid md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-6 w-full">
            <div className="flex flex-col gap-2 text-md md:text-lg text-forground">
              <p>
                I am a full-stack developer from Rabat, Morocco, who builds complete web products from concept to production. I combine technical precision with design thinking to create applications that are both visually cohesive and technically solid.
              </p>
              <p>
                My work spans frontend and backend development using React, Next.js, and Laravel, while maintaining strong design fundamentals. I develop clean architectures, REST APIs, and authentication systems, then ensure pixel-accurate implementation with proper spacing systems and UI consistency.
              </p>
              <p>
                I don&apos;t separate design from development—I treat them as one unified workflow. This approach allows me to build products that are reliable, maintainable, and genuinely usable.
              </p>
            </div>
            <div>
              my skills include:
              <div className="flex flex-wrap items-center gap-2 mt-2 text-gray-600">
                <Badge>User Research & Analysis</Badge>
                <Badge>Full-Stack Development</Badge>
                <Badge>Frontend: React & Next.js</Badge>       
                <Badge>Backend: Laravel & PHP</Badge>
                <Badge>REST APIs & Authentication</Badge>
                <Badge>Design Systems & UI</Badge>
                <Badge>Responsive Design</Badge>
              </div>
            </div>
          </div>
          <div>
            <div className="w-full h-64 bg-gray-300 rounded-lg"></div>
          </div>
        </div>
    </Section>
    </>
  )
}