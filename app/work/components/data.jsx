const SoftHiglight = ({ children }) => {
  return <strong className="text-white/80">{children}</strong>;
};

const allWorkItems = [
  {
    num: "01",
    category: "frontend / ai",
    title: "Roley.ai",
    slug: "roley",
    description: (
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
    ),
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
    projectTime: "2025 - present",
  },
  {
    num: "02",
    category: "frontend",
    title: "WobJay",
    slug: "wobjay",
    description: (
      <>
        <SoftHiglight>Note:</SoftHiglight> project currently paused per CEO directive.
        {"\n"}
        {"\n"}Modern website builder where I served as Front-End Lead, driving the evolution of the product from its inception. During this
        time, I:
        {"\n"} - <SoftHiglight>Designed</SoftHiglight> and implemented a scalable and maintainable translation management system, benefiting both
        the {"project's"} React app and the translation team. <SoftHiglight>70%</SoftHiglight> reduction in new translation integration time by
        automating the detection of missing keys and generating spreadsheets for translators.
        {"\n"}- Docker implementation to reduce backend rebuild and update time by <SoftHiglight>65%</SoftHiglight>, streamlining the onboarding
        of new developers to the team.
      </>
    ),
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
    projectTime: "2021 - 2024",
  },
  {
    num: "03",
    category: "frontend",
    title: "Heroes Fest",
    slug: "heroes-fest",
    description: (
      <>
        I was one of the developers responsible for creating this landing page using React. {"It's"} an event held in Colombia for
        entrepreneurs. They provided me the design and General Info. The events calendar (grid) was really fun and challenging to make it
        responsive. They update the website every year so the website must have changed since I worked on it. I did things like:
        {"\n"}- <SoftHiglight>Led</SoftHiglight> the development and refactoring of the {"event's"} landing page, utilizing React and SCSS,
        ensuring a fully responsive experience for over 10,000 participants. {"\n"}- <SoftHiglight>Introduced</SoftHiglight> a centralized
        data management system based on JSON, achieving a <strong className="text-white/70">60%</strong> reduction in content update time
        for mobile and desktop versions, all during the production phase
      </>
    ),
    stack: [{ name: "React" }, { name: "SCCS" }, { name: "Responsive Design" }],
    image: "/assets/work/heroes-fest-view-pc-thumb.png",
    live: "https://www.innpulsacolombia.com/heroes-fest/",
    github: "",
    projectTime: "year 2021",
    moreImages: [{ url: "/assets/work/heroes-fest-2021.png", label: "Landing Page" }],
  },
  {
    num: "04",
    category: "frontend",
    title: "StyleGuide Builder",
    slug: "styleguide-builder",
    description:
      "As a Front Developer I meticulously crafted a pixel-perfect frontend implementation of a complex design, adhering strictly to the provided Figma design. Using their project structure and adding custom fixes, I recreated every visual element, animation, and transition. This project was about an AI to generate your branding. They just needed me to do the UI, Quick Job.",
    stack: [{ name: "React" }, { name: "CSS" }, { name: "Figma" }, { name: "TypeScript" }],
    image: "/assets/work/styleguide-figma-frame-thumb.jpg",
    live: "",
    github: "",
    projectTime: "year 2024",
    moreImages: [
      { url: "/assets/work/styleguide-figma-frame.jpg", label: "Figma frame" },
      { url: "/assets/work/styleguide-result-vid.mp4", label: "Web Result" },
    ],
  },
  {
    num: "05",
    category: "frontend",
    title: "Keeper",
    slug: "keeper",
    description:
      "I was a Junior Frontend Dev in this project, I did connections between components and created new ones in the dashboard admin of this web app. This project is about a password manager and other personal things focused in strong security. I loved to learn the importance of cybersecurity",
    stack: [{ name: "Typescript" }, { name: "React" }, { name: "Styled Components" }, { name: "Storybook" }],
    image: "/assets/work/keeper-thumb.png",
    live: "https://www.keepersecurity.com/",
    github: "",
    projectTime: "2021 year",
    moreImages: [{ url: "/assets/work/keeper-empty-state.png", label: "Empty state" }],
  },
  {
    num: "06",
    category: "frontend",
    title: "TIAA Bank",
    slug: "tiaa-bank",
    description:
      "I was a Junior Frontend Dev in this project, Like an Intern. I used angular to build some tables and I had to work in the UI of a chatbot, I had to check that the ui works in many brands of phones, also in PC. I learned a lot in that project.",
    stack: [{ name: "Angular" }, { name: "React" }],
    image: "/assets/work/TIAA-cover-thumb.png",
    live: "https://www.tiaa.org/public",
    github: "",
    projectTime: "year 2021",
  },
  {
    num: "07",
    category: "fullstack",
    title: "Amovlar website",
    slug: "amovlar",
    description:
      "This was my first paid job, A senior developer that one of my friends knew contacted me to develop a website for a furniture store. I was fullstack using PHP and SCSS and the Senior just checks at the end of the day that everything was fine.",
    stack: [{ name: "PHP" }, { name: "SCSS" }, { name: "Responsive Design" }],
    image: "/assets/work/amovlar-thumb.png",
    live: "",
    github: "",
    projectTime: "year 2020",
  },
];

export { allWorkItems };
