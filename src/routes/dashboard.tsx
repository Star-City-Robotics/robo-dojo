import { createFileRoute, Outlet } from "@tanstack/react-router";
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
import { type ReactNode } from "react";
import { BreadcrumbNav } from "@/components/breadcrumb-nav";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { javaProgrammingCourse } from "@/data/constants";

export const Route = createFileRoute("/dashboard")({
  component: Dashboard,
});

const courses = [javaProgrammingCourse];

function Dashboard() {
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

  const selectedCourse = courses.find(
    (course) => course.name === "Java Programming"
  );

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
          // value={selectedCourse} onValueChange={setSelectedCourse}
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
            {selectedCourse?.modules.map((module) => (
              <Collapsible
                key={module.id}
                // open={expandedModules.includes(module.id)}
                // onOpenChange={() => toggleModule(module.id)}
              >
                <CollapsibleTrigger className="flex items-center space-x-2 bg-[#2d2d30] hover:bg-[#37373d] p-2 border border-[#3e3e42] rounded-sm w-full transition-colors">
                  {/* {expandedModules.includes(module.id) ? (
                    <ChevronDown className="w-3 h-3 text-[#cccccc]" />
                  ) : (
                    <ChevronRight className="w-3 h-3 text-[#cccccc]" />
                  )} */}
                  <Cpu className="w-3 h-3 text-[#569cd6]" />
                  <span className="flex-1 font-medium text-[#cccccc] text-sm text-left">
                    {module.name}
                  </span>
                </CollapsibleTrigger>
                <CollapsibleContent className="space-y-0.5 mt-1 ml-5">
                  {module.resources.map((resource) => (
                    <button
                      key={resource.id}
                      // onClick={() => handleResourceClick(resource, module)}
                      className={`flex items-center space-x-2 w-full p-1.5 rounded-sm text-left transition-colors ${
                        ""
                        // selectedResource?.id === resource.id
                        //   ? "bg-[#37373d] border border-[#007acc]"
                        //   : "hover:bg-[#2a2d2e] border border-transparent"
                      }`}
                    >
                      {getResourceIcon(resource.type)}
                      <span className="flex-1 text-[#cccccc] text-sm truncate">
                        {resource.name}
                      </span>
                      <div className="flex items-center space-x-1">
                        {resource.completed && (
                          <CheckCircle className="w-2.5 h-2.5 text-[#4ec9b0]" />
                        )}
                        {resource.type === "assignment" &&
                          !resource.completed && (
                            <Clock className="w-2.5 h-2.5 text-[#dcdcaa]" />
                          )}
                        {resource.type === "guide" && (
                          <Badge className="bg-[#3e3e42] px-1.5 text-[#ce9178] text-sm">
                            MD
                          </Badge>
                        )}
                      </div>
                    </button>
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
          {/* <BreadcrumbNav
            items={getBreadcrumbItems()}
            onNavigate={handleBreadcrumbNavigation}
          /> */}
        </div>

        {/* Content Area */}
        <div className="flex-1 bg-[#1e1e1e] p-4 overflow-y-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
