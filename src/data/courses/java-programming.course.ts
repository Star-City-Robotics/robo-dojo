// Java Programming Course
//
// Goals are to teach object oriented programming skills that includes
// both coding and design and how to program using Java.
//

import OOProgrammingMdx from "@/data/content/object-oriented-programming.mdx";
import ClassVsObjectMdx from "../content/class-vs-object.mdx";
import PrimitiveTypesMdx from "../content/primitive-types.mdx";
import ComputerMemoryMdx from "../content/memory.mdx";
import CompilersMdx      from "../content/compilers-and-interpreters.mdx";
import OperatorsMdx      from "../content/java-operators.mdx";
import TerminologyMdx    from "../content/terms-and-definitions.mdx";
import PackageMdx        from "../content/java-package.mdx";


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
					id:            "compilers-and-interpreters",
					name:          "Compilers and Interpreters",
					description:
						"What is the purpose of a compiler and how does it differ from an interpreter.",
					content:       CompilersMdx,
					completed:     false,
					icon:          "brain",
					iconColor:     "gray",
				},   // end of Compilers and Interpreters module
				{
					resourceType:   "guide",
					id:             "computer-memory",
					name:           "Computer Memory",
					description:
						"Learn how computer memory is used by programs.",
					content:         ComputerMemoryMdx,
					completed:       false,
					icon:            "brain",
					iconColor:       "gray",
				},   // end of Computer Memory module.
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

		{
			id:      "java-programming-language",
			name:    "Learning Java Programming",
			description:
				"Learning Java as a programming language",
			resources:
			[
				{
					resourseType:  "guide",
					id:            "primitive types",
					name:          "Privative Data Types",
					description:
						"The basic types of data used in Java",
					content:        PrimitiveTypesMdx,
					completed:      false,
					icon:           "book",
					iconColor:      "orange",
				},   // end of Primative Types module
				{
					resourceType:   "guide",
					id:             "java-operators",
					name:           "Java Operators",
					description:    "Java Operators: what are they and how are they used.",
					content:        OperatorsMdx,
					completed:      false,
					icon:           "book",
					iconColor:      "orange",
				},   // end of Java Operators module
				{
					resourceType:   "guide",
					id:             "terms-and-definitions",
					name:           "Programming Terminology",
					description:    "A table of programming terminology",
					content:        TerminologyMdx,
					completed:      false,
					icon:           "brain",
					iconColor:      "gray",
				},
				{
					resourceType:   "guide",
					id:             "java-package",
					name:           "Java Package",
					description:    "A package is a namespace in Java",
					content:        PackageMdx,
					completed:      false,
					icon:           "book",
					iconColor:      "orange",
				},
			],
		},   // end of Java Programming Language

	],
};
