import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface BreadcrumbItem {
	id: string;
	name: string;
	type: "course" | "module" | "resource";
}

interface BreadcrumbNavProps {
	items: BreadcrumbItem[];
	onNavigate: (item: BreadcrumbItem, index: number) => void;
}

export const BreadcrumbNav = ({ items, onNavigate }: BreadcrumbNavProps) => {
	return (
		<nav className="flex items-center space-x-1 text-sm">
			{items.map((item, index) => (
				<div key={item.id} className="flex items-center space-x-1">
					{index > 0 && <ChevronRight className="w-3 h-3 text-[#969696]" />}
					<Button
						variant="ghost"
						size="sm"
						onClick={() => onNavigate(item, index)}
						className={`h-6 px-2 text-sm hover:bg-[#37373d] ${
							index === items.length - 1
								? "text-[#cccccc] font-medium cursor-default"
								: "text-[#569cd6] hover:text-[#cccccc]"
						}`}
						disabled={index === items.length - 1}
					>
						{item.name}
					</Button>
				</div>
			))}
		</nav>
	);
};
