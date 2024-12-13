
import Head from "next/head";
import WorksWrapper from "./components/WorksWrapper";


// posible search params
// project_name
// type

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
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <Head>
        <title>Ismael Rengifo | Work</title>
      </Head>
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <WorksWrapper />
        </div>
    </div>
  );
};

export default Work;
