import {
  createFileRoute,
  Link,
  Outlet,
  useLoaderData,
  useNavigate,
  useParams,
} from "@tanstack/react-router";
import {
  Badge,
  BookOpen,
  Bug,
  CheckCircle,
  ChevronDown,
  ChevronRight,
  Clock,
  Code,
  Cpu,
  FileText,
  Terminal,
  Video,
  Zap,
} from "lucide-react";
import { type ReactNode, useState, useEffect } from "react";
import { Collapsible, CollapsibleContent } from "@/components/ui/collapsible";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { courses, type Module } from "@/data/constants";
import { BreadcrumbNav } from "@/components/breadcrumb-nav";
import { useActiveEntities } from "@/hooks/use-active-entities";

export const Route = createFileRoute("/dashboard/courses/$courseName")({
  component: RouteComponent,
  loader: () => ({ courses }),
  params: {
    parse: (params) => ({
      ...params,
      courseName: decodeURIComponent(params.courseName),
    }),
    stringify: (params) => ({
      ...params,
      courseName: encodeURIComponent(params.courseName),
    }),
  },
});

function RouteComponent() {
  const { activeCourse, activeModule, activeResource } = useActiveEntities();

  // Initialize expandedModules with the active module if we're viewing a resource
  const [expandedModules, setExpandedModules] = useState<string[]>(() => {
    return activeResource && activeModule ? [activeModule.id] : [];
  });

  const params = useParams({
    from: "/dashboard/courses/$courseName",
    shouldThrow: false,
  });

  const navigate = useNavigate();
  const { courses } = useLoaderData({ from: "/dashboard/courses/$courseName" });

  // Auto-expand the module that contains the current resource (only if viewing a resource)
  useEffect(() => {
    if (
      activeResource &&
      activeModule &&
      !expandedModules.includes(activeModule.id)
    ) {
      setExpandedModules((prev) => {
        if (prev.includes(activeModule.id)) return prev;
        return [...prev, activeModule.id];
      });
    }
  }, [activeResource?.id, activeModule?.id]); // Only expand when viewing a resource

  const toggleModule = (moduleId: string) =>
    setExpandedModules((prev) =>
      prev.includes(moduleId)
        ? prev.filter((id) => id !== moduleId)
        : [...prev, moduleId]
    );

  const getResourceIcon = (type: string): ReactNode => {
    switch (type) {
      case "video":
        return <Video className="w-4 h-4 text-red-400" />;
      case "document":
        return <FileText className="w-4 h-4 text-blue-400" />;
      case "code":
        return <Code className="w-4 h-4 text-green-400" />;
      case "assignment":
        return <Zap className="w-4 h-4 text-yellow-400" />;
      case "playground":
        return <Terminal className="w-4 h-4 text-purple-400" />;
      case "guide":
        return <BookOpen className="w-4 h-4 text-orange-400" />;
      default:
        return <Bug className="w-4 h-4 text-purple-400" />;
    }
  };

  return (
    <div
      className="flex bg-[#1e1e1e] h-screen"
      style={{ fontFamily: '"Courier New", "Monaco", "Menlo", monospace' }}
    >
      {/* VSCode-style Sidebar */}
      <div className="flex flex-col bg-[#252526] border-[#3e3e42] border-r w-72">
        {/* SCAROB Branding */}
        <div className="p-4 border-[#3e3e42] border-b">
          <div className="flex items-center space-x-2">
            <div className="relative flex justify-center items-center bg-[#007acc] rounded-sm w-8 h-8">
              <Bug className="w-5 h-5 text-white" />
              <div className="-top-0.5 -right-0.5 absolute bg-[#4ec9b0] rounded-full w-1.5 h-1.5"></div>
            </div>
            <div>
              <h1 className="font-bold text-[#cccccc] text-xl tracking-wider">
                SCAROB
              </h1>
              <p className="-mt-0.5 text-[#6a9955] text-xs">
                Star City Robotic Foundation
              </p>
            </div>
          </div>
        </div>

        {/* Course Switcher */}
        <div className="p-3 border-[#3e3e42] border-b">
          <Select
            value={activeCourse?.name}
            onValueChange={(newCourseName) => {
              navigate({
                to: "/dashboard/courses/$courseName",
                params: {
                  courseName: newCourseName,
                },
              });
            }}
          >
            <SelectTrigger className="bg-[#3c3c3c] hover:bg-[#2a2d2e] border-[#464647] w-full h-8 text-[#cccccc] text-sm">
              <SelectValue placeholder="Select Course" />
            </SelectTrigger>
            <SelectContent className="bg-[#3c3c3c] border-[#464647]">
              {courses.map((course) => (
                <SelectItem
                  key={course.name}
                  value={course.name}
                  className="hover:bg-[#2a2d2e] text-[#cccccc] text-sm"
                >
                  {course.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Module Explorer */}
        <div className="flex-1 p-3 overflow-y-auto">
          <div className="space-y-1">
            {activeCourse?.modules.map((module) => (
              <Collapsible
                key={module.id}
                open={expandedModules.includes(module.id)}
              >
                <div className="flex items-center">
                  {/* Module row: now a Link for navigation */}
                  <Link
                    to="/dashboard/courses/$courseName/module/$moduleId"
                    params={{
                      courseName: activeCourse.name,
                      moduleId: module.id,
                    }}
                    className={`group flex items-center w-full cursor-pointer py-2 px-2 rounded transition-colors ${
                      activeModule?.id === module.id
                        ? "bg-[#37373d] border-l-2 border-[#007acc] pl-2"
                        : "hover:bg-[#2a2d2e]"
                    }`}
                  >
                    <Cpu className="mr-2 w-3 h-3 text-[#569cd6]" />
                    <span
                      className={`flex-1 font-medium text-sm text-left group-hover:underline transition-colors ${
                        activeModule?.id === module.id
                          ? "text-[#4ec9b0]"
                          : "text-[#cccccc] group-hover:text-[#b5cea8]"
                      }`}
                    >
                      {module.name}
                    </span>
                  </Link>
                  {/* Chevron: only toggles collapse, now on the right */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleModule(module.id);
                    }}
                    className="bg-transparent hover:bg-[#232325] ml-2 p-1 rounded focus:outline-none focus:ring-[#007acc] focus:ring-2 transition-colors"
                    aria-label={
                      expandedModules.includes(module.id)
                        ? "Collapse"
                        : "Expand"
                    }
                  >
                    {expandedModules.includes(module.id) ? (
                      <ChevronDown className="w-3 h-3 text-[#cccccc]" />
                    ) : (
                      <ChevronRight className="w-3 h-3 text-[#cccccc]" />
                    )}
                  </button>
                </div>
                <CollapsibleContent className="space-y-1 mt-1 ml-5">
                  {module.resources.map((resource) => (
                    <Link
                      key={resource.id}
                      to="/dashboard/courses/$courseName/module/$moduleId/resources/$resourceId"
                      params={{
                        courseName: activeCourse.name,
                        moduleId: module.id,
                        resourceId: resource.id,
                      }}
                      className={`flex items-center space-x-2 py-2 px-2 rounded w-full text-left transition-colors ${
                        activeResource?.id === resource.id
                          ? "bg-[#2a2d2e] border-l-2 border-[#4ec9b0] pl-2"
                          : "hover:bg-[#2a2d2e]"
                      }`}
                    >
                      {getResourceIcon("guide")}
                      <span className="flex-1 text-[#cccccc] text-sm">
                        {resource.name}
                      </span>
                      <div className="flex items-center space-x-1">
                        {resource.completed && (
                          <CheckCircle className="w-3 h-3 text-[#4ec9b0]" />
                        )}
                        {resource.resourceType === "guide" && (
                          <Badge className="bg-[#3e3e42] px-1.5 py-0.5 text-[#ce9178] text-xs">
                            MD
                          </Badge>
                        )}
                      </div>
                    </Link>
                  ))}
                </CollapsibleContent>
              </Collapsible>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col flex-1">
        {/* Breadcrumb Header */}
        <div className="bg-[#2d2d30] p-4 border-[#3e3e42] border-b">
          {activeCourse && (
            <BreadcrumbNav
              items={[
                {
                  id: activeCourse.name,
                  name: activeCourse.name,
                  type: "course" as const,
                  link:
                    !activeModule && !activeResource
                      ? undefined
                      : `/dashboard/courses/${encodeURIComponent(activeCourse.name)}`,
                },
                ...(activeModule
                  ? [
                      {
                        id: activeModule.id,
                        name: activeModule.name,
                        type: "module" as const,
                        link: !activeResource
                          ? undefined
                          : `/dashboard/courses/${encodeURIComponent(activeCourse.name)}/module/${encodeURIComponent(activeModule.id)}`,
                      },
                    ]
                  : []),
                ...(activeResource
                  ? [
                      {
                        id: activeResource.id,
                        name: activeResource.name,
                        type: "resource" as const,
                        link: undefined, // last item, no link
                      },
                    ]
                  : []),
              ]}
            />
          )}
        </div>

        {/* Content Area */}
        <div className="flex-1 bg-[#1e1e1e] p-4 overflow-y-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
