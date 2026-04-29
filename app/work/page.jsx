import WorksWrapper from "./components/WorksWrapper";

export const metadata = {
  title: "Ismael Rengifo | Work",
  description: "My portfolio Works",
};

const Work = () => {
  return (
    <div className="flex min-h-[80vh] flex-col justify-start py-10 xl:py-12 xl:px-0">
      {/* page header */}
      <div className="mb-10 xl:mb-14">
        <div className="section-eyebrow">/ Work</div>
        <h1 className="font-display text-5xl italic tracking-tight text-ink xl:text-7xl">
          Selected work.
        </h1>
      </div>
      <div className="flex flex-col xl:flex-row xl:gap-12">
        <WorksWrapper />
      </div>
    </div>
  );
};

export default Work;
