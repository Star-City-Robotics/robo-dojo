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
import { courses, RESOURCE_ICONS } from "@/data/constants";
import { BreadcrumbNav } from "@/components/breadcrumb-nav";
import { useActiveEntities } from "@/hooks/use-active-entities";
import { SearchIcon } from "@/components/command-search";
import { RobEBlinkButton } from "@/components/rob-e-blink-button";
import type { Resource } from "@/data/types";

export const Route = createFileRoute("/dashboard/courses/$courseId")({
  component: RouteComponent,
  loader: () => ({ courses }),
});

function RouteComponent() {
  const { activeCourse, activeModule, activeResource } = useActiveEntities();

  // Initialize expandedModules with the active module if we're viewing a resource
  const [expandedModules, setExpandedModules] = useState<string[]>(() => {
    return activeResource && activeModule ? [activeModule.id] : [];
  });

  const navigate = useNavigate();
  const { courses } = useLoaderData({ from: "/dashboard/courses/$courseId" });

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

  const getResourceIcon = (resource: Resource): ReactNode => {
    // If resource has a custom icon, use it
    if (resource.icon && RESOURCE_ICONS[resource.icon]) {
      const IconComponent = RESOURCE_ICONS[resource.icon];
      return <IconComponent className="w-4 h-4 text-[#4ec9b0]" />;
    }

    // Fallback to default icons based on resource type
    switch (resource.resourceType) {
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
        {/* RoboDOJO Branding with ROB-E */}
        <div className="p-4 border-[#3e3e42] border-b">
          <div className="flex items-center space-x-3">
            <RobEBlinkButton
              className="flex-shrink-0 w-14 h-14"
              onClick={() => navigate({ to: "/dashboard" })}
            />
            <div>
              <h1 className="font-bold text-[#cccccc] text-xl tracking-wider">
                RoboDOJO
              </h1>
            </div>
          </div>
        </div>

        {/* Course Switcher */}
        <div className="p-3 border-[#3e3e42] border-b">
          <Select
            value={activeCourse?.id}
            onValueChange={(newCourseId) => {
              navigate({
                to: "/dashboard/courses/$courseId",
                params: {
                  courseId: newCourseId,
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
                  key={course.id}
                  value={course.id}
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
                {/* Module row with integrated chevron */}
                <Link
                  to="/dashboard/courses/$courseId/module/$moduleId"
                  params={{
                    courseId: activeCourse.id,
                    moduleId: module.id,
                  }}
                  className={`group flex items-center w-full cursor-pointer py-2 px-2 rounded transition-colors ${
                    activeModule?.id === module.id
                      ? "bg-[#37373d] border-l-2 border-[#007acc] pl-2"
                      : "hover:bg-[#2a2d2e]"
                  }`}
                  onClick={(e) => {
                    // Check if the click was on the chevron area (right side)
                    const rect = e.currentTarget.getBoundingClientRect();
                    const clickX = e.clientX - rect.left;
                    const isChevronClick = clickX > rect.width - 40; // Last 40px is chevron area

                    if (isChevronClick) {
                      e.preventDefault();
                      toggleModule(module.id);
                    }
                  }}
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
                  {/* Chevron inside the module element */}
                  <div className="hover:bg-[#232325] ml-2 p-1 rounded transition-colors">
                    {expandedModules.includes(module.id) ? (
                      <ChevronDown className="w-3 h-3 text-[#cccccc]" />
                    ) : (
                      <ChevronRight className="w-3 h-3 text-[#cccccc]" />
                    )}
                  </div>
                </Link>
                <CollapsibleContent className="space-y-1 mt-1 ml-5">
                  {module.resources.map((resource) => (
                    <Link
                      key={resource.id}
                      to="/dashboard/courses/$courseId/module/$moduleId/resources/$resourceId"
                      params={{
                        courseId: activeCourse.id,
                        moduleId: module.id,
                        resourceId: resource.id,
                      }}
                      className={`flex items-center space-x-2 py-2 px-2 rounded w-full text-left transition-colors ${
                        activeResource?.id === resource.id
                          ? "bg-[#2a2d2e] border-l-2 border-[#4ec9b0] pl-2"
                          : "hover:bg-[#2a2d2e]"
                      }`}
                    >
                      {getResourceIcon(resource)}
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
          <div className="flex justify-between items-center">
            <div className="flex-1">
              {activeCourse && (
                <BreadcrumbNav
                  items={[
                    {
                      id: activeCourse.id,
                      name: activeCourse.name,
                      type: "course" as const,
                      link:
                        !activeModule && !activeResource
                          ? undefined
                          : `/dashboard/courses/${activeCourse.id}`,
                    },
                    ...(activeModule
                      ? [
                          {
                            id: activeModule.id,
                            name: activeModule.name,
                            type: "module" as const,
                            link: !activeResource
                              ? undefined
                              : `/dashboard/courses/${activeCourse.id}/module/${activeModule.id}`,
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
            <SearchIcon className="ml-4" />
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 bg-[#1e1e1e] p-4 overflow-y-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
