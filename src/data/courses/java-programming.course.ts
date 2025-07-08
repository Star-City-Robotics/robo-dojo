import type { Course } from "../types";
import VideoTestMdx from "@/data/content/video-test.mdx";
import JavaTestMdx from "@/data/content/java-test.mdx";
import TypeScriptTestMdx from "@/data/content/typescript-test.mdx";

export const javaProgrammingCourse: Course = {
  id: "java-programming",
  name: "Java Programming",
  description:
    "Learn the fundamentals of Java programming for robotics applications. Master object-oriented programming, syntax, and build real-world robotic systems.",
  modules: [
    {
      id: "install",
      name: "How to install stuff",
      description:
        "Set up your development environment with essential tools and software for Java robotics programming.",
      resources: [
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
      description:
        "Master the core concepts of Java programming including syntax, data types, control structures, and object-oriented principles.",
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
