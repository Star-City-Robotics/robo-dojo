import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/dashboard/courses/$courseName")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/dashboard/courses/$courseId"!</div>;
}
