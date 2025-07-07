import type { Course } from "../types";
import VideoTestMdx from "@/data/content/video-test.mdx";
import JavaTestMdx from "@/data/content/java-test.mdx";
import TypeScriptTestMdx from "@/data/content/typescript-test.mdx";

export const javaProgrammingCourse: Course = {
  id: "java-programming",
  name: "Java Programming",
  modules: [
    {
      id: "install",
      name: "How to install stuff",
      resources: [
        {
          resourceType: "guide",
          id: "how-to-install-vscode",
          name: "How to Install VSCode",
          completed: false,
          description: "A guide on installing VSCode.",
          content: `# How to Install VSCode\n\nThis guide will help you install Visual Studio Code on your computer.\n\n1. Go to [VSCode Downloads](https://code.visualstudio.com/)\n2. Download the installer for your OS\n3. Run the installer and follow the prompts.`,
        },
        {
          resourceType: "guide",
          id: "git-setup-fun-time-robot-stuff",
          name: "Git Setup Guide",
          completed: false,
          description: "This guide goes over how to set up git.",
          content: `# Git Setup Guide\n\nThis guide will help you set up Git for your development environment.\n\n## Prerequisites\n- None required\n\n## Steps\n1. Download Git from https://git-scm.com/\n2. Install with default settings\n3. Configure your identity\n4. Test the installation\n\n## Configuration\n\n\`\`\`bash\ngit config --global user.name \"Your Name\"\ngit config --global user.email \"your.email@example.com\"\n\`\`\``,
        },
        {
          resourceType: "guide",
          id: "video-tutorial-guide",
          name: "Video Tutorial Guide",
          completed: false,
          description: "A guide with embedded video content.",
          content: VideoTestMdx,
        },
      ],
    },
    {
      id: "basics",
      name: "Java Basics",
      resources: [
        {
          resourceType: "guide",
          id: "java-programming-guide",
          name: "Java Programming Guide",
          completed: false,
          description:
            "Comprehensive Java programming guide with syntax highlighting.",
          content: JavaTestMdx,
        },
        {
          resourceType: "guide",
          id: "java-syntax-guide",
          name: "Java Syntax Guide",
          completed: false,
          description: "Comprehensive guide to Java syntax and structure.",
          content: `# Java Syntax Guide\n\nThis guide covers the syntax and structure of Java programs.`,
        },
        {
          resourceType: "guide",
          id: "first-java-program",
          name: "Hello World Assignment",
          completed: false,
          description: "Create your first Java program.",
          content: `# Hello World Assignment\n\nWrite and run your first Java program!`,
        },
        {
          resourceType: "guide",
          id: "typescript-guide",
          name: "TypeScript for Robotics",
          completed: false,
          description: "Learn TypeScript for robotics applications.",
          content: TypeScriptTestMdx,
        },
      ],
    },
  ],
};
