import { createFileRoute, useParams, Link } from "@tanstack/react-router";
import { courses } from "@/data/constants";

export const Route = createFileRoute(
  "/dashboard/courses/$courseName/module/$moduleId/"
)({
  component: RouteComponent,
});

function RouteComponent() {
  const params = useParams({
    from: "/dashboard/courses/$courseName/module/$moduleId/",
  });
  const course = courses.find((c) => c.name === params.courseName);
  const module = course?.modules.find((m) => m.id === params.moduleId);

  if (!course || !module) {
    return <div className="p-8 text-[#cccccc]">Module not found.</div>;
  }

  return (
    <div className="mx-auto p-8 max-w-2xl text-[#cccccc]">
      <h1 className="mb-4 font-bold text-2xl">{module.name}</h1>
      <h2 className="mb-2 font-semibold text-lg">Resources</h2>
      <ul className="space-y-2">
        {module.resources.map((resource) => (
          <li key={resource.id}>
            <Link
              to="/dashboard/courses/$courseName/module/$moduleId/resources/$resourceId"
              params={{
                courseName: course.name,
                moduleId: module.id,
                resourceId: resource.id,
              }}
              className="text-[#4ec9b0] hover:underline"
            >
              {resource.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
