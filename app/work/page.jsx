import WorksWrapper from "./components/WorksWrapper";

export const metadata = {
  title: "Ismael Rengifo | Work",
  description: "My portfolio Works",
};

const Work = () => {
  return (
    <div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0, duration: 0.3, ease: "easeIn" },
      }}
      className="flex min-h-[80vh] flex-col justify-center py-12 xl:px-0"
    >
      <div className="flex flex-col xl:flex-row xl:gap-[30px]">
        <WorksWrapper />
      </div>
    </div>
  );
};

export default Work;
