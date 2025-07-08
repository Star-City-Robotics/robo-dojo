import { MDXProvider } from "@mdx-js/react";
import { createFileRoute, Outlet } from "@tanstack/react-router";
import { CommandSearch } from "@/components/command-search";
import { mdxComponents } from "@/components/mdx-components";

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
