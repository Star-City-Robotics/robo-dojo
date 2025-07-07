import { Check, Copy } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";


interface CodeBlockProps {
	language: string;
	code: string;
}

const CodeBlock = ({ language, code }: CodeBlockProps) => {
	const [copied, setCopied] = useState(false);

	const copyToClipboard = async () => {
		await navigator.clipboard.writeText(code);
		setCopied(true);
		setTimeout(() => setCopied(false), 2000);
	};

	const getLanguageColor = (lang: string) => {
		switch (lang.toLowerCase()) {
			case "java":
				return "#f89820";
			case "python":
				return "#3776ab";
			case "typescript":
			case "ts":
				return "#3178c6";
			case "javascript":
			case "js":
				return "#f7df1e";
			case "arduino":
			case "cpp":
				return "#00979d";
			default:
				return "#4ec9b0";
		}
	};

	const highlightCode = (code: string, language: string) => {
		// Simple syntax highlighting for demonstration
		// In a real implementation, you'd use a library like Prism.js or highlight.js
		const keywords = {
			java: [
				"public",
				"private",
				"protected",
				"class",
				"interface",
				"extends",
				"implements",
				"static",
				"final",
				"void",
				"int",
				"String",
				"boolean",
				"if",
				"else",
				"for",
				"while",
				"return",
				"new",
				"this",
				"super",
			],
			python: [
				"def",
				"class",
				"if",
				"else",
				"elif",
				"for",
				"while",
				"import",
				"from",
				"return",
				"try",
				"except",
				"finally",
				"with",
				"as",
				"lambda",
				"yield",
				"global",
				"nonlocal",
			],
			typescript: [
				"const",
				"let",
				"var",
				"function",
				"class",
				"interface",
				"type",
				"enum",
				"namespace",
				"import",
				"export",
				"default",
				"if",
				"else",
				"for",
				"while",
				"return",
				"async",
				"await",
				"Promise",
			],
			ts: [
				"const",
				"let",
				"var",
				"function",
				"class",
				"interface",
				"type",
				"enum",
				"namespace",
				"import",
				"export",
				"default",
				"if",
				"else",
				"for",
				"while",
				"return",
				"async",
				"await",
				"Promise",
			],
			javascript: [
				"const",
				"let",
				"var",
				"function",
				"class",
				"if",
				"else",
				"for",
				"while",
				"return",
				"async",
				"await",
				"Promise",
			],
			js: [
				"const",
				"let",
				"var",
				"function",
				"class",
				"if",
				"else",
				"for",
				"while",
				"return",
				"async",
				"await",
				"Promise",
			],
		};

		const langKeywords =
			keywords[language.toLowerCase() as keyof typeof keywords] || [];
		let highlightedCode = code;

		// Highlight keywords
		langKeywords.forEach((keyword) => {
			const regex = new RegExp(`\\b${keyword}\\b`, "g");
			highlightedCode = highlightedCode.replace(
				regex,
				`<span style="color: #569cd6">${keyword}</span>`,
			);
		});

		// Highlight strings
		highlightedCode = highlightedCode.replace(
			/"([^"]*)"/g,
			'<span style="color: #ce9178">"$1"</span>',
		);
		highlightedCode = highlightedCode.replace(
			/'([^']*)'/g,
			"<span style=\"color: #ce9178\">'$1'</span>",
		);
		highlightedCode = highlightedCode.replace(
			/`([^`]*)`/g,
			'<span style="color: #ce9178">`$1`</span>',
		);

		// Highlight comments
		highlightedCode = highlightedCode.replace(
			/\/\/.*$/gm,
			'<span style="color: #6a9955">$&</span>',
		);
		highlightedCode = highlightedCode.replace(
			/\/\*[\s\S]*?\*\//g,
			'<span style="color: #6a9955">$&</span>',
		);
		highlightedCode = highlightedCode.replace(
			/#.*$/gm,
			'<span style="color: #6a9955">$&</span>',
		);

		// Highlight numbers
		highlightedCode = highlightedCode.replace(
			/\b\d+\.?\d*\b/g,
			'<span style="color: #b5cea8">$&</span>',
		);

		// Highlight functions
		highlightedCode = highlightedCode.replace(
			/(\w+)(?=\s*\()/g,
			'<span style="color: #dcdcaa">$1</span>',
		);

		return highlightedCode;
	};

	return (
		<div className="bg-[#1e1e1e] border border-[#3e3e42] rounded-sm overflow-hidden">
			<div className="flex justify-between items-center bg-[#2d2d30] px-4 py-2 border-[#3e3e42] border-b">
				<div className="flex items-center space-x-2">
					<div
						className="rounded-full w-3 h-3"
						style={{ backgroundColor: getLanguageColor(language) }}
					/>
					<span className="font-medium text-[#cccccc] text-sm">
						{language.toUpperCase()}
					</span>
				</div>
				<Button
					variant="ghost"
					size="sm"
					onClick={copyToClipboard}
					className="hover:bg-[#37373d] px-3 h-7 text-[#cccccc]"
				>
					{copied ? (
						<Check className="w-3 h-3" />
					) : (
						<Copy className="w-3 h-3" />
					)}
				</Button>
			</div>
			<div className="p-4 overflow-x-auto">
				<pre className="text-base">
					<code
						className="text-[#cccccc]"
						// biome-ignore lint/security/noDangerouslySetInnerHtml: Needed for now, will fix later
						dangerouslySetInnerHTML={{
							__html: highlightCode(code, language),
						}}
					/>
				</pre>
			</div>
		</div>
	);
};

interface MarkdownRendererProps {
	content: string;
}

export const MarkdownRenderer = ({ content }: MarkdownRendererProps) => {
	const parseMarkdown = (markdown: string) => {
		const parts = [];
		const codeBlockRegex = /```(\w+)?\n([\s\S]*?)```/g;
		let lastIndex = 0;
		let match;

		while ((match = codeBlockRegex.exec(markdown)) !== null) {
			// Add text before code block
			if (match.index > lastIndex) {
				const textContent = markdown.slice(lastIndex, match.index).trim();
				if (textContent) {
					parts.push({
						type: "text",
						content: textContent,
					});
				}
			}

			// Add code block
			parts.push({
				type: "code",
				language: match[1] || "text",
				content: match[2].trim(),
			});

			lastIndex = match.index + match[0].length;
		}

		// Add remaining text
		if (lastIndex < markdown.length) {
			const textContent = markdown.slice(lastIndex).trim();
			if (textContent) {
				parts.push({
					type: "text",
					content: textContent,
				});
			}
		}

		return parts;
	};

	const renderText = (text: string) => {
		// Simple markdown parsing for headers, bold, italic, etc.
		let html = text;

		// Headers
		html = html.replace(
			/^### (.*$)/gm,
			'<h3 style="color: #cccccc; font-size: 1.25rem; font-weight: 600; margin: 1rem 0 0.5rem 0;">$1</h3>',
		);
		html = html.replace(
			/^## (.*$)/gm,
			'<h2 style="color: #cccccc; font-size: 1.375rem; font-weight: 600; margin: 1.25rem 0 0.75rem 0;">$1</h2>',
		);
		html = html.replace(
			/^# (.*$)/gm,
			'<h1 style="color: #cccccc; font-size: 1.625rem; font-weight: 600; margin: 1.5rem 0 1rem 0;">$1</h1>',
		);

		// Bold and italic
		html = html.replace(
			/\*\*(.*?)\*\*/g,
			'<strong style="color: #cccccc; font-weight: 600;">$1</strong>',
		);
		html = html.replace(
			/\*(.*?)\*/g,
			'<em style="color: #cccccc; font-style: italic;">$1</em>',
		);

		// Inline code
		html = html.replace(
			/`([^`]+)`/g,
			'<code style="background: #2d2d30; color: #ce9178; padding: 0.125rem 0.25rem; border-radius: 0.125rem; font-family: monospace; font-size: 1rem;">$1</code>',
		);

		// Line breaks
		html = html.replace(/\n/g, "<br>");

		return html;
	};

	const parts = parseMarkdown(content);

	return (
		<div className="space-y-4">
			{parts.map((part, index) => (
				<div key={index}>
					{part.type === "code" ? (
						<CodeBlock language={part.language} code={part.content} />
					) : (
						<div
							className="text-[#cccccc] text-base leading-relaxed"
							dangerouslySetInnerHTML={{ __html: renderText(part.content) }}
						/>
					)}
				</div>
			))}
		</div>
	);
};
