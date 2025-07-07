import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute(
  "/dashboard/courses/$courseName/module/$moduleName"
)({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/dashboard/courses/$courseName/module/"!</div>;
}
