import { createFileRoute, Link, useParams } from "@tanstack/react-router";
import { BookOpen, Cpu } from "lucide-react";
import { courses } from "@/data/constants";

export const Route = createFileRoute("/dashboard/courses/$courseId/")({
	component: RouteComponent,
});

function RouteComponent() {
	const params = useParams({
		from: "/dashboard/courses/$courseId/",
	});
	const course = courses.find((c) => c.id === params.courseId);

	if (!course) {
		return <div className="p-8 text-[#cccccc]">Course not found.</div>;
	}

	return (
		<div className="mx-auto p-8 max-w-4xl text-[#cccccc]">
			<h1 className="mb-4 font-bold text-3xl">{course.name}</h1>

			{/* Course Description */}
			<div className="bg-[#252526] mb-8 p-6 border border-[#3e3e42] rounded-lg">
				<h2 className="mb-3 font-semibold text-[#4ec9b0] text-lg">
					About This Course
				</h2>
				<p className="text-[#cccccc] text-base leading-relaxed">
					{course.description}
				</p>
			</div>

			{/* Modules Overview */}
			<div className="mb-6">
				<h2 className="mb-4 font-semibold text-xl">Course Modules</h2>
				<div className="gap-4 grid md:grid-cols-2">
					{course.modules.map((module, index) => (
						<Link
							key={module.id}
							to="/dashboard/courses/$courseId/module/$moduleId"
							params={{
								courseId: course.id,
								moduleId: module.id,
							}}
							className="group block bg-[#252526] hover:bg-[#2a2d2e] p-6 border border-[#3e3e42] hover:border-[#007acc] rounded-lg transition-all duration-200"
						>
							<div className="flex items-start space-x-4">
								<div className="flex flex-shrink-0 justify-center items-center bg-[#1e1e1e] border border-[#3e3e42] rounded-lg w-12 h-12">
									<Cpu className="w-6 h-6 text-[#569cd6]" />
								</div>
								<div className="flex-1 min-w-0">
									<div className="flex items-center space-x-2 mb-2">
										<span className="font-medium text-[#6a6a6a] text-sm">
											Module {index + 1}
										</span>
									</div>
									<h3 className="mb-2 font-semibold text-[#cccccc] group-hover:text-[#4ec9b0] text-lg transition-colors">
										{module.name}
									</h3>
									<p className="mb-3 text-[#6a6a6a] text-sm leading-relaxed">
										{module.description}
									</p>
									<div className="flex items-center space-x-4 text-[#6a6a6a] text-xs">
										<div className="flex items-center space-x-1">
											<BookOpen className="w-3 h-3" />
											<span>
												{module.resources.length} resource
												{module.resources.length !== 1 ? "s" : ""}
											</span>
										</div>
									</div>
								</div>
							</div>
						</Link>
					))}
				</div>
			</div>

			{/* Course Stats */}
			<div className="gap-4 grid grid-cols-1 md:grid-cols-2">
				<div className="bg-[#252526] p-4 border border-[#3e3e42] rounded-lg text-center">
					<div className="font-bold text-[#4ec9b0] text-2xl">
						{course.modules.length}
					</div>
					<div className="text-[#6a6a6a] text-sm">Modules</div>
				</div>
				<div className="bg-[#252526] p-4 border border-[#3e3e42] rounded-lg text-center">
					<div className="font-bold text-[#569cd6] text-2xl">
						{course.modules.reduce(
							(total, module) => total + module.resources.length,
							0,
						)}
					</div>
					<div className="text-[#6a6a6a] text-sm">Resources</div>
				</div>
			</div>
		</div>
	);
}
