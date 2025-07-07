import { createFileRoute, Outlet } from "@tanstack/react-router";
import { MDXProvider } from "@mdx-js/react";

export const Route = createFileRoute("/dashboard")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <MDXProvider>
      <Outlet />
    </MDXProvider>
  );
}
