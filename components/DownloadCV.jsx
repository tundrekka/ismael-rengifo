import { FiDownload } from "react-icons/fi";
import { PERSONAL_INFO } from "@/app/constants";

const DownloadCV = ({ size }) => {
  const sizeClasses =
    size === "lg" ? "h-[54px] px-7 text-[12px]" : "h-[44px] px-5 text-[11px]";
  return (
    <a
      aria-label="Download English Curriculum Vitae"
      href={PERSONAL_INFO.curriculumsLinks.english}
      download
      className="group relative inline-flex"
    >
      <span
        className={`relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-accent font-mono uppercase tracking-[0.22em] text-primary transition-all duration-500 hover:bg-accent-hover ${sizeClasses}`}
      >
        <span className="relative z-10 font-semibold">Download CV</span>
        <FiDownload className="relative z-10 text-base transition-transform duration-500 group-hover:translate-y-0.5" />
        {/* shimmer */}
        <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
      </span>
    </a>
  );
};

export default DownloadCV;
