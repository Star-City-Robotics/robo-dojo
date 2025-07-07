import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";

interface BreadcrumbItem {
  id: string;
  name: string;
  type: "course" | "module" | "resource";
  link?: string;
}

interface BreadcrumbNavProps {
  items: BreadcrumbItem[];
}

export const BreadcrumbNav = ({ items }: BreadcrumbNavProps) => {
  return (
    <nav className="flex items-center space-x-1 text-sm">
      {items.map((item, index) => (
        <div key={item.id} className="flex items-center space-x-1">
          {index > 0 && <ChevronRight className="w-3 h-3 text-[#969696]" />}
          {item.link && index !== items.length - 1 ? (
            <Link
              to={item.link}
              className={
                "h-6 px-2 text-sm hover:bg-[#37373d] text-[#569cd6] hover:text-[#cccccc] rounded transition-colors"
              }
            >
              {item.name}
            </Link>
          ) : (
            <span
              className={
                "h-6 px-2 text-sm text-[#cccccc] font-medium cursor-default"
              }
            >
              {item.name}
            </span>
          )}
        </div>
      ))}
    </nav>
  );
};
