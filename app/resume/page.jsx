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
    <div className="flex min-h-[80vh] items-start justify-center py-12 xl:py-0 xl:pb-2">
      <div className="container mx-auto">
        <Tabs defaultValue="education" className="flex flex-col gap-[60px] xl:flex-row">
          <TabsList className="mx-auto flex w-full max-w-[380px] flex-col gap-6 xl:mx-0">
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <section className="flex flex-col gap-[30px] text-center xl:text-left">
                <h1 className="text-4xl font-bold">{experience.title}</h1>
                <p className="mx-auto max-w-[600px] text-white/60 xl:mx-0">
                  {experience.description}
                  <span>
                    {" "}
                    Check my{" "}
                    <a
                      className="text-accent/50 underline"
                      rel="noopener noreferer"
                      target="_blank"
                      href="https://www.upwork.com/freelancers/~012e8787e1e4b6df2e"
                    >
                      Upwork Profile
                    </a>
                  </span>
                </p>
                <ScrollArea className="h-[400px] shadow-md">
                  <ul className="grid grid-cols-1 gap-[30px] lg:grid-cols-2">
                    {experience.items.map((item, index) => {
                      return (
                        <Link href={item.fullViewLink} key={index}>
                          <li className="relative flex h-[200px] flex-col items-center justify-center gap-1 rounded-xl bg-[#232329] px-10 py-6 lg:items-start lg:hover:bg-gray-800">
                            <span className="absolute right-[16px] top-[6px]">
                              <IoMdOpen className="inline-block" />
                            </span>
                            <span className="text-accent">{item.duration}</span>
                            <h2 className="min-h-[60px] max-w-[260px] text-center text-xl lg:text-left">{item.position}</h2>
                            <div className="flex items-center gap-3">
                              {/* dot */}
                              <span className="h-[6px] w-[6px] rounded-full bg-accent"></span>
                              <p className="text-white/60">{item.company}</p>
                            </div>
                            {/* techs */}
                            {item.techs && (
                              <div>
                                <ul className="flex gap-2 text-xs text-white/40">
                                  {item.techs.map((tech, index) => {
                                    return <li key={index}>{tech}</li>;
                                  })}
                                </ul>
                              </div>
                            )}
                          </li>
                        </Link>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </section>
            </TabsContent>

            {/* education */}
            <TabsContent value="education" className="w-full">
              <section className="flex flex-col gap-[30px] text-center xl:text-left">
                <h1 className="text-4xl font-bold">{education.title}</h1>
                <p className="mx-auto max-w-[600px] text-white/60 xl:mx-0">{education.description}</p>
                <ScrollArea className="h-[400px] shadow-md">
                  <ul className="grid grid-cols-1 gap-[30px] lg:grid-cols-2">
                    {education.items.map((item, index) => {
                      return (
                        <CertificateModal
                          title={item.title}
                          link={item.verificationLink}
                          credlyLink={item.credlyLink}
                          imgUrl={item.imgUrl || ""}
                          key={index}
                        >
                          <li className="relative flex h-[184px] flex-col items-center justify-center gap-1 rounded-xl bg-[#232329] px-10 py-6 lg:items-start lg:hover:bg-gray-800">
                            <span className="absolute right-[16px] top-[6px]">
                              <IoMdOpen className="inline-block" />
                            </span>
                            <p className="mr-2 text-white/60">{item.duration}</p>
                            <h2 className="min-h-[60px] max-w-[260px] text-center text-xl lg:text-left">{item.degreeJsx}</h2>
                            <div className="flex items-center gap-3">
                              {/* dot */}
                              <span className="h-[5px] w-[5px] rounded-full bg-accent/60"></span>
                              <p className="text-left text-white/60">{item.institutionJsx}</p>
                            </div>
                          </li>
                        </CertificateModal>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </section>
            </TabsContent>

            {/* skills */}
            <TabsContent value="skills" className="h-full w-full">
              <section className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h2 className="text-4xl font-bold">{skills.title}</h2>
                  <p className="mx-auto max-w-[600px] text-white/60 xl:mx-0">{skills.description}</p>
                </div>
                <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="group flex h-[150px] w-full items-center justify-center rounded-xl bg-[#232329]">
                              <div className="text-6xl transition-all duration-300 group-hover:text-accent">{skill.icon}</div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </section>
            </TabsContent>

            {/* about */}
            <TabsContent value="about" className="w-full text-center xl:text-left">
              <section className="flex flex-col gap-[30px]">
                <h2 className="text-4xl font-bold">{about.title}</h2>
                <p className="mx-auto max-w-[600px] text-white/60 xl:mx-0">{about.description}</p>
                <ul className="mx-auto grid max-w-[620px] grid-cols-1 gap-y-6 xl:mx-0 xl:grid-cols-2">
                  {about.info.map((item, index) => {
                    return (
                      <li key={index} className="flex flex-wrap items-center justify-center gap-4 xl:justify-start">
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
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
