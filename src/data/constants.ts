export const javaProgrammingCourse: Course = {
  name: "Java Programming",
  modules: [
    {
      id: "install",
      name: "How to install stuff",
      resources: [
        {
          type: "video",
          completed: false,
          description: "some string yayy",
          duration: "10m",
          id: "how to install vscode",
          name: "How to Install VSCode",
        },
        {
          type: "guide",
          completed: false,
          description: "This document goes over how to set up git",
          id: "git-setup-fun-time-robot-stuff",
          name: "Git Setup Guide",
          content: `# Git Setup Guide

This guide will help you set up Git for your development environment.

## Prerequisites
- None required

## Steps
1. Download Git from https://git-scm.com/
2. Install with default settings
3. Configure your identity
4. Test the installation

## Configuration
\`\`\`bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
\`\`\``,
        },
      ],
    },
    {
      id: "basics",
      name: "Java Basics",
      resources: [
        {
          type: "video",
          completed: false,
          description: "Introduction to Java programming fundamentals",
          duration: "15m",
          id: "java-intro",
          name: "Introduction to Java",
        },
        {
          type: "document",
          completed: false,
          description: "Comprehensive guide to Java syntax and structure",
          id: "java-syntax-guide",
          name: "Java Syntax Guide",
          pages: 25,
        },
        {
          type: "assignment",
          completed: false,
          description: "Create your first Java program",
          id: "first-java-program",
          name: "Hello World Assignment",
          dueDate: "2024-12-31",
        },
        {
          type: "guide",
          completed: false,
          description:
            "Step-by-step tutorial for setting up Java development environment",
          id: "java-dev-setup",
          name: "Java Development Setup",
          content: `# Java Development Setup

This guide will help you set up your Java development environment.

## Prerequisites
- Basic computer knowledge
- Internet connection

## Steps
1. Download JDK from Oracle or OpenJDK
2. Install JDK
3. Set up environment variables
4. Install an IDE (IntelliJ IDEA, Eclipse, or VSCode)
5. Test your setup

## Verification
\`\`\`bash
java -version
javac -version
\`\`\``,
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
          type: "video",
          completed: false,
          description: "How to set up your robotics Python environment",
          duration: "8m",
          id: "python-robotics-setup-video",
          name: "Python Robotics Setup Video",
        },
        {
          type: "guide",
          completed: false,
          description: "Guide to installing Python and robotics libraries",
          id: "python-robotics-guide",
          name: "Python Robotics Setup Guide",
          content: `# Python Robotics Setup\n\nInstall Python, pip, and robotics libraries like pyserial, numpy, and matplotlib.\n\n## Steps\n1. Download Python from python.org\n2. Install pip\n3. Install libraries: pip install pyserial numpy matplotlib`,
        },
      ],
    },
    {
      id: "first-bot",
      name: "Your First Robot Program",
      resources: [
        {
          type: "code",
          completed: false,
          description: "Write your first Python robot control script",
          id: "first-robot-code",
          name: "First Robot Code",
        },
        {
          type: "assignment",
          completed: false,
          description: "Control a simulated robot to move in a square",
          id: "robot-square-assignment",
          name: "Move in a Square Assignment",
          dueDate: "2024-11-15",
        },
      ],
    },
  ],
};

type Module = {
  id: string;
  name: string;
  resources: Resource[];
};

type Course = {
  name: string;
  modules: Module[];
};
type Resource =
  | {
      id: string;
      name: string;
      type: "video";
      duration: string;
      completed: boolean;
      description: string;
    }
  | {
      type: "guide";
      id: string;
      name: string;
      completed: boolean;
      description: string;
      content: string;
    }
  | {
      id: string;
      type: "assignment";
      name: string;
      dueDate: string;
      completed: false;
      description: string;
    }
  | {
      type: "document";
      id: string;
      name: string;
      pages: number;
      completed: boolean;
      description: string;
    }
  | {
      type: "code";
      id: string;
      name: string;
      completed: boolean;
      description: string;
    };

export const courses = [javaProgrammingCourse, dummyCourse];
