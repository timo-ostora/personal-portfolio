import {Section, SectionTitle} from '@/components/shared'
import { Experience as Ex } from '../WorkExp'
import { experiences, education } from '@/data/constent'
export default function Experience() {


  return (
    <>
    <Section >
      <div className='grid gap-12'>
        <div className='grid gap-6'>
          <SectionTitle title='Work Experience' subTitle="A timeline of my professional journey" />
          {experiences.map((exp, index) => (
            <Ex key={index} year={exp.year} role={exp.role} company={exp.company} />
          ))}
        </div>
      </div>
    </Section>
    <Section>
      <div className='grid gap-6'>
        <SectionTitle title='Education' subTitle="A timeline of my education journey" />
        {education.map((exp, index) => (
          <Ex key={index} year={exp.year} role={exp.degree} company={exp.institution} />
        ))}
      </div>
    </Section>

    {/* Work Experience */}
    {/* <div className="bg-background  p-6 md:p-12 flex flex-col gap-8">
      <div className="grid gap-6 md:grid-cols-[1fr_3fr]">
        <h2>Work Experience</h2>
        <p className="text-md text-gray-600 dark:text-gray-400">A timeline of my professional journey and key achievements in full-stack development.</p>
      </div>
      
      <div className="flex flex-col gap-6">
        {[
          {
            role: "Senior Full Stack Developer",
            company: "Tech Company",
            period: "2023 - Present",
            description: "Led development of scalable web applications, architected REST APIs, and mentored junior developers."
          },
          {
            role: "Full Stack Developer",
            company: "Digital Agency",
            period: "2021 - 2023",
            description: "Built responsive React applications and Laravel backends for 15+ client projects."
          },
          {
            role: "Junior Web Developer",
            company: "Startup",
            period: "2020 - 2021",
            description: "Developed frontend components and assisted in database optimization and API integration."
          }
        ].map((job, idx) => (
          <div key={idx} className="border-l-2 border-foreground/20 pl-6 relative">
            <div className="absolute w-3 h-3 bg-foreground rounded-full -left-1.75 top-2"></div>
            <h4 className="font-semibold text-lg">{job.role}</h4>
            <p className="text-sm text-foreground/60 mb-2">{job.company} • {job.period}</p>
            <p className="text-md text-gray-600 dark:text-gray-400">{job.description}</p>
          </div>
        ))}
      </div>
    </div> */}
    </>
  )
}