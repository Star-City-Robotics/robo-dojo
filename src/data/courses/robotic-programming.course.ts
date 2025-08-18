import JavaTestMdx from "@/data/content/java-test.mdx";
import TypeScriptTestMdx from "@/data/content/typescript-test.mdx";
import VideoTestMdx from "@/data/content/video-test.mdx";
import type { Course } from "../types";

export const roboticProgrammingCourse: Course = {
	id: "robotic-programming",
	name: "Robotic Programming",
	description:
		"Learn the fundamentals of programming an FRC Robot in Java.  This course will include working with XRP and WPILib.",
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
