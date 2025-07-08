import type React from "react";

interface MDXVideoProps {
	title: string;
	url: string;
	width?: number;
	height?: number;
}

export const MDXVideo: React.FC<MDXVideoProps> = ({
	title,
	url,
	width = 800,
	height = 450,
}) => {
	// Convert YouTube URL to embed format
	const getEmbedUrl = (youtubeUrl: string): string => {
		// Handle different YouTube URL formats
		const regex =
			/(?:youtube\.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?/\s]{11})/;
		const match = youtubeUrl.match(regex);

		if (match && match[1]) {
			return `https://www.youtube.com/embed/${match[1]}`;
		}

		// If it's already an embed URL, return as is
		if (youtubeUrl.includes("embed")) {
			return youtubeUrl;
		}

		// Fallback - return original URL
		return youtubeUrl;
	};

	const embedUrl = getEmbedUrl(url);

	return (
		<div className="bg-[#252526] my-8 border border-[#3e3e42] rounded-lg overflow-hidden">
			{/* Video Title Header */}
			<div className="bg-[#2d2d30] px-4 py-3 border-[#3e3e42] border-b">
				<h4 className="flex items-center font-medium text-[#cccccc] text-lg">
					<span className="mr-2">🎥</span>
					{title}
				</h4>
			</div>

			{/* Video Container */}
			<div className="flex justify-center bg-black p-4">
				<div className="relative w-full max-w-4xl">
					<iframe
						src={embedUrl}
						width={width}
						height={height}
						frameBorder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowFullScreen
						className="rounded w-full h-auto aspect-video"
						title={title}
					/>
				</div>
			</div>

			{/* Optional Footer with Link */}
			<div className="bg-[#2d2d30] px-4 py-2 text-[#969696] text-xs">
				<a
					href={url}
					target="_blank"
					rel="noopener noreferrer"
					className="text-[#569cd6] hover:text-[#4ec9b0] transition-colors"
				>
					Watch on YouTube →
				</a>
			</div>
		</div>
	);
};
