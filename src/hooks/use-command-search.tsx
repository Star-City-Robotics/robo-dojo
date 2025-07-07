import { useEffect, useState, useMemo, useCallback } from "react";
import { useNavigate } from "@tanstack/react-router";
import { courses } from "@/data/constants";

export interface SearchResult {
  id: string;
  title: string;
  description: string;
  course: string;
  module: string;
  type: "resource" | "module" | "course";
  url: string;
}

export const useCommandSearch = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  // Memoize the search index so it doesn't rebuild on every render
  const searchIndex = useMemo((): SearchResult[] => {
    const results: SearchResult[] = [];

    courses.forEach((course) => {
      // Add course itself
      results.push({
        id: `course-${course.id}`,
        title: course.name,
        description: `Course with ${course.modules.length} modules`,
        course: course.name,
        module: "",
        type: "course",
        url: `/dashboard/courses/${course.id}`,
      });

      course.modules.forEach((module) => {
        // Add module
        results.push({
          id: `module-${course.id}-${module.id}`,
          title: module.name,
          description: `Module with ${module.resources.length} resources`,
          course: course.name,
          module: module.name,
          type: "module",
          url: `/dashboard/courses/${course.id}/module/${module.id}`,
        });

        // Add resources
        module.resources.forEach((resource) => {
          results.push({
            id: `resource-${course.id}-${module.id}-${resource.id}`,
            title: resource.name,
            description: resource.description,
            course: course.name,
            module: module.name,
            type: "resource",
            url: `/dashboard/courses/${course.id}/module/${module.id}/resources/${resource.id}`,
          });
        });
      });
    });

    return results;
  }, []); // Empty dependency array since courses is static

  // Memoize the search function
  const search = useCallback(
    (query: string): SearchResult[] => {
      if (!query.trim()) return [];

      const lowercaseQuery = query.toLowerCase();

      return searchIndex
        .filter((item) => {
          return (
            item.title.toLowerCase().includes(lowercaseQuery) ||
            item.description.toLowerCase().includes(lowercaseQuery) ||
            item.course.toLowerCase().includes(lowercaseQuery) ||
            item.module.toLowerCase().includes(lowercaseQuery)
          );
        })
        .slice(0, 10); // Limit to 10 results
    },
    [searchIndex]
  );

  // Handle navigation
  const navigateToResult = useCallback(
    (result: SearchResult) => {
      navigate({ to: result.url });
      setOpen(false);
    },
    [navigate]
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
