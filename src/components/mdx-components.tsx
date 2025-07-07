import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

// Custom code component with syntax highlighting
const CodeBlock = ({ children, className, ...props }: any) => {
  const match = /language-(\w+)/.exec(className || "");
  const language = match ? match[1] : "";

  // Map language aliases
  const languageMap: Record<string, string> = {
    ts: "typescript",
    js: "javascript",
    tsx: "typescript",
    jsx: "javascript",
  };

  const mappedLanguage = languageMap[language] || language;

  // Supported languages for syntax highlighting
  const supportedLanguages = ["java", "python", "typescript", "javascript"];

  if (mappedLanguage && supportedLanguages.includes(mappedLanguage)) {
    return (
      <SyntaxHighlighter
        style={vscDarkPlus}
        language={mappedLanguage}
        PreTag="div"
        className="!bg-[#1e1e1e] !border !border-[#3e3e42] rounded-lg"
        customStyle={{
          margin: "1.5rem 0",
          padding: "1rem",
          fontSize: "0.875rem",
          lineHeight: "1.5",
        }}
        {...props}
      >
        {String(children).replace(/\n$/, "")}
      </SyntaxHighlighter>
    );
  }

  // Fallback for unsupported languages or inline code
  return (
    <code
      className="bg-[#2d2d30] px-2 py-1 rounded font-mono text-[#ce9178] text-sm"
      {...props}
    >
      {children}
    </code>
  );
};

// Custom MDX Components for styling markdown elements
export const mdxComponents = {
  h1: (props: any) => (
    <h1
      className="mb-6 pb-2 border-[#3e3e42] border-b font-bold text-[#4ec9b0] text-3xl"
      {...props}
    />
  ),
  h2: (props: any) => (
    <h2
      className="mt-8 mb-4 font-semibold text-[#569cd6] text-2xl"
      {...props}
    />
  ),
  h3: (props: any) => (
    <h3 className="mt-6 mb-3 font-medium text-[#dcdcaa] text-xl" {...props} />
  ),
  h4: (props: any) => (
    <h4 className="mt-4 mb-2 font-medium text-[#dcdcaa] text-lg" {...props} />
  ),
  p: (props: any) => (
    <p className="mb-4 text-[#cccccc] leading-relaxed" {...props} />
  ),
  code: CodeBlock,
  pre: (props: any) => <div {...props} />,
  blockquote: (props: any) => (
    <blockquote
      className="bg-[#252526] my-4 py-2 pl-4 border-[#007acc] border-l-4 text-[#cccccc] italic"
      {...props}
    />
  ),
  ul: (props: any) => (
    <ul
      className="space-y-1 mb-4 text-[#cccccc] list-disc list-inside"
      {...props}
    />
  ),
  ol: (props: any) => (
    <ol
      className="space-y-1 mb-4 text-[#cccccc] list-decimal list-inside"
      {...props}
    />
  ),
  li: (props: any) => <li className="ml-2 text-[#cccccc]" {...props} />,
  a: (props: any) => (
    <a
      className="text-[#569cd6] hover:text-[#4ec9b0] underline transition-colors"
      {...props}
    />
  ),
  strong: (props: any) => (
    <strong className="font-bold text-[#dcdcaa]" {...props} />
  ),
  em: (props: any) => <em className="text-[#ce9178] italic" {...props} />,
  hr: (props: any) => <hr className="my-8 border-[#3e3e42]" {...props} />,
  table: (props: any) => (
    <table
      className="my-4 border border-[#3e3e42] w-full border-collapse"
      {...props}
    />
  ),
  th: (props: any) => (
    <th
      className="bg-[#252526] px-4 py-2 border border-[#3e3e42] font-semibold text-[#dcdcaa] text-left"
      {...props}
    />
  ),
  td: (props: any) => (
    <td
      className="px-4 py-2 border border-[#3e3e42] text-[#cccccc]"
      {...props}
    />
  ),
};
