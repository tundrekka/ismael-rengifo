import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiBurpsuite, SiFacebook, SiTypescript } from "react-icons/si";
import { PERSONAL_INFO } from "@/app/constants";
import GoogleLetters from "@/components/GoogleLetters";

const GOOGLE_COLORED_WORD = (
  <span style={{ background: "#1c1c22" }} className="rounded-md px-1 text-2xl font-bold">
    <GoogleLetters />
  </span>
);

// about data
const about = {
  title: "About me",
  description:
    "I'm a naturally curious person. Programming lets me explore new technologies and find creative solutions to problems. Beyond my personal projects, I love collaborating on open-source projects and engaging with developer communities. I believe knowledge exchange and teamwork are essential for professional development.",
  info: [
    {
      fieldName: "Name",
      fieldValue: PERSONAL_INFO.fullName,
    },
    {
      fieldName: "Phone",
      fieldValue: PERSONAL_INFO.phone,
    },
    {
      fieldName: "Experience",
      fieldValue: PERSONAL_INFO.experienceYearsNumber + "+ Years",
    },
    {
      fieldName: "Discord",
      fieldValue: PERSONAL_INFO.discord,
    },
    {
      fieldName: "Freelance",
      fieldValue: PERSONAL_INFO.freelanceAvailability,
    },
    {
      fieldName: "Languages",
      fieldValue: PERSONAL_INFO.languagesString,
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
  description: `With ${PERSONAL_INFO.experienceYearsNumber} years of experience, I've honed my frontend skills working on a wide range of complex projects. I thrive on challenges and I am always eager to learn new technologies.`,
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
          <p className="inline-flex items-center gap-2">
            <span className="text-2xl text-accent">Meta</span>
            <span className="text-md animate-bounce">
              <SiFacebook />
            </span>
          </p>{" "}
          Front-End Developer
        </>
      ),
      duration: "2024",
      verificationLink: "https://coursera.org/verify/professional-cert/DA9TBR22OLTE",
      credlyLink: "https://www.credly.com/go/uA2FLsKL",
      title: "Meta (Facebook) Certification",
      imgUrl: "/assets/education/meta-certificate.png",
    },
    {
      institutionJsx: <>Coursera</>,
      degreeJsx: (
        <>
          Certificate <span className="">{GOOGLE_COLORED_WORD} CiberSecurity</span>
        </>
      ),
      duration: "2024",
      verificationLink: "https://coursera.org/verify/professional-cert/0EJY84VBX23J",
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
          edX <span className="text-lg text-accent">Hardvard</span>
        </>
      ),
      degreeJsx: <>Introduction to Computer Science</>,
      // instJsx: <>edX <span class='text-accent'>Hardvard</span></>,
      duration: "2021",
      verificationLink: "https://courses.edx.org/certificates/b0c753a57a0149cc961d47e52eb34b6f",
      title: "HarvardX Certification",
      imgUrl: "/assets/education/harvard-computer-science.png",
    },
    {
      institutionJsx: <>Coursera - IBM Skills Network</>,
      degreeJsx: (
        <>
          Certificate <span className="text-xl text-accent">IBM</span> Gen AI for Software Devs
        </>
      ),
      duration: "2025",
      verificationLink: "https://coursera.org/share/a74931b8fcbe5f2af1366512895a4043",
      credlyLink: "https://www.credly.com/badges/1c2fd17a-30c2-4b88-bd46-360b89e7c798/public_url",
      title: "IBM Certification, gen AI",
      imgUrl: "/assets/education/generative-ai-software-dev-ibm.png",
    },
    {
      institutionJsx: <>Coursera - IBM Skills Network</>,
      degreeJsx: (
        <>
          Course <span className="text-xl text-accent">IBM</span> Penetration Testing
        </>
      ),
      duration: "2024",
      verificationLink: "https://coursera.org/verify/LL7RQMTF9PL6",
      title: "IBM Certification, pen test",
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

export { about, experience, education, skills };
