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
        <div className="flex flex-col xl:flex-row items-center xl:items-start justify-between xl:pt-8 xl:pb-20">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-lg text-white/90">Top Freelancer in Upwork</span>
            <h1 className="h1 mb-6 xl:text-[70px]">
              <span className="text-accent inline-block xl:ml-[-4px]">Software Dev</span><br />{" "}
              <span className="font-light xl:text-[65px] xl:ml-[-5px]">Ismael Rengifo</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              I am passionate about web development. My experience in UI/UX and
              cybersecurity, backed by certifications from{" "}
              <span
                
                className="font-bold text-lg px-1 bg-[#131313] rounded-md"
              >
                <GoogleLetters />
              </span>{" "}
              and Meta, ensures the delivery of secure and high-performance web
              projects
            </p>
            {/* btn and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
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
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;
