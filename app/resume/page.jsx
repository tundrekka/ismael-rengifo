import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { IoMdOpen } from "react-icons/io";
import { about, education, experience, skills } from "./data";
import CertificateModal from "@/components/ImageModal";
import Link from "next/link";

export const metadata = {
  title: "Ismael Rengifo | Resume",
  description: "My portfolio Works",
};

const Resume = () => {
  return (
    <div className="flex min-h-[80vh] items-start justify-center py-10 xl:py-12">
      <div className="container mx-auto">
        {/* page header */}
        <div className="mb-12">
          <div className="section-eyebrow">/ Resume</div>
          <h1 className="font-display text-5xl italic tracking-tight text-ink xl:text-7xl">
            The credentials.
          </h1>
        </div>

        <Tabs defaultValue="education" className="flex flex-col gap-12 xl:flex-row xl:gap-16">
          <TabsList className="flex w-full flex-col gap-2 xl:w-[320px]">
            <TabsTrigger value="education">
              <span className="text-ink-faint">01</span>
              <span>Education</span>
            </TabsTrigger>
            <TabsTrigger value="experience">
              <span className="text-ink-faint">02</span>
              <span>Experience</span>
            </TabsTrigger>
            <TabsTrigger value="skills">
              <span className="text-ink-faint">03</span>
              <span>Skills</span>
            </TabsTrigger>
            <TabsTrigger value="about">
              <span className="text-ink-faint">04</span>
              <span>About me</span>
            </TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <section className="flex flex-col gap-6 text-center xl:text-left">
                <h2 className="font-display text-4xl italic text-ink xl:text-5xl">{experience.title}</h2>
                <p className="mx-auto max-w-[600px] text-[15px] text-ink-muted xl:mx-0">
                  {experience.description}
                  <span>
                    {" "}
                    Check my{" "}
                    <a
                      className="text-accent underline underline-offset-4 hover:text-accent-hover"
                      rel="noopener noreferer"
                      target="_blank"
                      href="https://www.upwork.com/freelancers/~012e8787e1e4b6df2e"
                    >
                      Upwork Profile
                    </a>
                  </span>
                </p>
                <ScrollArea className="h-[420px]">
                  <ul className="grid grid-cols-1 gap-3 pr-3 lg:grid-cols-2 lg:gap-4">
                    {experience.items.map((item, index) => (
                      <Link href={item.fullViewLink} key={index}>
                        <li className="card-surface group relative flex h-[200px] flex-col items-center justify-center gap-2 px-7 py-6 lg:items-start">
                          <span className="absolute right-5 top-5 text-ink-dim transition-colors group-hover:text-accent">
                            <IoMdOpen className="inline-block" />
                          </span>
                          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-dim">
                            {item.duration}
                          </span>
                          <h3 className="min-h-[56px] max-w-[260px] text-center font-display text-2xl italic text-ink lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-2.5">
                            <span className="h-1 w-1 rounded-full bg-ink-faint"></span>
                            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-muted">
                              {item.company}
                            </p>
                          </div>
                          {item.techs && (
                            <ul className="flex flex-wrap gap-2 text-[10px] text-ink-dim">
                              {item.techs.map((tech, i) => (
                                <li key={i}>{tech}</li>
                              ))}
                            </ul>
                          )}
                        </li>
                      </Link>
                    ))}
                  </ul>
                </ScrollArea>
              </section>
            </TabsContent>

            {/* education */}
            <TabsContent value="education" className="w-full">
              <section className="flex flex-col gap-6 text-center xl:text-left">
                <h2 className="font-display text-4xl italic text-ink xl:text-5xl">{education.title}</h2>
                <p className="mx-auto max-w-[600px] text-[15px] text-ink-muted xl:mx-0">{education.description}</p>
                <ScrollArea className="h-[420px]">
                  <ul className="grid grid-cols-1 gap-3 pr-3 lg:grid-cols-2 lg:gap-4">
                    {education.items.map((item, index) => (
                      <CertificateModal
                        title={item.title}
                        link={item.verificationLink}
                        credlyLink={item.credlyLink}
                        imgUrl={item.imgUrl || ""}
                        key={index}
                      >
                        <li className="card-surface group relative flex h-[190px] flex-col items-center justify-center gap-2 px-7 py-6 lg:items-start">
                          <span className="absolute right-5 top-5 text-ink-dim transition-colors group-hover:text-accent">
                            <IoMdOpen className="inline-block" />
                          </span>
                          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-dim">{item.duration}</p>
                          <h3 className="min-h-[56px] max-w-[260px] text-center text-lg text-ink lg:text-left">
                            {item.degreeJsx}
                          </h3>
                          <div className="flex items-center gap-2.5">
                            <span className="h-1 w-1 rounded-full bg-ink-faint"></span>
                            <p className="text-left font-mono text-[11px] uppercase tracking-[0.18em] text-ink-muted">
                              {item.institutionJsx}
                            </p>
                          </div>
                        </li>
                      </CertificateModal>
                    ))}
                  </ul>
                </ScrollArea>
              </section>
            </TabsContent>

            {/* skills */}
            <TabsContent value="skills" className="h-full w-full">
              <section className="flex flex-col gap-8">
                <div className="flex flex-col gap-4 text-center xl:text-left">
                  <h2 className="font-display text-4xl italic text-ink xl:text-5xl">{skills.title}</h2>
                  <p className="mx-auto max-w-[600px] text-[15px] text-ink-muted xl:mx-0">{skills.description}</p>
                </div>
                <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4">
                  {skills.skillList.map((skill, index) => (
                    <li key={index}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="card-surface group flex h-[140px] w-full items-center justify-center">
                            <div className="text-5xl text-ink-muted transition-all duration-500 group-hover:scale-110 group-hover:text-accent">
                              {skill.icon}
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="font-mono text-[11px] uppercase tracking-[0.18em] capitalize">{skill.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                  ))}
                </ul>
              </section>
            </TabsContent>

            {/* about */}
            <TabsContent value="about" className="w-full text-center xl:text-left">
              <section className="flex flex-col gap-6">
                <h2 className="font-display text-4xl italic text-ink xl:text-5xl">{about.title}</h2>
                <p className="mx-auto max-w-[600px] text-[15px] text-ink-muted xl:mx-0">{about.description}</p>
                <ul className="mx-auto mt-4 grid max-w-[640px] grid-cols-1 gap-y-5 xl:mx-0 xl:grid-cols-2 xl:gap-x-10">
                  {about.info.map((item, index) => (
                    <li
                      key={index}
                      className="flex flex-wrap items-center justify-center gap-3 border-b border-white/[0.06] pb-4 xl:justify-start"
                    >
                      <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-dim">
                        {item.fieldName}
                      </span>
                      <span className="text-base text-ink">{item.fieldValue}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </div>
  );
};

export default Resume;
