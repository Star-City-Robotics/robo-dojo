import type { Course } from "../types";
import WhatIsMarkdown from "@/data/content/what-is-markdown.mdx";
import FastToWrite from "@/data/content/fast-to-write.mdx";
import AiCanWriteIt from "@/data/content/ai-can-write-it.mdx";
import EasilyPortable from "@/data/content/easily-portable.mdx";
import MarkdownFormats from "@/data/content/markdown-formats.mdx";
import Headers from "@/data/content/headers.mdx";
import TextFormatting from "@/data/content/text-formatting.mdx";
import Lists from "@/data/content/lists.mdx";
import Links from "@/data/content/links.mdx";
import Images from "@/data/content/images.mdx";
import CodeBlocks from "@/data/content/code-blocks.mdx";
import Tables from "@/data/content/tables.mdx";
import Blockquotes from "@/data/content/blockquotes.mdx";
import HorizontalRules from "@/data/content/horizontal-rules.mdx";
import SpecialRenderers from "@/data/content/special-renderers.mdx";
import GithubMarkdown from "@/data/content/github-markdown.mdx";
import MdxFeatures from "@/data/content/mdx-features.mdx";

export const howToWriteMarkdown: Course = {
  id: "how-to-write-markdown",
  name: "How to Write Markdown",
  modules: [
    {
      id: "why-markdown",
      name: "Why Markdown?",
      resources: [
        {
          id: "what-is-markdown",
          completed: false,
          content: WhatIsMarkdown,
          description: "Understanding what Markdown is and its purpose",
          name: "What is Markdown?",
          resourceType: "guide",
        },
        {
          id: "fast-to-write",
          completed: false,
          content: FastToWrite,
          description:
            "Learn why Markdown is faster to write than HTML or rich text",
          name: "Fast to Write",
          resourceType: "guide",
        },
        {
          id: "ai-can-write-it",
          completed: false,
          content: AiCanWriteIt,
          description: "How AI tools excel at generating Markdown content",
          name: "AI Can Write It Quickly",
          resourceType: "guide",
        },
        {
          id: "easily-portable",
          completed: false,
          content: EasilyPortable,
          description:
            "Why Markdown content is easily portable across platforms",
          name: "Easily Portable",
          resourceType: "guide",
        },
        {
          id: "markdown-formats",
          completed: false,
          content: MarkdownFormats,
          description: "How Markdown transforms into different output formats",
          name: "Markdown as a Universal Format",
          resourceType: "guide",
        },
      ],
    },
    {
      id: "markdown-syntax",
      name: "Markdown Syntax",
      resources: [
        {
          id: "headers",
          completed: false,
          content: Headers,
          description: "Learn how to create headings and document structure",
          name: "Headers and Headings",
          resourceType: "guide",
        },
        {
          id: "text-formatting",
          completed: false,
          content: TextFormatting,
          description: "Bold, italic, strikethrough, and other text formatting",
          name: "Text Formatting",
          resourceType: "guide",
        },
        {
          id: "lists",
          completed: false,
          content: Lists,
          description: "Creating ordered and unordered lists",
          name: "Lists",
          resourceType: "guide",
        },
        {
          id: "links",
          completed: false,
          content: Links,
          description: "Adding links and references to your content",
          name: "Links and References",
          resourceType: "guide",
        },
        {
          id: "images",
          completed: false,
          content: Images,
          description: "Embedding images and media in Markdown",
          name: "Images and Media",
          resourceType: "guide",
        },
        {
          id: "code-blocks",
          completed: false,
          content: CodeBlocks,
          description: "Inline code and code blocks with syntax highlighting",
          name: "Code Blocks",
          resourceType: "guide",
        },
        {
          id: "tables",
          completed: false,
          content: Tables,
          description: "Creating tables and organizing data",
          name: "Tables",
          resourceType: "guide",
        },
        {
          id: "blockquotes",
          completed: false,
          content: Blockquotes,
          description: "Using blockquotes for emphasis and citations",
          name: "Blockquotes",
          resourceType: "guide",
        },
        {
          id: "horizontal-rules",
          completed: false,
          content: HorizontalRules,
          description: "Adding dividers and section breaks",
          name: "Horizontal Rules",
          resourceType: "guide",
        },
      ],
    },
    {
      id: "markdown-flavors",
      name: "Different Flavors of Markdown",
      resources: [
        {
          id: "special-renderers",
          completed: false,
          content: SpecialRenderers,
          description: "Understanding how different renderers extend Markdown",
          name: "Special Renderers",
          resourceType: "guide",
        },
        {
          id: "github-markdown",
          completed: false,
          content: GithubMarkdown,
          description: "GitHub Flavored Markdown features and extensions",
          name: "GitHub Flavored Markdown",
          resourceType: "guide",
        },
        {
          id: "mdx-features",
          completed: false,
          content: MdxFeatures,
          description: "MDX: Markdown with React components",
          name: "MDX Features",
          resourceType: "guide",
        },
      ],
    },
  ],
};
