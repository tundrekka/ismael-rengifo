import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiBurpsuite,
  SiFacebook,
  SiTypescript,
  SiClaude,
  SiLivekit,
  SiSupabase,
  SiIos,
  SiExpo,
} from "react-icons/si";
import { PERSONAL_INFO } from "@/app/constants";
import GoogleLetters from "@/components/GoogleLetters";

const GOOGLE_COLORED_WORD = (
  <span style={{ background: "#1c1c22" }} className="rounded-md px-1 text-2xl font-bold">
    <GoogleLetters />
  </span>
);

export const getResumeData = (t, locale) => {
  const years = PERSONAL_INFO.experienceYearsNumber;

  const about = {
    title: t("resume.about.title"),
    description: t("resume.about.description"),
    info: [
      { fieldName: t("resume.about.fields.Name"), fieldValue: PERSONAL_INFO.fullName },
      { fieldName: t("resume.about.fields.Phone"), fieldValue: PERSONAL_INFO.phone },
      { fieldName: t("resume.about.fields.Experience"), fieldValue: years + t("resume.about.years") },
      { fieldName: t("resume.about.fields.Discord"), fieldValue: PERSONAL_INFO.discord },
      { fieldName: t("resume.about.fields.Freelance"), fieldValue: t("resume.about.freelanceValue") },
      { fieldName: t("resume.about.fields.Languages"), fieldValue: t("resume.about.languagesValue") },
      { fieldName: t("resume.about.fields.Email"), fieldValue: PERSONAL_INFO.email },
    ],
  };

  const experience = {
    icon: "/assets/resume/badge.svg",
    title: t("resume.experience.title"),
    description: t("resume.experience.description", { years }),
    items: [
      {
        company: "Roley.ai",
        position: t("resume.positions.roley"),
        duration: "2025 - " + (locale === "es" ? "Presente" : "Present"),
        techs: ["Next.js", "React Native", "iOS / EAS", "LiveKit", "Claude", "Supabase"],
        fullViewLink: "/work?project_name=roley",
      },
      {
        company: "Wobjay CMS",
        position: t("resume.positions.wobjay"),
        duration: "2021 - 2025",
        techs: ["React", "Next.js", "TailwindCSS"],
        fullViewLink: "/work?project_name=wobjay",
      },
      {
        company: "StyleGuide Builder",
        position: t("resume.positions.styleguide"),
        duration: "2024",
        techs: ["React", "CSS", "Figma", "Pixel-Perfect"],
        fullViewLink: "/work?project_name=styleguide-builder",
      },
      {
        company: "Heroes Fest",
        position: t("resume.positions.heroes"),
        duration: "2021",
        techs: ["React", "CSS", "Responsive Design"],
        fullViewLink: "/work?project_name=heroes-fest",
      },
      {
        company: "Keeper",
        position: t("resume.positions.keeper"),
        duration: "2021",
        techs: ["React"],
        fullViewLink: "/work?project_name=keeper",
      },
      {
        company: "TIAA Bank",
        position: t("resume.positions.tiaa"),
        duration: "2021",
        techs: ["Angular", "React"],
        fullViewLink: "/work?project_name=tiaa-bank",
      },
      {
        company: "Software Dev. Firm",
        position: t("resume.positions.amovlar"),
        duration: "2020",
        techs: ["PHP", "SCSS", "Responsive Design"],
        fullViewLink: "/work?project_name=amovlar",
      },
    ],
  };

  const education = {
    icon: "/assets/resume/cap.svg",
    title: t("resume.education.title"),
    description: t("resume.education.description"),
    items: [
      {
        institutionJsx: <>Coursera</>,
        degreeJsx: (
          <>
            {locale === "es" ? "Certificado " : "Certificate "}
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
            {locale === "es" ? "Certificado " : "Certificate "}
            <span className="">{GOOGLE_COLORED_WORD} CiberSecurity</span>
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
        degreeJsx: <>{locale === "es" ? "Técnico Superior en Idiomas Modernos" : "Associate Degree in Modern Languages"}</>,
        duration: "2018 - 2021",
        verificationLink: "",
        title: locale === "es" ? "Título" : "Degree",
        imgUrl: "/assets/education/titulo-iutso-ismael.jpg",
      },
      {
        institutionJsx: (
          <>
            edX <span className="text-lg text-accent">Hardvard</span>
          </>
        ),
        degreeJsx: <>{locale === "es" ? "Introducción a Ciencias de la Computación" : "Introduction to Computer Science"}</>,
        duration: "2021",
        verificationLink: "https://courses.edx.org/certificates/b0c753a57a0149cc961d47e52eb34b6f",
        title: "HarvardX Certification",
        imgUrl: "/assets/education/harvard-computer-science.png",
      },
      {
        institutionJsx: <>Coursera - IBM Skills Network</>,
        degreeJsx: (
          <>
            {locale === "es" ? "Certificado " : "Certificate "}
            <span className="text-xl text-accent">IBM</span> {locale === "es" ? "IA Generativa para Devs" : "Gen AI for Software Devs"}
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
            {locale === "es" ? "Curso " : "Course "}
            <span className="text-xl text-accent">IBM</span> {locale === "es" ? "Pruebas de Penetración" : "Penetration Testing"}
          </>
        ),
        duration: "2024",
        verificationLink: "https://coursera.org/verify/LL7RQMTF9PL6",
        title: "IBM Certification, pen test",
        imgUrl: "/assets/education/ibm-pentest-course.png",
      },
    ],
  };

  const skills = {
    title: t("resume.skills.title"),
    description: t("resume.skills.description"),
    skillList: [
      { icon: <SiClaude />, name: "Claude (Anthropic)" },
      { icon: <SiTypescript />, name: "typescript" },
      { icon: <FaReact />, name: "react.js" },
      { icon: <SiNextdotjs />, name: "next.js" },
      { icon: <SiLivekit />, name: "LiveKit" },
      { icon: <SiSupabase />, name: "Supabase" },
      { icon: <SiExpo />, name: "React Native / Expo" },
      { icon: <SiIos />, name: locale === "es" ? "Despliegues iOS (EAS)" : "iOS Deployments (EAS)" },
      { icon: <SiTailwindcss />, name: "tailwind.css" },
      { icon: <FaNodeJs />, name: "node.js" },
      { icon: <FaJs />, name: "javascript" },
      { icon: <FaHtml5 />, name: "html 5" },
      { icon: <FaCss3 />, name: "css 3" },
      { icon: <SiBurpsuite />, name: "BurpSuite" },
    ],
  };

  return { about, experience, education, skills };
};
