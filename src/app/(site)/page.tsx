// Landing page
import { Hero, About, CaseStudies } from '@/components/home'
import { Section, SectionTitle } from '@/components/shared';


export default function Home() {



  return (
    <>

    <Hero />
    <CaseStudies />
    <About /> 
    <Section>
      <SectionTitle title="Services" />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Service 1 */}
        <div className="group p-8 rounded-lg border border-border/50 bg-card hover:border-border transition-colors">
          <h3 className="text-xl font-semibold mb-4">
            Web Development
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            Custom websites and web applications built with React, Next.js, and modern technologies for optimal performance.
          </p>
        </div>

        {/* Service 2 */}
        <div className="group p-8 rounded-lg border border-border/50 bg-card hover:border-border transition-colors">
          <h3 className="text-xl font-semibold mb-4">
            Full-Stack Solutions
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            Complete backend systems with Laravel, REST APIs, authentication, and database architecture.
          </p>
        </div>

        {/* Service 3 */}
        <div className="group p-8 rounded-lg border border-border/50 bg-card hover:border-border transition-colors">
          <h3 className="text-xl font-semibold mb-4">
            UI/UX Design
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            Clean, intuitive interfaces with attention to detail, accessibility, and user experience.
          </p>
        </div>

        {/* Service 4 */}
        <div className="group p-8 rounded-lg border border-border/50 bg-card hover:border-border transition-colors">
          <h3 className="text-xl font-semibold mb-4">
            Responsive Design
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            Mobile-first approach ensuring your site works flawlessly across all devices and screen sizes.
          </p>
        </div>

        {/* Service 5 */}
        <div className="group p-8 rounded-lg border border-border/50 bg-card hover:border-border transition-colors">
          <h3 className="text-xl font-semibold mb-4">
            Performance Optimization
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            Fast-loading websites optimized for speed, SEO, and excellent core web vitals scores.
          </p>
        </div>

        {/* Service 6 */}
        <div className="group p-8 rounded-lg border border-border/50 bg-card hover:border-border transition-colors">
          <h3 className="text-xl font-semibold mb-4">
            Maintenance & Support
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            Ongoing updates, bug fixes, and improvements to keep your application running smoothly.
          </p>
        </div>
      </div>
    </Section>
    </>
  );
}
