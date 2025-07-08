import { createFileRoute } from "@tanstack/react-router";
import { useActiveEntities } from "@/hooks/use-active-entities";
import React from "react";
import { NavigationButtons } from "@/components/navigation-buttons";

export const Route = createFileRoute(
  "/dashboard/courses/$courseId/module/$moduleId/resources/$resourceId"
)({
  component: RouteComponent,
});

function RouteComponent() {
  const { activeCourse, activeModule, activeResource } = useActiveEntities();

  if (!activeCourse || !activeModule || !activeResource) {
    return <div className="p-8 text-[#cccccc]">Resource not found.</div>;
  }

  const renderContent = () => {
    return React.createElement(activeResource.content);
  };

  return (
    <div className="mx-auto p-8 max-w-2xl text-[#cccccc]">
      <div className="prose-invert max-w-none prose">{renderContent()}</div>

      <NavigationButtons />
    </div>
  );
}
