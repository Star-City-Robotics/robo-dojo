import VideoTestMdx from "@/data/content/video-test.mdx";
import JavaTestMdx from "@/data/content/java-test.mdx";
import TypeScriptTestMdx from "@/data/content/typescript-test.mdx";

import OOProgrammingMdx from "@/data/content/object-oriented-programming.mdx";
import ClassVsObjectMdx from "../content/class-vs-object.mdx";


import type { Course } from "../types";

export const javaProgrammingCourse: Course = {
	id: "java-programming",
	name: "Java Programming",
	description:
		"Learn the fundamentals of Java programming. Master object-oriented design, programming, and syntax.",
	modules: [
	    {
			id:         "object-oriented-programming",
			name:       "Object Oriented Programming",
			description:
				"Object Oriented Programming Module",
			resources:
			[
				{
					resourceType:  "guide",
					id: "object-oriented-introduction",
					name: "Object Oriented Programming Introduction",
					description:
						"What does Object Oriented Programming means.",
					content: OOProgrammingMdx,
					icon:    "book",
					iconColor: "purple",
					completed: false,
				},   // end of Object Oriented Programming module
				{
					resourceType:  "guide",
					id:    "class-vs-object",
					name:  "Class vs Object",
					description:
						"What is the difference between a class and an object.  With discussion on compilers and memory usage.",
					content:    ClassVsObjectMdx,
					icon:       "book",
					iconColor:  "red",
					completed:  false,
				},   // end of Class vs Object module
			],
		},   // end of Object Oriented Programming Module

	],
};
