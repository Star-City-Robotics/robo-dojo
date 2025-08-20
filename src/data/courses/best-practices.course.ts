// Best Practices
//
// A Tutorial on best programming practices that many be programming
// language independent.
//

import DocumentingMdx    from "../content/documenting-code.mdx";
import DoxygenMdx        from "../content/doxygen.mdx";

import type { Course } from "../types";

export const bestPracticesCourse: Course = {
	id:   "best-practices",
	name: "Best Practices  ",
	description:
		"Lessons on best practices in programming.",
	modules: [
	    {
			id:         "best-practices",
			name:       "Best Programming Practices",
			description:
				"Best Programming Practices",
			resources:
			[
				{
					resourceType:  "guide",
					id:            "documenting-code",
					name:          "Documenting Code",
					description:   "Why source code should be documented.",
					content:       DocumentingMdx,
					completed:     false,
					icon:          "book",
					iconColor:     "red",					
				},
				{
					resourceType:  "guide",
					id:            "doxygen",
					name:          "Doxygen: A Documentation Tool",
					description:   "How to use Doxygen and install it.",
					content:       DoxygenMdx,
					completed:     false,
					icon:          "book",
					iconColor:     "purple",
				},   // end of Doxygen Module
			],
		},
			
	],
};
