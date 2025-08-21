import { RESOURCE_ICON_COLORS, RESOURCE_ICONS } from "@/data/constants";
import type { Resource } from "@/data/types";
import { BookOpen, Bug } from "lucide-react";

export const ResourceIcon = ({ resource }: { resource: Resource }) => {
  // If resource has a custom icon, use it
  if (resource.icon && RESOURCE_ICONS[resource.icon]) {
    const IconComponent = RESOURCE_ICONS[resource.icon];
    const iconColor = resource.iconColor
      ? RESOURCE_ICON_COLORS[resource.iconColor]
      : RESOURCE_ICON_COLORS.green; // Default to VS Code green

    return <IconComponent className="w-4 h-4" style={{ color: iconColor }} />;
  }

  // Fallback to default icons based on resource type
  switch (resource.resourceType) {
    case "guide":
      return (
        <BookOpen
          className="w-4 h-4"
          style={{ color: RESOURCE_ICON_COLORS.orange }}
        />
      );
    default:
      return (
        <Bug
          className="w-4 h-4"
          style={{ color: RESOURCE_ICON_COLORS.purple }}
        />
      );
  }
};
