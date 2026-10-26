import Link from "next/link";
import type { ReactNode } from "react";
import type { ArticleBlock, ArticleSection } from "@/app/data/articles";

// Renders **bold** and [label](href) inside article text.
function renderInline(text: string): ReactNode[] {
  const parts: ReactNode[] = [];
  const pattern = /\*\*([^*]+)\*\*|\[([^\]]+)\]\(([^)]+)\)/g;
  let lastIndex = 0;

  for (const match of text.matchAll(pattern)) {
    const index = match.index ?? 0;
    if (index > lastIndex) parts.push(text.slice(lastIndex, index));

    if (match[1]) {
      parts.push(
        <strong key={index} className="font-semibold text-[#111111]">
          {match[1]}
        </strong>,
      );
    } else {
      const [label, href] = [match[2], match[3]];
      const className = "font-medium text-[#C20F42] underline underline-offset-2 hover:text-[#B50F40]";
      parts.push(
        href.startsWith("/") ? (
          <Link key={index} href={href} className={className}>
            {label}
          </Link>
        ) : (
          <a key={index} href={href} target="_blank" rel="noopener noreferrer" className={className}>
            {label}
          </a>
        ),
      );
    }
    lastIndex = index + match[0].length;
  }

  if (lastIndex < text.length) parts.push(text.slice(lastIndex));
  return parts;
}

function Block({ block }: { block: ArticleBlock }) {
  switch (block.type) {
    case "p":
      return <p>{renderInline(block.text)}</p>;
    case "ul":
    case "ol": {
      const List = block.type;
      return (
        <List className={`space-y-2 pl-5 ${block.type === "ul" ? "list-disc" : "list-decimal"}`}>
          {block.items.map((item, index) => (
            <li key={index}>{renderInline(item)}</li>
          ))}
        </List>
      );
    }
    case "callout":
      return (
        <div className="rounded-2xl border border-[#E6E6E6] bg-[#F7F7F5] p-5 space-y-1">
          <p className="text-xs font-bold uppercase tracking-wider text-[#C20F42]">{block.title}</p>
          <p className="text-[#111111]">{renderInline(block.text)}</p>
        </div>
      );
    case "table":
      return (
        <div className="overflow-x-auto rounded-2xl border border-[#E6E6E6]">
          <table className="w-full min-w-[520px] text-left text-sm">
            <caption className="px-4 pt-4 text-left text-xs font-bold uppercase tracking-wider text-[#C20F42]">
              {block.caption}
            </caption>
            <thead>
              <tr className="border-b border-[#E6E6E6]">
                {block.head.map((cell, index) => (
                  <th key={index} scope="col" className="px-4 py-3 font-semibold text-[#111111]">
                    {cell}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, rowIndex) => (
                <tr key={rowIndex} className="border-b border-[#E6E6E6] last:border-0">
                  {row.map((cell, cellIndex) => (
                    <td key={cellIndex} className="px-4 py-3 align-top">
                      {renderInline(cell)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
  }
}

export default function ArticleContent({ sections }: { sections: ArticleSection[] }) {
  return (
    <div className="space-y-12">
      {sections.map((section) => (
        <section key={section.id} id={section.id} className="space-y-4 scroll-mt-28">
          <h2
            className="text-2xl sm:text-3xl font-medium tracking-tight text-[#111111]"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            {section.heading}
          </h2>
          <div className="space-y-4 text-sm sm:text-base leading-relaxed text-[#404040]">
            {section.blocks.map((block, index) => (
              <Block key={index} block={block} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
