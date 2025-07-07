import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { MDXVideo } from "@/components/mdx/MDXVideo";

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
    md: "markdown",
    htm: "html",
    xml: "markup",
  };

  const mappedLanguage = languageMap[language] || language;

  // Supported languages for syntax highlighting
  const supportedLanguages = [
    "java",
    "python",
    "typescript",
    "javascript",
    "markdown",
    "html",
    "css",
    "json",
    "yaml",
    "bash",
    "shell",
    "sql",
    "markup",
  ];

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
    <h3 className="mt-6 mb-3 font-bold text-[#ce9178] text-xl" {...props} />
  ),
  h4: (props: any) => (
    <h4 className="mt-4 mb-2 font-bold text-[#c586c0] text-lg" {...props} />
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
      className="space-y-1 [&_ul]:mt-1 mb-4 [&_ul]:mb-1 [&_ul]:ml-8 text-[#cccccc] [&_ul_ul>li]:list-[square] [&_ul>li]:list-[circle] [&>li]:list-disc [&>li]:list-inside"
      {...props}
    />
  ),
  ol: (props: any) => (
    <ol
      className="space-y-1 [&_ol]:mt-1 mb-4 [&_ol]:mb-1 [&_ol]:ml-8 text-[#cccccc] [&_ol_ol>li]:list-[lower-roman] [&_ol>li]:list-[lower-alpha] [&>li]:list-decimal [&>li]:list-inside"
      {...props}
    />
  ),
  li: (props: any) => (
    <li className="ml-3 text-[#cccccc] leading-relaxed" {...props} />
  ),
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
    <div className="my-6 border border-[#3e3e42] rounded-lg overflow-x-auto">
      <table
        className="bg-[#1e1e1e] w-full min-w-full border-collapse"
        {...props}
      />
    </div>
  ),
  thead: (props: any) => (
    <thead className="top-0 z-10 sticky bg-[#2d2d30]" {...props} />
  ),
  tbody: (props: any) => <tbody {...props} />,
  tr: (props: any) => (
    <tr
      className="hover:bg-[#252526] even:bg-[#1a1a1a] odd:bg-[#1e1e1e] border-[#3e3e42] border-b transition-colors"
      {...props}
    />
  ),
  th: (props: any) => (
    <th
      className="px-6 py-4 border-[#007acc] border-b-2 font-semibold text-[#4ec9b0] text-sm text-left uppercase tracking-wider whitespace-nowrap"
      {...props}
    />
  ),
  td: (props: any) => (
    <td
      className="px-6 py-4 border-[#3e3e42] border-r last:border-r-0 text-[#cccccc] text-sm leading-relaxed"
      {...props}
    />
  ),
  caption: (props: any) => (
    <caption
      className="mb-3 font-medium text-[#cccccc] text-sm text-left"
      {...props}
    />
  ),
  MDXVideo,
};
