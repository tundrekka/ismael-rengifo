import { Button } from "./ui/button";
import { FiDownload } from "react-icons/fi";
import { PERSONAL_INFO } from "@/app/constants";

const DownloadCV = ({ size, variant }) => {
  return (
    <a
      aria-label="Download English Curriculum Vitae"
      href={PERSONAL_INFO.curriculumsLinks.english}
      download
    >
      <Button
        tabIndex={-1}
        variant={variant || "outline"}
        size={size || undefined}
        className="uppercase flex items-center gap-2"
      >
        <span id="download-cv-text">Download CV</span>
        <FiDownload
          aria-labelledby="download-cv-text"
          className={size === "lg" ? "text-xl" : "text-lg"}
        />
      </Button>
    </a>
  );
};

export default DownloadCV;
