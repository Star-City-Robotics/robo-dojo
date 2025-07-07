import { createFileRoute, Outlet } from "@tanstack/react-router";
import { MDXProvider } from "@mdx-js/react";
import { mdxComponents } from "@/components/mdx-components";
import { CommandSearch } from "@/components/command-search";

export const Route = createFileRoute("/dashboard")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <MDXProvider components={mdxComponents}>
      <CommandSearch />
      <Outlet />
    </MDXProvider>
  );
}
