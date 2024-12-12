import React from "react";
import { Button } from "./ui/button";
import { FiDownload } from "react-icons/fi";

const DownloadCV = ({size, variant}) => {
  return (
    <a href="/files/Ismael-cv-english.pdf" download>
    <Button
      variant={variant || "outline"}
      size={size || undefined}
      className="uppercase flex items-center gap-2"
      aria-label="Download Curriculum Vitae"
    >
      <span id="download-cv-text">Download CV</span>
      <FiDownload aria-labelledby="download-cv-text" className={size === "lg" ? "text-xl" : "text-lg"} />
    </Button>
    </a>
  );
};

export default DownloadCV;
