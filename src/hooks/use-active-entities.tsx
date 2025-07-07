import { courses } from "@/data/constants";
import { useParams } from "@tanstack/react-router";

export const useActiveEntities = () => {
  const params = useParams({
    from: "/dashboard/courses/$courseName" as "/dashboard/courses/$courseName/module/$moduleId/resources/$resourceId",
    shouldThrow: false,
    structuralSharing: true,
  });

  const activeCourse = courses.find(
    (course) => course.name === params?.courseName
  );
  const activeModule = activeCourse?.modules.find(
    (module) => module.id === params?.moduleId
  );

  const activeResource = activeModule?.resources?.find(
    (resource) => resource.id === params?.resourceId
  );

  return {
    activeCourse,
    activeModule,
    activeResource,
  };
};
