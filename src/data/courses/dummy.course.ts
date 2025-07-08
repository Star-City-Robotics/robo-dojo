import type { Course } from "../types";
import PythonTestMdx from "@/data/content/python-test.mdx";

export const dummyCourse: Course = {
  id: "python-robotics",
  name: "Python Robotics",
  description:
    "Dive into robotics programming with Python. Learn to control sensors, motors, and build intelligent robotic systems using Python's powerful libraries.",
  modules: [
    {
      id: "python-basics",
      name: "Python Fundamentals",
      description:
        "Learn Python programming basics including variables, functions, loops, and data structures essential for robotics development.",
      resources: [
        {
          resourceType: "guide",
          id: "python-intro",
          name: "Introduction to Python",
          completed: false,
          description: "Get started with Python programming basics.",
          content: `# Introduction to Python\n\nPython is a powerful, easy-to-learn programming language that's perfect for robotics.\n\n## Why Python for Robotics?\n\n- Simple syntax\n- Extensive libraries\n- Great for rapid prototyping\n- Strong community support`,
        },
        {
          resourceType: "guide",
          id: "python-syntax",
          name: "Python Syntax and Structure",
          completed: false,
          description: "Learn Python syntax with practical examples.",
          content: PythonTestMdx,
        },
        {
          resourceType: "guide",
          id: "python-functions",
          name: "Functions and Modules",
          completed: false,
          description: "Master Python functions and module organization.",
          content: `# Functions and Modules\n\nLearn how to organize your Python code with functions and modules.\n\n## Functions\n\`\`\`python\ndef greet(name):\n    return f"Hello, {name}!"\n\nprint(greet("Robot"))\n\`\`\``,
        },
      ],
    },
    {
      id: "robotics-libraries",
      name: "Robotics Libraries",
      description:
        "Explore Python libraries specifically designed for robotics including sensor control, motor management, and computer vision.",
      resources: [
        {
          resourceType: "guide",
          id: "numpy-basics",
          name: "NumPy for Robotics",
          completed: false,
          description: "Learn NumPy for numerical computations in robotics.",
          content: `# NumPy for Robotics\n\nNumPy is essential for mathematical operations in robotics.\n\n## Arrays and Matrices\n\`\`\`python\nimport numpy as np\n\n# Position vector\nposition = np.array([1.0, 2.0, 3.0])\n\n# Rotation matrix\nrotation = np.eye(3)\n\`\`\``,
        },
        {
          resourceType: "guide",
          id: "opencv-intro",
          name: "Computer Vision with OpenCV",
          completed: false,
          description:
            "Introduction to computer vision for robotics applications.",
          content: `# Computer Vision with OpenCV\n\nOpenCV is a powerful library for computer vision in robotics.\n\n## Basic Image Processing\n\`\`\`python\nimport cv2\n\n# Load and display an image\nimg = cv2.imread('robot.jpg')\ncv2.imshow('Robot', img)\ncv2.waitKey(0)\n\`\`\``,
        },
      ],
    },
    {
      id: "robot-projects",
      name: "Robot Projects",
      description:
        "Build complete robotic systems by combining Python programming with hardware control and sensor integration.",
      resources: [
        {
          resourceType: "guide",
          id: "line-following-robot",
          name: "Line Following Robot",
          completed: false,
          description:
            "Build a robot that can follow a line using camera vision.",
          content: `# Line Following Robot\n\nCreate a robot that follows a black line on the ground.\n\n## Components Needed\n- Camera module\n- Motors\n- Microcontroller\n- Chassis\n\n## Algorithm\n1. Capture image\n2. Process to find line\n3. Calculate steering\n4. Control motors`,
        },
        {
          resourceType: "guide",
          id: "obstacle-avoidance",
          name: "Obstacle Avoidance System",
          completed: false,
          description:
            "Implement sensors and algorithms for autonomous navigation.",
          content: `# Obstacle Avoidance System\n\nBuild a robot that can navigate around obstacles.\n\n## Sensors\n- Ultrasonic sensors\n- LIDAR (optional)\n- Cameras\n\n## Navigation Algorithm\n1. Scan environment\n2. Identify obstacles\n3. Plan path\n4. Execute movement`,
        },
      ],
    },
  ],
};
