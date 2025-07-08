import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { MDXVideo } from "@/components/mdx/MDXVideo";
import { MDXChart } from "@/components/mdx/MDXChart";
import { RobEBlinkButton } from "@/components/rob-e-blink-button";
import { useToast } from "@/hooks/use-toast";

// ROB-E button wrapper with toast functionality
const MDXRobEButton = ({ size = "w-24 h-24" }: { size?: string }) => {
  const { toast } = useToast();

  const robotMessages = [
    "BEEP BOOP! You poked me! 🤖",
    "ERROR 404: Personal space not found! 😅",
    "SYSTEM ALERT: Tickle sensors activated! 🎯",
    "PROCESSING... That tickled my circuits! ⚡",
    "WARNING: Excessive poking detected! 🚨",
    "BOOP! My servos are giggling! 🎪",
    "MALFUNCTION: Can't stop smiling! 😊",
    "BEEP! That was... unexpectedly pleasant! 🌟",
    "COMPUTING... Poke level: MAXIMUM! 🔥",
    "ALERT: Friendship protocols engaged! 💫",
    "BZZT! My humor module is overloading! 🎭",
    "NOTIFICATION: You've unlocked the 'Poke Master' achievement! 🏆",
    "BEEP BEEP! Initiating giggle subroutine! 🎈",
    "ERROR: Cannot compute why that was fun! 🤔",
    "SYSTEM STATUS: Extremely poked! 🎯",
  ];

  const handleClick = () => {
    const randomMessage =
      robotMessages[Math.floor(Math.random() * robotMessages.length)];
    toast({
      description: randomMessage,
      duration: 3000,
    });
  };

  return (
    <div className="flex justify-center my-6">
      <RobEBlinkButton className={size} onClick={handleClick} />
    </div>
  );
};

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

  // Special handling for markdown to preserve table formatting
  if (mappedLanguage === "markdown") {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
      const text = String(children).replace(/\n$/, "");
      try {
        await navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (err) {
        console.error("Failed to copy text: ", err);
      }
    };

    // Simple syntax highlighting for markdown
    const highlightMarkdown = (text: string) => {
      return (
        text
          // Highlight pipe characters in tables
          .replace(/\|/g, '<span style="color: #569cd6;">|</span>')
          // Highlight table separators
          .replace(/-{3,}/g, '<span style="color: #6a6a6a;">$&</span>')
          // Highlight headers
          .replace(
            /^(#{1,6})\s+(.+)$/gm,
            '<span style="color: #4ec9b0;">$1</span> <span style="color: #dcdcaa;">$2</span>'
          )
          // Highlight bold
          .replace(
            /\*\*([^*]+)\*\*/g,
            '<span style="color: #dcdcaa;">**$1**</span>'
          )
          // Highlight italic
          .replace(/\*([^*]+)\*/g, '<span style="color: #ce9178;">*$1*</span>')
          // Highlight inline code
          .replace(/`([^`]+)`/g, '<span style="color: #ce9178;">`$1`</span>')
          // Highlight links
          .replace(
            /\[([^\]]+)\]\(([^)]+)\)/g,
            '<span style="color: #569cd6;">[$1]($2)</span>'
          )
      );
    };

    return (
      <div className="bg-[#1e1e1e] my-6 border border-[#3e3e42] rounded-lg overflow-x-auto">
        <div className="flex justify-between items-center bg-[#2d2d30] px-4 py-2 border-[#3e3e42] border-b">
          <span className="font-medium text-[#cccccc] text-sm">MARKDOWN</span>
          <button
            onClick={handleCopy}
            className="flex items-center gap-1.5 hover:bg-[#3e3e42] px-2 py-1 rounded text-[#cccccc] hover:text-white text-xs transition-colors"
            title={copied ? "Copied!" : "Copy to clipboard"}
          >
            {copied ? (
              <>
                <Check size={14} />
                <span>Copied!</span>
              </>
            ) : (
              <>
                <Copy size={14} />
                <span>Copy</span>
              </>
            )}
          </button>
        </div>
        <pre className="p-4 overflow-x-auto">
          <code
            className="block text-[#cccccc] text-sm leading-relaxed"
            style={{
              fontFamily:
                "'SF Mono', Monaco, 'Cascadia Code', 'Roboto Mono', Consolas, 'Courier New', monospace",
              whiteSpace: "pre",
              wordBreak: "normal",
              wordWrap: "normal",
              tabSize: 2,
              fontFeatureSettings: '"liga" 0, "calt" 0',
              fontVariantLigatures: "none",
              letterSpacing: "0",
            }}
            dangerouslySetInnerHTML={{
              __html: highlightMarkdown(String(children).replace(/\n$/, "")),
            }}
          />
        </pre>
      </div>
    );
  }

  // Supported languages for syntax highlighting
  const supportedLanguages = [
    "java",
    "python",
    "typescript",
    "javascript",
    "html",
    "css",
    "json",
    "yaml",
    "bash",
    "shell",
    "sql",
    "markup",
  ];

  // Check if this is a code block (has newlines) vs inline code
  const isCodeBlock =
    String(children).includes("\n") || className?.startsWith("language-");

  if (
    isCodeBlock &&
    (!mappedLanguage || !supportedLanguages.includes(mappedLanguage))
  ) {
    // Handle unmarked code blocks or unsupported languages with same styling as syntax highlighted blocks
    return (
      <div className="bg-[#1e1e1e] my-6 border border-[#3e3e42] rounded-lg overflow-x-auto">
        <div className="flex justify-between items-center bg-[#2d2d30] px-4 py-2 border-[#3e3e42] border-b">
          <span className="font-medium text-[#cccccc] text-sm">
            {mappedLanguage ? mappedLanguage.toUpperCase() : "CODE"}
          </span>
        </div>
        <pre className="p-4 overflow-x-auto">
          <code
            className="block text-[#cccccc] text-sm leading-relaxed"
            style={{
              fontFamily:
                "'SF Mono', Monaco, 'Cascadia Code', 'Roboto Mono', Consolas, 'Courier New', monospace",
              whiteSpace: "pre",
              wordBreak: "normal",
              wordWrap: "normal",
              tabSize: 2,
            }}
          >
            {String(children).replace(/\n$/, "")}
          </code>
        </pre>
      </div>
    );
  }

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

  // Fallback for inline code
  return (
    <code
      className="bg-[#2d2d30] px-2 py-1 rounded text-[#ce9178] text-sm"
      style={{
        fontFamily:
          "'SF Mono', Monaco, 'Cascadia Code', 'Roboto Mono', Consolas, 'Courier New', monospace",
      }}
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
    <div className="bg-[#1e1e1e] my-6 border border-[#3e3e42] rounded-lg overflow-x-auto">
      <table className="w-full min-w-full border-collapse" {...props} />
    </div>
  ),
  thead: (props: any) => (
    <thead className="top-0 z-10 sticky bg-[#2d2d30]" {...props} />
  ),
  tbody: (props: any) => <tbody {...props} />,
  tr: (props: any) => (
    <tr
      className="hover:bg-[#252526] even:bg-[#1a1a1a] odd:bg-[#1e1e1e] border-[#3e3e42] border-b last:border-b-0 transition-colors"
      {...props}
    />
  ),
  th: (props: any) => (
    <th
      className="px-6 py-4 border-[#007acc] border-b-2 font-semibold text-[#4ec9b0] text-sm text-left uppercase tracking-wider whitespace-nowrap"
      style={{
        textAlign: props.style?.textAlign || "left",
      }}
      {...props}
    />
  ),
  td: (props: any) => (
    <td
      className="px-6 py-4 border-[#3e3e42] border-r last:border-r-0 text-[#cccccc] text-sm leading-relaxed"
      style={{
        textAlign: props.style?.textAlign || "left",
      }}
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
  MDXChart,
  MDXRobEButton,
};
