import { useNavigate } from "@tanstack/react-router";
import { useActiveEntities } from "./use-active-entities";
import type { Course, Module, Resource } from "@/data/constants";

interface NavigationItem {
  type: "module" | "resource";
  course: Course;
  module: Module;
  resource?: Resource;
  path: string;
}

interface NavigationState {
  canGoNext: boolean;
  canGoPrevious: boolean;
  goNext: () => void;
  goPrevious: () => void;
  nextItem?: NavigationItem;
  previousItem?: NavigationItem;
}

export function useNavForwardBackward(): NavigationState {
  const { activeCourse, activeModule, activeResource } = useActiveEntities();
  const navigate = useNavigate();

  if (!activeCourse) {
    return {
      canGoNext: false,
      canGoPrevious: false,
      goNext: () => {},
      goPrevious: () => {},
    };
  }

  // Build a flat list of all navigation items in order
  const buildNavigationList = (course: Course): NavigationItem[] => {
    const items: NavigationItem[] = [];

    course.modules.forEach((module) => {
      // Add the module itself
      items.push({
        type: "module",
        course,
        module,
        path: `/dashboard/courses/${encodeURIComponent(course.name)}/module/${encodeURIComponent(module.id)}`,
      });

      // Add all resources in the module
      module.resources.forEach((resource) => {
        items.push({
          type: "resource",
          course,
          module,
          resource,
          path: `/dashboard/courses/${encodeURIComponent(course.name)}/module/${encodeURIComponent(module.id)}/resources/${encodeURIComponent(resource.id)}`,
        });
      });
    });

    return items;
  };

  const navigationList = buildNavigationList(activeCourse);

  // Find current item index
  const getCurrentIndex = (): number => {
    if (activeResource && activeModule) {
      // We're viewing a resource
      return navigationList.findIndex(
        (item) =>
          item.type === "resource" &&
          item.module.id === activeModule.id &&
          item.resource?.id === activeResource.id
      );
    } else if (activeModule) {
      // We're viewing a module
      return navigationList.findIndex(
        (item) => item.type === "module" && item.module.id === activeModule.id
      );
    }
    return -1;
  };

  const currentIndex = getCurrentIndex();
  const nextItem =
    currentIndex >= 0 && currentIndex < navigationList.length - 1
      ? navigationList[currentIndex + 1]
      : undefined;
  const previousItem =
    currentIndex > 0 ? navigationList[currentIndex - 1] : undefined;

  const goNext = () => {
    if (nextItem) {
      navigate({ to: nextItem.path as any });
    }
  };

  const goPrevious = () => {
    if (previousItem) {
      navigate({ to: previousItem.path as any });
    }
  };

  return {
    canGoNext: !!nextItem,
    canGoPrevious: !!previousItem,
    goNext,
    goPrevious,
    nextItem,
    previousItem,
  };
}
