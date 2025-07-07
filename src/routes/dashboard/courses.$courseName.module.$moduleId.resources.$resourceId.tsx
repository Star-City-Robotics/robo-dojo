import { createFileRoute, useParams } from "@tanstack/react-router";
import { courses } from "@/data/constants";
import { useActiveEntities } from "@/hooks/use-active-entities";
import React from "react";
import { MarkdownRenderer } from "@/components/markdown-renderer";

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
      <h1 className="mb-4 font-bold text-white text-2xl">
        {activeResource.name}
      </h1>
      <div className="prose-invert max-w-none prose">{renderContent()}</div>
    </div>
  );
}
