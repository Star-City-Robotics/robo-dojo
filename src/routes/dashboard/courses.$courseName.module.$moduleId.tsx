import { createFileRoute, useParams, Link } from "@tanstack/react-router";
import { courses } from "@/data/constants";
import { useActiveEntities } from "@/hooks/use-active-entities";
import { NavigationButtons } from "@/components/navigation-buttons";

export const Route = createFileRoute(
  "/dashboard/courses/$courseName/module/$moduleId"
)({
  component: RouteComponent,
});

function RouteComponent() {
  const { activeCourse, activeModule, activeResource } = useActiveEntities();

  if (!activeCourse || !activeModule) {
    return <div className="p-8 text-[#cccccc]">Module not found.</div>;
  }

  return (
    <div className="mx-auto p-8 max-w-2xl text-[#cccccc]">
      <h1 className="mb-4 font-bold text-2xl">{activeModule.name}</h1>
      <h2 className="mb-2 font-semibold text-lg">Resources</h2>
      <ul className="space-y-2">
        {activeModule.resources.map((resource) => (
          <li key={resource.id}>
            <Link
              to="/dashboard/courses/$courseName/module/$moduleId/resources/$resourceId"
              params={{
                courseName: activeCourse.name,
                moduleId: activeModule.id,
                resourceId: resource.id,
              }}
              className="text-[#4ec9b0] hover:underline"
            >
              {resource.name}
            </Link>
          </li>
        ))}
      </ul>

      <NavigationButtons />
    </div>
  );
}
