// Java Programming Course
//
// Goals are to teach object oriented programming skills that includes
// both coding and design and how to program using Java.
//

import OOProgrammingMdx from "@/data/content/object-oriented-programming.mdx";
import ClassVsObjectMdx from "../content/class-vs-object.mdx";
import CompilersMdx from "../content/compilers-and-interpreters.mdx";
import ClassesMdx from "../content/declare-class.mdx";
import DeclaringVariablesMdx from "../content/declaring-variables.mdx";
import OperatorsMdx from "../content/java-operators.mdx";
import PackageMdx from "../content/java-package.mdx";
import JavaReferencesMdx from "../content/java-references.mdx";
import ComputerMemoryMdx from "../content/memory.mdx";
import PrimitiveTypesMdx from "../content/primitive-types.mdx";
import TerminologyMdx from "../content/terms-and-definitions.mdx";
import VariableVsObjectMdx from "../content/variable-vs-object.mdx";

import type { Course } from "../types";

export const javaProgrammingCourse: Course = {
	id: "java-programming",
	name: "Java Programming",
	description:
		"Learn the fundamentals of Java programming. Master object-oriented design, programming, and syntax.",
	modules: [
		{
			id: "object-oriented-programming",
			name: "Object Oriented Programming",
			description: "Object Oriented Programming Module",
			resources: [
				{
					resourceType: "guide",
					id: "object-oriented-introduction",
					name: "Object Oriented Programming Introduction",
					description: "What does Object Oriented Programming means.",
					content: OOProgrammingMdx,
					icon: "book",
					iconColor: "purple",
					completed: false,
				}, // end of Object Oriented Programming module
				{
					resourceType: "guide",
					id: "compilers-and-interpreters",
					name: "Compilers and Interpreters",
					description:
						"What is the purpose of a compiler and how does it differ from an interpreter.",
					content: CompilersMdx,
					completed: false,
					icon: "brain",
					iconColor: "gray",
				}, // end of Compilers and Interpreters module
				{
					resourceType: "guide",
					id: "computer-memory",
					name: "Computer Memory",
					description: "Learn how computer memory is used by programs.",
					content: ComputerMemoryMdx,
					completed: false,
					icon: "brain",
					iconColor: "gray",
				}, // end of Computer Memory module.
				{
					resourceType: "guide",
					id: "class-vs-object",
					name: "Class vs Object",
					description:
						"What is the difference between a class and an object.  With discussion on compilers and memory usage.",
					content: ClassVsObjectMdx,
					icon: "book",
					iconColor: "red",
					completed: false,
				}, // end of Class vs Object module
			],
		}, // end of Object Oriented Programming Module

		{
			id: "java-programming-language",
			name: "Learning Java Programming",
			description: "Learning Java as a programming language",
			resources: [
				{
					resourseType: "guide",
					id: "primitive types",
					name: "Privative Data Types",
					description: "The basic types of data used in Java",
					content: PrimitiveTypesMdx,
					completed: false,
					icon: "book",
					iconColor: "orange",
				}, // end of Primative Types lesson
				{
					resourceType: "guide",
					id: "java-operators",
					name: "Java Operators",
					description: "Java Operators: what are they and how are they used.",
					content: OperatorsMdx,
					completed: false,
					icon: "book",
					iconColor: "orange",
				}, // end of Java Operators lesson
				{
					resourceType: "guide",
					id: "java-package",
					name: "Java Package",
					description: "A package is a namespace in Java",
					content: PackageMdx,
					completed: false,
					icon: "book",
					iconColor: "orange",
				}, // end of Java Package lesson
				{
					resourceType: "guide",
					id: "variable-vs-object",
					name: "Variable vs Object",
					description:
						"Describes the difference between variables and objects in Java.",
					content: VariableVsObjectMdx,
					completed: false,
					icon: "book",
					iconColor: "orange",
				}, // end of Variable vs Object lesson
				{
					resourceType: "guide",
					id: "declaring classes",
					name: "Classes",
					description: "Covers declaring classes and what goes inside them.",
					content: ClassesMdx,
					completed: false,
					icon: "book",
					iconColor: "purple",
				}, // end of Declaring Classes lesson
				{
					resourceType: "guide",
					id: "declaring-variables",
					name: "Declaring Variables",
					description: "How to declare variables in Java.",
					content: DeclaringVariablesMdx,
					completed: false,
					icon: "book",
					iconColor: "purple",
				}, // end of Declaring Variables lesson
				{
					resourceType: "guide",
					id: "terms-and-definitions",
					name: "Appendix A: Programming Terminology",
					description: "A table of programming terminology",
					content: TerminologyMdx,
					completed: false,
					icon: "brain",
					iconColor: "purple",
				}, // end of Terms and Definition Appendix
				{
					resourceType: "guide",
					id: "java-references",
					name: "Appendix B: Java References",
					description: "A list of references for Java programming.",
					content: JavaReferencesMdx,
					completed: false,
					icon: "brain",
					iconColor: "purple",
				}, // end of Java References lesson
			],
		}, // end of Java Programming Language
	],
};
