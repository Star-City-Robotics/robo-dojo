import type { Course } from "../types";

// Import all the MDX content
import WhatIsMarkdownMdx from "@/data/content/what-is-markdown.mdx";
import FastToWriteMdx from "@/data/content/fast-to-write.mdx";
import AiCanWriteItMdx from "@/data/content/ai-can-write-it.mdx";
import EasilyPortableMdx from "@/data/content/easily-portable.mdx";
import MarkdownFormatsMdx from "@/data/content/markdown-formats.mdx";
import HeadersMdx from "@/data/content/headers.mdx";
import TextFormattingMdx from "@/data/content/text-formatting.mdx";
import ListsMdx from "@/data/content/lists.mdx";
import LinksMdx from "@/data/content/links.mdx";
import ImagesMdx from "@/data/content/images.mdx";
import CodeBlocksMdx from "@/data/content/code-blocks.mdx";
import TablesMdx from "@/data/content/tables.mdx";
import BlockquotesMdx from "@/data/content/blockquotes.mdx";
import HorizontalRulesMdx from "@/data/content/horizontal-rules.mdx";
import SpecialRenderersMdx from "@/data/content/special-renderers.mdx";
import GithubMarkdownMdx from "@/data/content/github-markdown.mdx";
import MdxFeaturesMdx from "@/data/content/mdx-features.mdx";

export const howToWriteMarkdown: Course = {
  id: "how-to-write-markdown",
  name: "How to Write Markdown",
  description:
    "Master the art of writing in Markdown - the universal markup language. Learn to create beautiful, structured documents that work everywhere from GitHub to documentation sites.",
  modules: [
    {
      id: "why-markdown",
      name: "Why Markdown?",
      description:
        "Discover the power and versatility of Markdown as a writing format. Understand why it's become the standard for technical documentation and content creation.",
      resources: [
        {
          resourceType: "guide",
          id: "what-is-markdown",
          name: "What is Markdown?",
          completed: false,
          description: "Introduction to Markdown and its core concepts.",
          content: WhatIsMarkdownMdx,
        },
        {
          resourceType: "guide",
          id: "fast-to-write",
          name: "Fast to Write",
          completed: false,
          description: "Learn how Markdown speeds up your writing workflow.",
          content: FastToWriteMdx,
        },
        {
          resourceType: "guide",
          id: "ai-can-write-it",
          name: "AI Can Write It Quickly",
          completed: false,
          description:
            "Discover why AI tools excel at generating Markdown content.",
          content: AiCanWriteItMdx,
        },
        {
          resourceType: "guide",
          id: "easily-portable",
          name: "Easily Portable",
          completed: false,
          description:
            "Understand Markdown's cross-platform compatibility advantages.",
          content: EasilyPortableMdx,
        },
        {
          resourceType: "guide",
          id: "markdown-formats",
          name: "Markdown as a Universal Format",
          completed: false,
          description:
            "Explore how Markdown transforms into various output formats.",
          content: MarkdownFormatsMdx,
        },
      ],
    },
    {
      id: "markdown-syntax",
      name: "Markdown Syntax",
      description:
        "Learn all the essential Markdown syntax elements from basic formatting to advanced features like tables and code blocks.",
      resources: [
        {
          resourceType: "guide",
          id: "headers",
          name: "Headers and Headings",
          completed: false,
          description: "Master document structure with Markdown headers.",
          content: HeadersMdx,
        },
        {
          resourceType: "guide",
          id: "text-formatting",
          name: "Text Formatting",
          completed: false,
          description:
            "Learn bold, italic, strikethrough, and other text styles.",
          content: TextFormattingMdx,
        },
        {
          resourceType: "guide",
          id: "lists",
          name: "Lists",
          completed: false,
          description:
            "Create ordered, unordered, and nested lists effectively.",
          content: ListsMdx,
        },
        {
          resourceType: "guide",
          id: "links",
          name: "Links and References",
          completed: false,
          description: "Master internal and external linking techniques.",
          content: LinksMdx,
        },
        {
          resourceType: "guide",
          id: "images",
          name: "Images and Media",
          completed: false,
          description: "Embed and display images in your Markdown documents.",
          content: ImagesMdx,
        },
        {
          resourceType: "guide",
          id: "code-blocks",
          name: "Code Blocks",
          completed: false,
          description: "Display code with syntax highlighting and formatting.",
          content: CodeBlocksMdx,
        },
        {
          resourceType: "guide",
          id: "tables",
          name: "Tables",
          completed: false,
          description: "Create structured data tables with proper alignment.",
          content: TablesMdx,
        },
        {
          resourceType: "guide",
          id: "blockquotes",
          name: "Blockquotes",
          completed: false,
          description: "Use blockquotes for emphasis and citations.",
          content: BlockquotesMdx,
        },
        {
          resourceType: "guide",
          id: "horizontal-rules",
          name: "Horizontal Rules",
          completed: false,
          description: "Add visual section breaks with horizontal rules.",
          content: HorizontalRulesMdx,
        },
      ],
    },
    {
      id: "markdown-flavors",
      name: "Different Flavors of Markdown",
      description:
        "Explore various Markdown implementations and extensions including GitHub Flavored Markdown and MDX for React components.",
      resources: [
        {
          resourceType: "guide",
          id: "special-renderers",
          name: "Special Renderers",
          completed: false,
          description: "Learn about platform-specific Markdown extensions.",
          content: SpecialRenderersMdx,
        },
        {
          resourceType: "guide",
          id: "github-markdown",
          name: "GitHub Flavored Markdown",
          completed: false,
          description:
            "Master GitHub's enhanced Markdown features and integrations.",
          content: GithubMarkdownMdx,
        },
        {
          resourceType: "guide",
          id: "mdx-features",
          name: "MDX Features",
          completed: false,
          description: "Combine React components with Markdown using MDX.",
          content: MdxFeaturesMdx,
        },
      ],
    },
  ],
};
