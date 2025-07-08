import { createFileRoute } from "@tanstack/react-router";
import { courses } from "@/data/constants";
import { Link } from "@tanstack/react-router";
import {
  Search,
  BookOpen,
  Clock,
  Users,
  Trophy,
  ChevronRight,
} from "lucide-react";
import { useCommandSearch } from "@/hooks/use-command-search";
import { RobEBlinkButton } from "@/components/rob-e-blink-button";

export const Route = createFileRoute("/dashboard/")({
  component: RouteComponent,
});

function RouteComponent() {
  const { setOpen } = useCommandSearch();

  // Safe check for browser environment
  const isMac =
    typeof window !== "undefined" && navigator.platform.includes("Mac");

  // Calculate totals across all courses
  const totalModules = courses.reduce(
    (sum, course) => sum + course.modules.length,
    0
  );
  const totalResources = courses.reduce(
    (sum, course) =>
      sum +
      course.modules.reduce(
        (moduleSum, module) => moduleSum + module.resources.length,
        0
      ),
    0
  );

  return (
    <div className="bg-[#1e1e1e] p-8 min-h-screen">
      <div className="mx-auto max-w-6xl">
        {/* Header Section */}
        <div className="mb-12 text-center">
          <div className="flex justify-center mb-6">
            <RobEBlinkButton className="w-32 md:w-40 h-32 md:h-40" />
          </div>

          <h1 className="mb-4 font-bold text-[#cccccc] text-4xl md:text-5xl">
            Welcome to <span className="text-[#4ec9b0]">RoboDOJO</span>
          </h1>

          <p className="opacity-90 mx-auto mb-8 max-w-2xl text-[#cccccc] text-lg md:text-xl">
            Master the Art of Robotics Programming through interactive courses,
            hands-on projects, and cutting-edge curriculum designed for the
            future.
          </p>

          {/* Stats Overview */}
          <div className="gap-6 grid grid-cols-1 md:grid-cols-3 mb-8">
            <div className="bg-[#252526] p-6 border border-[#3e3e42] rounded-lg">
              <div className="flex justify-center items-center mb-2">
                <BookOpen className="w-8 h-8 text-[#569cd6]" />
              </div>
              <div className="font-bold text-[#cccccc] text-2xl">
                {courses.length}
              </div>
              <div className="opacity-75 text-[#cccccc]">Active Courses</div>
            </div>

            <div className="bg-[#252526] p-6 border border-[#3e3e42] rounded-lg">
              <div className="flex justify-center items-center mb-2">
                <Clock className="w-8 h-8 text-[#dcdcaa]" />
              </div>
              <div className="font-bold text-[#cccccc] text-2xl">
                {totalModules}
              </div>
              <div className="opacity-75 text-[#cccccc]">Learning Modules</div>
            </div>

            <div className="bg-[#252526] p-6 border border-[#3e3e42] rounded-lg">
              <div className="flex justify-center items-center mb-2">
                <Trophy className="w-8 h-8 text-[#ce9178]" />
              </div>
              <div className="font-bold text-[#cccccc] text-2xl">
                {totalResources}
              </div>
              <div className="opacity-75 text-[#cccccc]">
                Resources Available
              </div>
            </div>
          </div>

          {/* Search Section */}
          <button
            onClick={() => setOpen(true)}
            className="group inline-flex items-center gap-3 bg-[#252526] hover:bg-[#2a2d2e] px-6 py-3 border border-[#3e3e42] hover:border-[#569cd6] rounded-lg transition-all duration-200"
          >
            <Search className="w-5 h-5 text-[#569cd6] group-hover:scale-110 transition-transform" />
            <span className="text-[#cccccc] text-base">
              Press{" "}
              <kbd className="bg-[#3e3e42] mx-1 px-2 py-1 rounded font-mono text-sm">
                {isMac ? "⌘" : "Ctrl"} + K
              </kbd>{" "}
              to search all content
            </span>
          </button>
        </div>

        {/* Courses Grid */}
        <div className="mb-8">
          <h2 className="flex items-center gap-2 mb-6 font-bold text-[#cccccc] text-2xl">
            <BookOpen className="w-6 h-6 text-[#4ec9b0]" />
            Choose Your Path
          </h2>

          <div className="gap-6 grid grid-cols-1 lg:grid-cols-2">
            {courses.map((course) => {
              const moduleCount = course.modules.length;
              const resourceCount = course.modules.reduce(
                (sum, module) => sum + module.resources.length,
                0
              );
              const completedResources = course.modules.reduce(
                (sum, module) =>
                  sum +
                  module.resources.filter((resource) => resource.completed)
                    .length,
                0
              );
              const progressPercentage =
                resourceCount > 0
                  ? Math.round((completedResources / resourceCount) * 100)
                  : 0;

              return (
                <Link
                  key={course.name}
                  to="/dashboard/courses/$courseId"
                  params={{ courseId: course.id }}
                  className="group bg-[#252526] hover:bg-[#2a2d2e] hover:shadow-[#4ec9b0]/10 hover:shadow-lg p-6 border border-[#3e3e42] hover:border-[#4ec9b0] rounded-lg transition-all duration-200"
                >
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="font-bold text-[#cccccc] group-hover:text-[#4ec9b0] text-xl transition-colors">
                      {course.name}
                    </h3>
                    <ChevronRight className="w-5 h-5 text-[#cccccc] group-hover:text-[#4ec9b0] transition-all group-hover:translate-x-1" />
                  </div>

                  <p className="opacity-80 mb-4 text-[#cccccc] line-clamp-2">
                    {course.description}
                  </p>

                  {/* Course Stats */}
                  <div className="flex items-center gap-4 mb-4 text-sm">
                    <div className="flex items-center gap-1 text-[#569cd6]">
                      <BookOpen className="w-4 h-4" />
                      <span>{moduleCount} modules</span>
                    </div>
                    <div className="flex items-center gap-1 text-[#dcdcaa]">
                      <Clock className="w-4 h-4" />
                      <span>{resourceCount} resources</span>
                    </div>
                    <div className="flex items-center gap-1 text-[#ce9178]">
                      <Users className="w-4 h-4" />
                      <span>Beginner-Friendly</span>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="opacity-75 text-[#cccccc]">
                        Progress
                      </span>
                      <span className="font-medium text-[#4ec9b0]">
                        {progressPercentage}%
                      </span>
                    </div>
                    <div className="bg-[#3e3e42] rounded-full w-full h-2">
                      <div
                        className="bg-gradient-to-r from-[#4ec9b0] to-[#569cd6] rounded-full h-2 transition-all duration-500"
                        style={{ width: `${progressPercentage}%` }}
                      />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-[#252526] p-8 border border-[#3e3e42] rounded-lg text-center">
          <h3 className="mb-2 font-bold text-[#cccccc] text-xl">
            Ready to Start Your Journey?
          </h3>
          <p className="opacity-80 mb-4 text-[#cccccc]">
            Choose a course above and begin mastering robotics programming
            today!
          </p>
          <div className="flex justify-center items-center gap-2 text-[#4ec9b0]">
            <Trophy className="w-5 h-5" />
            <span className="font-medium text-sm">Build • Learn • Master</span>
          </div>
        </div>
      </div>
    </div>
  );
}
