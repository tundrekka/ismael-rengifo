// components
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";
import DownloadCV from "@/components/DownloadCV";
import GoogleLetters from "@/components/GoogleLetters";

const Home = () => {
  return (
    <section className="h-full">
      <div className="h-full">
        <div className="flex flex-col items-center justify-between xl:flex-row xl:items-start xl:pb-20 xl:pt-8">
          {/* text */}
          <div className="order-2 text-center xl:order-none xl:text-left">
            <span className="text-lg text-white/90">Top Freelancer in Upwork</span>
            <h1 className="h1 mb-6 xl:text-[70px]">
              <span className="inline-block text-accent xl:ml-[-4px]">Software Dev</span>
              <br /> <span className="font-light xl:ml-[-5px] xl:text-[65px]">Ismael Rengifo</span>
            </h1>
            <p className="mb-9 max-w-[500px] text-white/80">
              I am passionate about web development. My experience in UI/UX and cybersecurity, backed by certifications from{" "}
              <span className="rounded-md bg-[#131313] px-1 text-lg font-bold">
                <GoogleLetters />
              </span>{" "}
              and Meta, ensures the delivery of secure and high-performance web projects
            </p>
            {/* btn and socials */}
            <div className="flex flex-col items-center gap-8 xl:flex-row">
              <DownloadCV size="lg" />
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          {/* photo */}
          <div className="order-1 mb-8 xl:order-none xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;
