const items = [
  { label: "React", kind: "stack" },
  { label: "Next.js", kind: "stack" },
  { label: "TypeScript", kind: "stack" },
  { label: "Tailwind", kind: "stack" },
  { label: "Node.js", kind: "stack" },
  { label: "BurpSuite", kind: "stack" },
  { label: "Pixel-Perfect", kind: "tag" },
  { label: "Performance", kind: "tag" },
  { label: "Accessibility", kind: "tag" },
  { label: "UI / UX", kind: "tag" },
  { label: "Cybersecurity", kind: "tag" },
  { label: "Open Source", kind: "tag" },
];

const Marquee = () => {
  const tripled = [...items, ...items, ...items];
  return (
    <section className="relative overflow-hidden border-y border-white/[0.06] py-6">
      <div className="mask-marquee relative">
        <div className="flex w-max animate-marquee items-center gap-12">
          {tripled.map((item, i) => (
            <div key={i} className="flex shrink-0 items-center gap-3">
              <span
                className={`font-display text-2xl italic md:text-3xl ${
                  item.kind === "stack" ? "text-ink" : "text-ink-dim"
                }`}
              >
                {item.label}
              </span>
              <span className="h-1 w-1 rounded-full bg-ink-faint" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Marquee;
