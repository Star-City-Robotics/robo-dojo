import { useNavigate } from "@tanstack/react-router";
import { useCallback, useEffect, useState } from "react";
import { courses } from "@/data/constants";

export interface SearchResult {
	id: string;
	title: string;
	description: string;
	course: string;
	module: string;
	type: "resource" | "module" | "course";
	url: string;
	score: number;
}

// Simple fuzzy search function
const fuzzyMatch = (
	text: string,
	query: string,
): { matches: boolean; score: number } => {
	const textLower = text.toLowerCase();
	const queryLower = query.toLowerCase();

	// Exact match gets highest score
	if (textLower.includes(queryLower)) {
		return { matches: true, score: 100 };
	}

	// Fuzzy matching: check if all characters in query appear in order in text
	let textIndex = 0;
	let queryIndex = 0;
	let score = 0;

	while (textIndex < textLower.length && queryIndex < queryLower.length) {
		if (textLower[textIndex] === queryLower[queryIndex]) {
			score += 10;
			queryIndex++;
		}
		textIndex++;
	}

	// If we matched all query characters, it's a fuzzy match
	if (queryIndex === queryLower.length) {
		// Bonus points for shorter text (more relevant)
		const lengthBonus = Math.max(0, 50 - text.length);
		return { matches: true, score: score + lengthBonus };
	}

	return { matches: false, score: 0 };
};

// Calculate the best match score for a search result
const calculateScore = (result: SearchResult, query: string): number => {
	const titleMatch = fuzzyMatch(result.title, query);
	const descriptionMatch = fuzzyMatch(result.description, query);
	const courseMatch = fuzzyMatch(result.course, query);
	const moduleMatch = fuzzyMatch(result.module, query);

	// Return the highest score from any field
	return Math.max(
		titleMatch.score * 2, // Title matches are worth more
		descriptionMatch.score,
		courseMatch.score,
		moduleMatch.score,
	);
};

export const useCommandSearch = () => {
	const [open, setOpen] = useState(false);
	const navigate = useNavigate();

	// Search function that builds and searches the index on every call
	const search = (query: string): SearchResult[] => {
		if (!query.trim()) return [];

		const results: SearchResult[] = [];

		courses.forEach((course) => {
			// Add course itself
			const courseResult = {
				id: `course-${course.id}`,
				title: course.name,
				description: `Course with ${course.modules.length} modules`,
				course: course.name,
				module: "",
				type: "course" as const,
				url: `/dashboard/courses/${course.id}`,
				score: 0,
			};

			// Check if course matches with fuzzy search
			const courseScore = calculateScore(courseResult, query);
			if (courseScore > 0) {
				courseResult.score = courseScore;
				results.push(courseResult);
			}

			course.modules.forEach((module) => {
				// Add module
				const moduleResult = {
					id: `module-${course.id}-${module.id}`,
					title: module.name,
					description: `Module with ${module.resources.length} resources`,
					course: course.name,
					module: module.name,
					type: "module" as const,
					url: `/dashboard/courses/${course.id}/module/${module.id}`,
					score: 0,
				};

				// Check if module matches with fuzzy search
				const moduleScore = calculateScore(moduleResult, query);
				if (moduleScore > 0) {
					moduleResult.score = moduleScore;
					results.push(moduleResult);
				}

				// Add resources
				module.resources.forEach((resource) => {
					const resourceResult = {
						id: `resource-${course.id}-${module.id}-${resource.id}`,
						title: resource.name,
						description: resource.description,
						course: course.name,
						module: module.name,
						type: "resource" as const,
						url: `/dashboard/courses/${course.id}/module/${module.id}/resources/${resource.id}`,
						score: 0,
					};

					// Check if resource matches with fuzzy search
					const resourceScore = calculateScore(resourceResult, query);
					if (resourceScore > 0) {
						resourceResult.score = resourceScore;
						results.push(resourceResult);
					}
				});
			});
		});

		// Sort by score (highest first) and limit to 10 results
		return results.sort((a, b) => b.score - a.score).slice(0, 10);
	};

	// Handle navigation
	const navigateToResult = useCallback(
		(result: SearchResult) => {
			navigate({ to: result.url });
			setOpen(false);
		},
		[navigate],
	);

	// Keyboard shortcut handler
	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
				e.preventDefault();
				setOpen((open) => !open);
			}
		};

		document.addEventListener("keydown", handleKeyDown);
		return () => document.removeEventListener("keydown", handleKeyDown);
	}, []);

	return {
		open,
		setOpen,
		search,
		navigateToResult,
	};
};
