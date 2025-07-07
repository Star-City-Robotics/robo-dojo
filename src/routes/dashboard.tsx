import { createFileRoute, Outlet } from "@tanstack/react-router";
import { MDXProvider } from "@mdx-js/react";
import { mdxComponents } from "@/components/mdx-components";

export const Route = createFileRoute("/dashboard")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <MDXProvider components={mdxComponents}>
      <Outlet />
    </MDXProvider>
  );
}
