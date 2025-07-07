import type { Course } from "../types";
import PythonTestMdx from "@/data/content/python-test.mdx";

export const dummyCourse: Course = {
  name: "Python Robotics",
  modules: [
    {
      id: "setup",
      name: "Robotics Environment Setup",
      resources: [
        {
          resourceType: "guide",
          id: "python-robotics-guide",
          name: "Python Robotics Guide",
          completed: false,
          description: "Complete Python robotics programming guide.",
          content: PythonTestMdx,
        },
        {
          resourceType: "guide",
          id: "python-robotics-setup",
          name: "Python Setup Guide",
          completed: false,
          description: "How to set up your robotics Python environment.",
          content: `# Python Robotics Setup\n\nInstall Python, pip, and robotics libraries like pyserial, numpy, and matplotlib.\n\n## Steps\n1. Download Python from python.org\n2. Install pip\n3. Install libraries: pip install pyserial numpy matplotlib`,
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
