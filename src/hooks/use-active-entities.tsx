import { useParams } from "@tanstack/react-router";
import { courses } from "@/data/constants";

export const useActiveEntities = () => {
	const params = useParams({
		from: "/dashboard/courses/$courseId" as "/dashboard/courses/$courseId/module/$moduleId/resources/$resourceId",
		shouldThrow: false,
		structuralSharing: true,
	});

	const activeCourse = courses.find((course) => course.id === params?.courseId);
	const activeModule = activeCourse?.modules.find(
		(module) => module.id === params?.moduleId,
	);

	const activeResource = activeModule?.resources?.find(
		(resource) => resource.id === params?.resourceId,
	);

	return {
		activeCourse,
		activeModule,
		activeResource,
	};
};
