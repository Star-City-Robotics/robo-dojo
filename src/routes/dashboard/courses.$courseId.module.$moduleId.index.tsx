import { createFileRoute, Link, useParams } from "@tanstack/react-router";
import { NavigationButtons } from "@/components/navigation-buttons";
import { courses } from "@/data/constants";

export const Route = createFileRoute(
	"/dashboard/courses/$courseId/module/$moduleId/",
)({
	component: RouteComponent,
});

function RouteComponent() {
	const params = useParams({
		from: "/dashboard/courses/$courseId/module/$moduleId/",
	});
	const course = courses.find((c) => c.id === params.courseId);
	const module = course?.modules.find((m) => m.id === params.moduleId);

	if (!course || !module) {
		return <div className="p-8 text-[#cccccc]">Module not found.</div>;
	}

	return (
		<div className="mx-auto p-8 max-w-2xl text-[#cccccc]">
			<h1 className="mb-4 font-bold text-2xl">{module.name}</h1>

			{/* Module Description */}
			<div className="bg-[#252526] mb-6 p-4 border border-[#3e3e42] rounded-lg">
				<p className="text-[#cccccc] leading-relaxed">{module.description}</p>
			</div>

			<h2 className="mb-4 font-semibold text-lg">Resources</h2>
			<ul className="space-y-3">
				{module.resources.map((resource) => (
					<li
						key={resource.id}
						className="bg-[#252526] hover:bg-[#2a2d2e] p-3 border border-[#3e3e42] rounded-lg transition-colors"
					>
						<Link
							to="/dashboard/courses/$courseId/module/$moduleId/resources/$resourceId"
							params={{
								courseId: course.id,
								moduleId: module.id,
								resourceId: resource.id,
							}}
							className="block"
						>
							<div className="mb-1 font-medium text-[#4ec9b0] hover:underline">
								{resource.name}
							</div>
							<div className="text-[#6a6a6a] text-sm">
								{resource.description}
							</div>
						</Link>
					</li>
				))}
			</ul>

			<NavigationButtons />
		</div>
	);
}
