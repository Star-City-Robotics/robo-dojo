import { createFileRoute, useParams } from "@tanstack/react-router";
import { courses } from "@/data/constants";
import { useActiveEntities } from "@/hooks/use-active-entities";
import React from "react";
import { MarkdownRenderer } from "@/components/markdown-renderer";
import { NavigationButtons } from "@/components/navigation-buttons";

export const Route = createFileRoute(
  "/dashboard/courses/$courseName/module/$moduleId/resources/$resourceId"
)({
  component: RouteComponent,
});

function RouteComponent() {
  const { activeCourse, activeModule, activeResource } = useActiveEntities();

  if (!activeCourse || !activeModule || !activeResource) {
    return <div className="p-8 text-[#cccccc]">Resource not found.</div>;
  }

  const renderContent = () => {
    if (typeof activeResource.content === "function") {
      return React.createElement(activeResource.content);
    } else {
      return <MarkdownRenderer content={activeResource.content} />;
    }
  };

  return (
    <div className="mx-auto p-8 max-w-2xl text-[#cccccc]">
      <div className="prose-invert max-w-none prose">{renderContent()}</div>

      <NavigationButtons />
    </div>
  );
}
