import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import DownloadCV from "@/components/DownloadCV";

describe("DownloadCV", () => {
  it("should have the correct aria-label", () => {
    render(<DownloadCV />);
    const linkElement = screen.getByLabelText("Download English Curriculum Vitae");
    expect(linkElement).toBeDefined();
  });
});
