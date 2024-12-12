import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  // FaFigma,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiBurpsuite,
  SiFacebook,
  SiTypescript,
} from "react-icons/si";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { IoMdOpen } from "react-icons/io";
import { PERSONAL_INFO } from "../constants";
import CertificateModal from "@/components/ImageModal";
import Link from "next/link";
import GoogleLetters from "@/components/GoogleLetters";

// about data
const about = {
  title: "About me",
  description:
    "I'm a naturally curious person. Programming lets me explore new technologies and find creative solutions to problems. Beyond my personal projects, I love collaborating on open-source projects and engaging with developer communities. I believe knowledge exchange and teamwork are essential for professional development.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Ismael Rengifo",
    },
    {
      fieldName: "Phone",
      fieldValue: PERSONAL_INFO.phone,
    },
    {
      fieldName: "Experience",
      fieldValue: "3+ Years",
    },
    {
      fieldName: "Discord",
      fieldValue: "tundranaik",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Spanish",
    },
    {
      fieldName: "Email",
      fieldValue: PERSONAL_INFO.email,
    },
  ],
};

// experience data
const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My experience",
  description:
    "With 3 years of experience, I've honed my frontend skills working on a wide range of complex projects. I thrive on challenges and am always eager to learn new technologies.",
  items: [
    {
      company: "Wobjay CMS",
      position: "Front-End Lead Developer",
      duration: "2021 - Present",
      techs: ["React", "Next.js", "TailwindCSS"],
      fullViewLink: "/work?project_name=wobjay",
    },
    {
      company: "StyleGuide Builder",
      position: "Freelance Pixel-Perfect Dev",
      duration: "2024",
      techs: ["React", "CSS", "Figma", "Pixel-Perfect"],
      fullViewLink: "/work?project_name=styleguide-builder",
    },
    {
      company: "Heroes Fest",
      position: "Front-End Developer",
      duration: "2021",
      techs: ["React", "CSS", "Responsive Design"],
      fullViewLink: "/work?project_name=heroes-fest",
    },
    {
      company: "Keeper",
      position: "Freelance Web Developer (Intern)",
      duration: "2021",
      techs: ["React"],
      fullViewLink: "/work?project_name=keeper",
    },
    {
      company: "TIAA Bank",
      position: "Freelance Web Developer (Intern)",
      duration: "2021",
      techs: ["Angular", "React"],
      fullViewLink: "/work?project_name=tiaa-bank",
    },
    {
      company: "Software Dev. Firm",
      position: "Full Stack Developer",
      duration: "2020",
      techs: ["PHP", "SCSS", "Responsive Design"],
      fullViewLink: "/work?project_name=amovlar",
    },
  ],
};

// ! export this to central constants
const GOOGLE_COLORED_WORD = (
  <span
    style={{ background: "#1c1c22" }}
    className="font-bold text-2xl px-1 rounded-md"
  >
    <GoogleLetters />
  </span>
);

// education data
const education = {
  icon: "/assets/resume/cap.svg",
  title: "My education",
  description:
    "I am a proactive learner with an Associate's degree in Modern Languages. Through online courses from leading tech companies, I have acquired the necessary skills to pursue a career in web development.",
  items: [
    {
      institutionJsx: <>Coursera</>,
      degreeJsx: (
        <>
          Certificate{" "}
          <p className="inline-flex gap-2 items-center">
            <span className="text-accent text-2xl">Meta</span>
            <span className="text-md animate-bounce">
              <SiFacebook />
            </span>
          </p>{" "}
          Front-End Developer
        </>
      ),
      duration: "2024",
      verificationLink:
        "https://coursera.org/verify/professional-cert/DA9TBR22OLTE",
      credlyLink: "https://www.credly.com/go/uA2FLsKL",
      title: "Meta (Facebook) Certification",
      imgUrl: "/assets/education/meta-certificate.png",
    },
    {
      institutionJsx: <>Coursera</>,
      degreeJsx: (
        <>
          Certificate{" "}
          <span className="">{GOOGLE_COLORED_WORD} CiberSecurity</span>
        </>
      ),
      duration: "2024",
      verificationLink:
        "https://coursera.org/verify/professional-cert/0EJY84VBX23J",
      credlyLink: "https://www.credly.com/go/naLNeafW",
      title: "Google Certification",
      imgUrl: "/assets/education/google-cyber.png",
    },
    {
      institutionJsx: <>IUTSO</>,
      degreeJsx: <>Associate Degree in Modern Languages</>,
      duration: "2018 - 2021",
      verificationLink: "",
      title: "Degree",
      imgUrl: "/assets/education/titulo-iutso-ismael.jpg",
    },
    {
      institutionJsx: (
        <>
          edX <span class="text-accent text-lg">Hardvard</span>
        </>
      ),
      degreeJsx: <>Introduction to Computer Science</>,
      // instJsx: <>edX <span class='text-accent'>Hardvard</span></>,
      duration: "2021",
      verificationLink:
        "https://courses.edx.org/certificates/b0c753a57a0149cc961d47e52eb34b6f",
      title: "HarvardX Certification",
      imgUrl: "/assets/education/harvard-computer-science.png",
    },
    {
      institutionJsx: <>Coursera - IBM Skills Network</>,
      degreeJsx: (
        <>
          Course <span className="text-accent text-xl">IBM</span> Penetration
          Testing
        </>
      ),
      duration: "2024",
      verificationLink: "https://coursera.org/verify/LL7RQMTF9PL6",
      title: "IBM Certification",
      imgUrl: "/assets/education/ibm-pentest-course.png",
    },
  ],
};

// skills data
const skills = {
  title: "My skills",
  description:
    "My tech stack has a strong focus on JavaScript, TypeScript, React.js, and BurpSuite. I thrive in team environments, enjoy collaborating on challenging projects, and learning from other developers",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "css 3",
    },
    {
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <FaReact />,
      name: "react.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <SiTypescript />,
      name: "typescript",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind.css",
    },
    {
      icon: <FaNodeJs />,
      name: "node.js",
    },
    {
      icon: <SiBurpsuite />,
      name: "BurpSuite",
    },
  ],
};

export const metadata = {
  title: "Ismael Rengifo | Resume",
  description: "My portfolio Works",
};

const Resume = () => {
  return (
    <div className="min-h-[80vh] flex items-start justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <Tabs
          defaultValue="education"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h1 className="text-4xl font-bold">{experience.title}</h1>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
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
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <Link href={item.fullViewLink} key={index}>
                          <li className="relative bg-[#232329] lg:hover:bg-gray-800 h-[200px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                            <span className="absolute top-[6px] right-[16px]">
                              <IoMdOpen className="inline-block" />
                            </span>
                            <span className="text-accent">{item.duration}</span>
                            <h2 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                              {item.position}
                            </h2>
                            <div className="flex items-center gap-3">
                              {/* dot */}
                              <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                              <p className="text-white/60">{item.company}</p>
                            </div>
                            {/* techs */}
                            {item.techs && (
                              <div>
                                <ul className="flex gap-2 text-white/40 text-xs">
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
              </div>
            </TabsContent>

            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h1 className="text-4xl font-bold">{education.title}</h1>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px] shadow-md">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <CertificateModal
                          title={item.title}
                          link={item.verificationLink}
                          credlyLink={item.credlyLink}
                          imgUrl={item.imgUrl || ""}
                          key={index}
                        >
                          <li className="relative bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1 lg:hover:bg-gray-800">
                            <span className="absolute top-[6px] right-[16px]">
                              <IoMdOpen className="inline-block" />
                            </span>
                            <p className="text-white/60 mr-2">
                              {item.duration}
                            </p>
                            <h2 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                              {item.degreeJsx}
                            </h2>
                            <div className="flex items-center gap-3">
                              {/* dot */}
                              <span className="w-[5px] h-[5px] rounded-full bg-accent/60"></span>
                              <p className="text-white/60 text-left">
                                {item.institutionJsx}
                              </p>
                            </div>
                          </li>
                        </CertificateModal>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h2 className="text-4xl font-bold">{skills.title}</h2>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
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
              </div>
            </TabsContent>

            {/* about */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h2 className="text-4xl font-bold">{about.title}</h2>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center flex-wrap xl:justify-start gap-4"
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </div>
  );
};

export default Resume;
