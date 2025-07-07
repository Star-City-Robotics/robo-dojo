import { createFileRoute } from "@tanstack/react-router";
import { courses } from "@/data/constants";
import { Link } from "@tanstack/react-router";
import { Search } from "lucide-react";
import { useCommandSearch } from "@/hooks/use-command-search";

export const Route = createFileRoute("/dashboard/")({
  component: RouteComponent,
});

function RouteComponent() {
  const { setOpen } = useCommandSearch();

  // Safe check for browser environment
  const isMac =
    typeof window !== "undefined" && navigator.platform.includes("Mac");

  return (
    <div className="flex flex-col justify-center items-center bg-[#1e1e1e] p-8 min-h-screen">
      <h1 className="mb-6 font-bold text-[#cccccc] text-2xl">
        Select a Course
      </h1>

      {/* Search hint - now clickable */}
      <button
        onClick={() => setOpen(true)}
        className="flex items-center gap-2 bg-[#252526] hover:bg-[#2a2d2e] mb-6 px-4 py-2 border border-[#3e3e42] rounded-lg transition-colors cursor-pointer"
      >
        <Search className="w-4 h-4 text-[#569cd6]" />
        <span className="text-[#cccccc] text-sm">
          Press{" "}
          <kbd className="bg-[#3e3e42] px-2 py-1 rounded font-mono text-xs">
            {isMac ? "⌘" : "Ctrl"} + K
          </kbd>{" "}
          to search all content
        </span>
      </button>

      <div className="flex flex-col gap-4 w-full max-w-md">
        {courses.map((course) => (
          <Link
            key={course.name}
            to="/dashboard/courses/$courseId"
            params={{ courseId: course.id }}
            className="bg-[#252526] hover:bg-[#2a2d2e] px-6 py-3 border border-[#3e3e42] rounded font-medium text-[#cccccc] text-lg text-center transition-colors"
          >
            {course.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
