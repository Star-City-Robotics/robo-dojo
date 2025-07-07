import React from "react";
import TestMdx from "@/content/test.mdx";

export const javaProgrammingCourse: Course = {
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
          id: "test-mdx-guide",
          name: "Test MDX Guide",
          completed: false,
          description: "A test guide using MDX content.",
          content: TestMdx,
        },
      ],
    },
    {
      id: "basics",
      name: "Java Basics",
      resources: [
        {
          resourceType: "guide",
          id: "java-intro",
          name: "Introduction to Java",
          completed: false,
          description: "Introduction to Java programming fundamentals.",
          content: `# Introduction to Java\n\nLearn the basics of Java programming in this guide.`,
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
          id: "java-dev-setup",
          name: "Java Development Setup",
          completed: false,
          description:
            "Step-by-step tutorial for setting up Java development environment.",
          content: `# Java Development Setup\n\nThis guide will help you set up your Java development environment.\n\n## Prerequisites\n- Basic computer knowledge\n- Internet connection\n\n## Steps\n1. Download JDK from Oracle or OpenJDK\n2. Install JDK\n3. Set up environment variables\n4. Install an IDE (IntelliJ IDEA, Eclipse, or VSCode)\n5. Test your setup\n\n## Verification\n\n\`\`\`bash\njava -version\njavac -version\n\`\`\``,
        },
      ],
    },
  ],
};

export const dummyCourse: Course = {
  name: "Python Robotics",
  modules: [
    {
      id: "setup",
      name: "Robotics Environment Setup",
      resources: [
        {
          resourceType: "guide",
          id: "python-robotics-setup",
          name: "Python Robotics Setup Guide",
          completed: false,
          description: "How to set up your robotics Python environment.",
          content: `# Python Robotics Setup\n\nInstall Python, pip, and robotics libraries like pyserial, numpy, and matplotlib.\n\n## Steps\n1. Download Python from python.org\n2. Install pip\n3. Install libraries: pip install pyserial numpy matplotlib`,
        },
        {
          resourceType: "guide",
          id: "python-robotics-guide",
          name: "Python Robotics Guide",
          completed: false,
          description: "Guide to installing Python and robotics libraries.",
          content: `# Python Robotics Guide\n\nThis guide covers the basics of Python for robotics.`,
        },
      ],
    },
    {
      id: "first-bot",
      name: "Your First Robot Program",
      resources: [
        {
          resourceType: "guide",
          id: "first-robot-code",
          name: "First Robot Guide",
          completed: false,
          description: "Write your first Python robot control script.",
          content: `# First Robot Guide\n\nWrite your first Python robot control script in this guide.`,
        },
        {
          resourceType: "guide",
          id: "robot-square-assignment",
          name: "Move in a Square Assignment",
          completed: false,
          description: "Control a simulated robot to move in a square.",
          content: `# Move in a Square Assignment\n\nControl a simulated robot to move in a square.`,
        },
      ],
    },
  ],
};

export type Module = {
  id: string;
  name: string;
  resources: Resource[];
};

export type Course = {
  name: string;
  modules: Module[];
};

export type Resource = {
  resourceType: "guide";
  id: string;
  name: string;
  completed: boolean;
  description: string;
  content: string | React.ComponentType;
};

export const courses = [javaProgrammingCourse, dummyCourse];
