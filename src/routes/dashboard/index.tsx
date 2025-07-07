import { createFileRoute } from "@tanstack/react-router";
import { courses } from "@/data/constants";
import { Link } from "@tanstack/react-router";
import TestMDX from "../../content/test.mdx";

export const Route = createFileRoute("/dashboard/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex flex-col justify-center items-center bg-[#1e1e1e] p-8 min-h-screen">
      <h1 className="mb-6 font-bold text-[#cccccc] text-2xl">
        Select a Course
      </h1>
      <div className="flex flex-col gap-4 w-full max-w-md">
        {courses.map((course) => (
          <Link
            key={course.name}
            to="/dashboard/courses/$courseName"
            params={{ courseName: course.name }}
            className="bg-[#252526] hover:bg-[#2a2d2e] px-6 py-3 border border-[#3e3e42] rounded font-medium text-[#cccccc] text-lg text-center transition-colors"
          >
            {course.name}
          </Link>
        ))}
        <TestMDX />
      </div>
    </div>
  );
}
