const SoftHiglight = ({ children }) => {
  return <strong className="text-white/80">{children}</strong>;
};

const roleyEN = (
  <>
    AI-powered sales coaching platform — <SoftHiglight>{'"Sell Perfectly"'}</SoftHiglight>. As part of the engineering team, I have shipped most
    features across the product surface and understand the system end-to-end:
    {"\n"}- <SoftHiglight>Web app</SoftHiglight> (Next.js): playbooks, trainings, leaderboards, conversations analytics, door-to-door, remote
    sales, voicemails and admin tooling.
    {"\n"}- <SoftHiglight>Mobile app</SoftHiglight> (React Native + Expo): audio recording flows including continuous door-to-door mode that
    auto-splits sessions into individual conversations. Handle <SoftHiglight>iOS deployments</SoftHiglight> via EAS / Expo (build, sign,
    ship to TestFlight & App Store).
    {"\n"}- <SoftHiglight>Voice AI</SoftHiglight>: integrated <SoftHiglight>LiveKit</SoftHiglight> agents for live practice calls between reps
    and AI characters; wired the transcription pipeline (AssemblyAI) and Claude / OpenAI for coaching feedback.
    {"\n"}- Heavy day-to-day use of <SoftHiglight>Claude</SoftHiglight> as a build partner — from architecture decisions to shipping production
    code across web, mobile, and backend.
  </>
);

const roleyES = (
  <>
    Plataforma de coaching de ventas potenciada por IA — <SoftHiglight>{'"Sell Perfectly"'}</SoftHiglight>. Como parte del equipo de ingeniería,
    he entregado la mayoría de las funcionalidades del producto y entiendo el sistema de punta a punta:
    {"\n"}- <SoftHiglight>App web</SoftHiglight> (Next.js): playbooks, trainings, leaderboards, analítica de conversaciones, door-to-door, remote
    sales, voicemails y herramientas de admin.
    {"\n"}- <SoftHiglight>App móvil</SoftHiglight> (React Native + Expo): flujos de grabación de audio incluyendo el modo continuo door-to-door
    que divide automáticamente las sesiones en conversaciones individuales. Manejo los <SoftHiglight>despliegues iOS</SoftHiglight> vía EAS /
    Expo (build, firma, publicación en TestFlight y App Store).
    {"\n"}- <SoftHiglight>Voice AI</SoftHiglight>: integré agentes de <SoftHiglight>LiveKit</SoftHiglight> para llamadas de práctica en vivo
    entre vendedores y personajes de IA; conecté el pipeline de transcripción (AssemblyAI) y Claude / OpenAI para feedback de coaching.
    {"\n"}- Uso intensivo de <SoftHiglight>Claude</SoftHiglight> como compañero de desarrollo — desde decisiones de arquitectura hasta enviar
    código a producción en web, móvil y backend.
  </>
);

const wobjayEN = (note) => (
  <>
    {note && (
      <>
        <SoftHiglight>Note:</SoftHiglight> {note}
        {"\n"}
        {"\n"}
      </>
    )}
    Modern website builder where I served as Front-End Lead, driving the evolution of the product from its inception. During this time, I:
    {"\n"} - <SoftHiglight>Designed</SoftHiglight> and implemented a scalable and maintainable translation management system, benefiting both the{" "}
    {"project's"} React app and the translation team. <SoftHiglight>70%</SoftHiglight> reduction in new translation integration time by
    automating the detection of missing keys and generating spreadsheets for translators.
    {"\n"}- Docker implementation to reduce backend rebuild and update time by <SoftHiglight>65%</SoftHiglight>, streamlining the onboarding
    of new developers to the team.
  </>
);

const wobjayES = (note) => (
  <>
    {note && (
      <>
        <SoftHiglight>Nota:</SoftHiglight> {note}
        {"\n"}
        {"\n"}
      </>
    )}
    Constructor de sitios web moderno donde fui Front-End Lead, dirigiendo la evolución del producto desde su inicio. Durante este tiempo:
    {"\n"} - <SoftHiglight>Diseñé</SoftHiglight> e implementé un sistema escalable y mantenible de gestión de traducciones, beneficiando tanto a
    la app de React como al equipo de traducción. Reducción del <SoftHiglight>70%</SoftHiglight> en el tiempo de integración de nuevas
    traducciones automatizando la detección de claves faltantes y generando hojas de cálculo para los traductores.
    {"\n"}- Implementación de Docker que redujo el tiempo de rebuild y actualización del backend en un <SoftHiglight>65%</SoftHiglight>,
    agilizando el onboarding de nuevos desarrolladores al equipo.
  </>
);

const heroesEN = (
  <>
    I was one of the developers responsible for creating this landing page using React. {"It's"} an event held in Colombia for entrepreneurs.
    They provided me the design and General Info. The events calendar (grid) was really fun and challenging to make it responsive. They update
    the website every year so the website must have changed since I worked on it. I did things like:
    {"\n"}- <SoftHiglight>Led</SoftHiglight> the development and refactoring of the {"event's"} landing page, utilizing React and SCSS, ensuring
    a fully responsive experience for over 10,000 participants. {"\n"}- <SoftHiglight>Introduced</SoftHiglight> a centralized data management
    system based on JSON, achieving a <strong className="text-white/70">60%</strong> reduction in content update time for mobile and desktop
    versions, all during the production phase
  </>
);

const heroesES = (
  <>
    Fui uno de los desarrolladores responsables de crear esta landing page con React. Es un evento que se realiza en Colombia para emprendedores.
    Me proporcionaron el diseño y la información general. El calendario de eventos (grid) fue realmente divertido y retador para hacerlo
    responsive. Actualizan el sitio cada año, así que probablemente ha cambiado desde que trabajé en él. Hice cosas como:
    {"\n"}- <SoftHiglight>Lideré</SoftHiglight> el desarrollo y refactorización de la landing del evento, usando React y SCSS, asegurando una
    experiencia totalmente responsive para más de 10,000 participantes.
    {"\n"}- <SoftHiglight>Introduje</SoftHiglight> un sistema centralizado de gestión de datos basado en JSON, logrando una reducción del{" "}
    <strong className="text-white/70">60%</strong> en el tiempo de actualización de contenido para versiones móviles y de escritorio, todo
    durante la fase de producción
  </>
);

const styleguideEN =
  "As a Front Developer I meticulously crafted a pixel-perfect frontend implementation of a complex design, adhering strictly to the provided Figma design. Using their project structure and adding custom fixes, I recreated every visual element, animation, and transition. This project was about an AI to generate your branding. They just needed me to do the UI, Quick Job.";
const styleguideES =
  "Como Front Developer construí meticulosamente una implementación frontend pixel-perfect de un diseño complejo, adhiriéndome estrictamente al diseño Figma provisto. Usando su estructura de proyecto y agregando ajustes personalizados, recreé cada elemento visual, animación y transición. Este proyecto era sobre una IA para generar tu branding. Solo necesitaban que hiciera la UI, trabajo rápido.";

const keeperEN =
  "I was a Junior Frontend Dev in this project, I did connections between components and created new ones in the dashboard admin of this web app. This project is about a password manager and other personal things focused in strong security. I loved to learn the importance of cybersecurity";
const keeperES =
  "Fui Junior Frontend Dev en este proyecto, hice conexiones entre componentes y creé nuevos en el dashboard admin de esta web app. El proyecto es un gestor de contraseñas y otros datos personales enfocado en seguridad fuerte. Me encantó aprender la importancia de la ciberseguridad";

const tiaaEN =
  "I was a Junior Frontend Dev in this project, Like an Intern. I used angular to build some tables and I had to work in the UI of a chatbot, I had to check that the ui works in many brands of phones, also in PC. I learned a lot in that project.";
const tiaaES =
  "Fui Junior Frontend Dev en este proyecto, como un Intern. Usé Angular para construir algunas tablas y trabajé en la UI de un chatbot, tuve que verificar que la UI funcionara en muchas marcas de teléfonos y también en PC. Aprendí mucho en ese proyecto.";

const amovlarEN =
  "This was my first paid job, A senior developer that one of my friends knew contacted me to develop a website for a furniture store. I was fullstack using PHP and SCSS and the Senior just checks at the end of the day that everything was fine.";
const amovlarES =
  "Este fue mi primer trabajo pagado. Un desarrollador senior que un amigo conocía me contactó para desarrollar un sitio web para una tienda de muebles. Trabajé fullstack usando PHP y SCSS, y el Senior solo revisaba al final del día que todo estuviera bien.";

export const getAllWorkItems = (t, locale) => {
  const isES = locale === "es";
  return [
    {
      num: "01",
      category: t("work.categories.frontendAi"),
      title: "Roley.ai",
      slug: "roley",
      description: isES ? roleyES : roleyEN,
      stack: [
        { name: "Next.js" },
        { name: "TypeScript" },
        { name: "React Native" },
        { name: "iOS / EAS" },
        { name: "LiveKit" },
        { name: "Supabase" },
        { name: "Claude" },
        { name: "TailwindCSS" },
      ],
      image: "/assets/work/roley-1.png",
      live: "https://roley.ai",
      github: "",
      projectTime: t("work.projects.roley.projectTime"),
    },
    {
      num: "02",
      category: t("work.categories.frontend"),
      title: "WobJay",
      slug: "wobjay",
      description: isES ? wobjayES(t("work.projects.wobjay.pausedNote")) : wobjayEN(t("work.projects.wobjay.pausedNote")),
      stack: [
        { name: "React" },
        { name: "Typescript" },
        { name: "NextJs" },
        { name: "React-Query" },
        { name: "TailwindCSS" },
        { name: "axios" },
      ],
      image: "/assets/work/wobjay-cover-thumb.png",
      live: "https://wobjay.com/",
      github: "",
      projectTime: t("work.projects.wobjay.projectTime"),
    },
    {
      num: "03",
      category: t("work.categories.frontend"),
      title: "Heroes Fest",
      slug: "heroes-fest",
      description: isES ? heroesES : heroesEN,
      stack: [{ name: "React" }, { name: "SCCS" }, { name: "Responsive Design" }],
      image: "/assets/work/heroes-fest-view-pc-thumb.png",
      live: "https://www.innpulsacolombia.com/heroes-fest/",
      github: "",
      projectTime: t("work.projects.heroes.projectTime"),
      moreImages: [{ url: "/assets/work/heroes-fest-2021.png", label: isES ? "Landing" : "Landing Page" }],
    },
    {
      num: "04",
      category: t("work.categories.frontend"),
      title: "StyleGuide Builder",
      slug: "styleguide-builder",
      description: isES ? styleguideES : styleguideEN,
      stack: [{ name: "React" }, { name: "CSS" }, { name: "Figma" }, { name: "TypeScript" }],
      image: "/assets/work/styleguide-figma-frame-thumb.jpg",
      live: "",
      github: "",
      projectTime: t("work.projects.styleguide.projectTime"),
      moreImages: [
        { url: "/assets/work/styleguide-figma-frame.jpg", label: isES ? "Frame de Figma" : "Figma frame" },
        { url: "/assets/work/styleguide-result-vid.mp4", label: isES ? "Resultado web" : "Web Result" },
      ],
    },
    {
      num: "05",
      category: t("work.categories.frontend"),
      title: "Keeper",
      slug: "keeper",
      description: isES ? keeperES : keeperEN,
      stack: [{ name: "Typescript" }, { name: "React" }, { name: "Styled Components" }, { name: "Storybook" }],
      image: "/assets/work/keeper-thumb.png",
      live: "https://www.keepersecurity.com/",
      github: "",
      projectTime: t("work.projects.keeper.projectTime"),
      moreImages: [{ url: "/assets/work/keeper-empty-state.png", label: isES ? "Estado vacío" : "Empty state" }],
    },
    {
      num: "06",
      category: t("work.categories.frontend"),
      title: "TIAA Bank",
      slug: "tiaa-bank",
      description: isES ? tiaaES : tiaaEN,
      stack: [{ name: "Angular" }, { name: "React" }],
      image: "/assets/work/TIAA-cover-thumb.png",
      live: "https://www.tiaa.org/public",
      github: "",
      projectTime: t("work.projects.tiaa.projectTime"),
    },
    {
      num: "07",
      category: t("work.categories.fullstack"),
      title: "Amovlar website",
      slug: "amovlar",
      description: isES ? amovlarES : amovlarEN,
      stack: [{ name: "PHP" }, { name: "SCSS" }, { name: "Responsive Design" }],
      image: "/assets/work/amovlar-thumb.png",
      live: "",
      github: "",
      projectTime: t("work.projects.amovlar.projectTime"),
    },
  ];
};
