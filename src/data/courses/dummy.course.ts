import PythonTestMdx from "@/data/content/python-test.mdx";
import type { Course } from "../types";

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
					id: "python-syntax",
					name: "Python Syntax and Structure",
					completed: false,
					description: "Learn Python syntax with practical examples.",
					content: PythonTestMdx,
				},
			],
		},
	],
};
