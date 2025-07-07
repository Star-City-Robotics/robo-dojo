import { createFileRoute, useParams } from "@tanstack/react-router";
import { courses } from "@/data/constants";

export const Route = createFileRoute(
  "/dashboard/courses/$courseName/module/$moduleName/resources/$resourceName"
)({
  component: RouteComponent,
});

function RouteComponent() {
  const params = useParams({
    from: "/dashboard/courses/$courseName/module/$moduleName/resources/$resourceName",
  });
  const course = courses.find((c) => c.name === params.courseName);
  const module = course?.modules.find((m) => m.id === params.moduleName);
  const resource = module?.resources.find((r) => r.id === params.resourceName);

  if (!course || !module || !resource) {
    return <div className="p-8 text-[#cccccc]">Resource not found.</div>;
  }

  return (
    <div className="mx-auto p-8 max-w-2xl text-[#cccccc]">
      <h1 className="mb-4 font-bold text-white text-2xl">{resource.name}</h1>
    </div>
  );
}
