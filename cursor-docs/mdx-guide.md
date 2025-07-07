# MDX Guide for Robotics LMS

This document explains how MDX (Markdown + JSX) works in this project and how to extend it with custom components.

## Overview

MDX allows you to write JSX components directly in your markdown documents, giving you the power of React components while maintaining the simplicity of markdown.

## Project Setup

### Dependencies

- `@mdx-js/rollup` - Vite plugin for MDX processing
- `@mdx-js/react` - React integration for MDX
- `react-syntax-highlighter` - Code syntax highlighting

### Configuration

**Vite Config (`vite.config.ts`)**:

```typescript
import mdx from "@mdx-js/rollup";

export default defineConfig({
  plugins: [
    mdx({
      jsxImportSource: "react",
      providerImportSource: "@mdx-js/react",
    }),
    // ... other plugins
  ],
});
```

**MDX Provider Setup (`src/routes/dashboard.tsx`)**:

```typescript
import { MDXProvider } from "@mdx-js/react";
import { mdxComponents } from "@/components/mdx-components";

function RouteComponent() {
  return (
    <MDXProvider components={mdxComponents}>
      <Outlet />
    </MDXProvider>
  );
}
```

## Creating MDX Content

### 1. Create MDX Files

Place MDX files in `src/content/` directory:

````mdx
# My Guide Title

This is regular markdown content.

## Code Examples

```java
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}
```
````

You can also use React components:

<CustomComponent prop="value" />
```

### 2. Import and Use in Constants

```typescript
// src/data/constants.ts
import MyGuideMdx from "@/content/my-guide.mdx";

export const javaProgrammingCourse: Course = {
  modules: [
    {
      resources: [
        {
          resourceType: "guide",
          id: "my-guide",
          name: "My Guide",
          content: MyGuideMdx, // Use the imported component
        },
      ],
    },
  ],
};
```

## Custom Components

### Current Components (`src/components/mdx-components.tsx`)

The project includes styled components for standard markdown elements:

- **Headers** (`h1`, `h2`, `h3`, `h4`) - VS Code themed colors
- **Code blocks** - Syntax highlighting for Java, Python, TypeScript
- **Text elements** (`p`, `strong`, `em`) - Consistent styling
- **Lists** (`ul`, `ol`, `li`) - Proper spacing and colors
- **Links** (`a`) - Hover effects and theming
- **Tables** - Bordered styling matching the theme

### Adding New Custom Components

#### 1. Create the Component

Create a new component file (e.g., `src/components/mdx/VideoEmbed.tsx`):

```typescript
interface VideoEmbedProps {
  src: string;
  title?: string;
  width?: number;
  height?: number;
}

export const VideoEmbed: React.FC<VideoEmbedProps> = ({
  src,
  title = "Video",
  width = 640,
  height = 360
}) => {
  return (
    <div className="my-6 rounded-lg overflow-hidden border border-[#3e3e42]">
      {title && (
        <div className="bg-[#252526] px-4 py-2 text-[#cccccc] font-medium">
          {title}
        </div>
      )}
      <div className="bg-black flex justify-center">
        <iframe
          src={src}
          width={width}
          height={height}
          frameBorder="0"
          allowFullScreen
          className="max-w-full"
        />
      </div>
    </div>
  );
};
```

#### 2. Add to MDX Components

Update `src/components/mdx-components.tsx`:

```typescript
import { VideoEmbed } from "@/components/mdx/VideoEmbed";

export const mdxComponents = {
  // ... existing components
  VideoEmbed,
  // You can also override HTML elements
  img: (props: any) => (
    <img
      className="rounded-lg border border-[#3e3e42] max-w-full h-auto my-4"
      {...props}
    />
  ),
};
```

#### 3. Use in MDX Files

```mdx
# My Video Guide

Here's an embedded video:

<VideoEmbed
  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
  title="Robot Programming Tutorial"
  width={800}
  height={450}
/>

Regular markdown content continues here...
```

## Advanced Custom Components Examples

### Callout/Alert Component

```typescript
// src/components/mdx/Callout.tsx
interface CalloutProps {
  type?: 'info' | 'warning' | 'error' | 'success';
  title?: string;
  children: React.ReactNode;
}

export const Callout: React.FC<CalloutProps> = ({
  type = 'info',
  title,
  children
}) => {
  const styles = {
    info: 'border-[#007acc] bg-[#1e3a5f]',
    warning: 'border-[#dcdcaa] bg-[#5d5c2b]',
    error: 'border-[#f44747] bg-[#5c2626]',
    success: 'border-[#4ec9b0] bg-[#2d5c4e]',
  };

  return (
    <div className={`border-l-4 p-4 my-4 rounded-r ${styles[type]}`}>
      {title && (
        <h4 className="font-bold text-[#cccccc] mb-2">{title}</h4>
      )}
      <div className="text-[#cccccc]">{children}</div>
    </div>
  );
};
```

Usage in MDX:

```mdx
<Callout type="warning" title="Important Note">
  Make sure to backup your robot's configuration before proceeding.
</Callout>
```

### Code Playground Component

```typescript
// src/components/mdx/CodePlayground.tsx
interface CodePlaygroundProps {
  language: 'java' | 'python' | 'typescript';
  code: string;
  title?: string;
}

export const CodePlayground: React.FC<CodePlaygroundProps> = ({
  language,
  code,
  title
}) => {
  const [currentCode, setCurrentCode] = useState(code);
  const [output, setOutput] = useState('');

  const runCode = () => {
    // Simulate code execution
    setOutput(`Running ${language} code...\nOutput would appear here.`);
  };

  return (
    <div className="border border-[#3e3e42] rounded-lg my-6">
      {title && (
        <div className="bg-[#252526] px-4 py-2 border-b border-[#3e3e42]">
          <h4 className="text-[#cccccc] font-medium">{title}</h4>
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div>
          <textarea
            value={currentCode}
            onChange={(e) => setCurrentCode(e.target.value)}
            className="w-full h-64 p-4 bg-[#1e1e1e] text-[#cccccc] font-mono text-sm resize-none border-none outline-none"
          />
        </div>
        <div className="border-l border-[#3e3e42]">
          <div className="p-2 bg-[#2d2d30] border-b border-[#3e3e42]">
            <button
              onClick={runCode}
              className="px-3 py-1 bg-[#007acc] text-white rounded text-sm hover:bg-[#005a9e]"
            >
              Run Code
            </button>
          </div>
          <pre className="p-4 h-52 overflow-auto bg-[#0c0c0c] text-[#cccccc] text-sm">
            {output || 'Click "Run Code" to see output'}
          </pre>
        </div>
      </div>
    </div>
  );
};
```

## Syntax Highlighting

### Supported Languages

- Java
- Python
- TypeScript/JavaScript
- TSX/JSX

### Adding New Languages

1. Update the supported languages array in `mdx-components.tsx`:

```typescript
const supportedLanguages = [
  "java",
  "python",
  "typescript",
  "javascript",
  "cpp",
  "rust",
];
```

2. Add language mapping if needed:

```typescript
const languageMap: Record<string, string> = {
  ts: "typescript",
  js: "javascript",
  tsx: "typescript",
  jsx: "javascript",
  "c++": "cpp",
  // Add new mappings here
};
```

## Best Practices

### 1. Component Organization

```
src/components/mdx/
├── VideoEmbed.tsx
├── Callout.tsx
├── CodePlayground.tsx
├── InteractiveDemo.tsx
└── index.ts  // Export all components
```

### 2. Consistent Styling

- Use the VS Code color palette for consistency
- Follow the existing border/spacing patterns
- Ensure components work in dark theme

### 3. TypeScript Types

Always define proper TypeScript interfaces for component props:

```typescript
interface ComponentProps {
  required: string;
  optional?: number;
  children?: React.ReactNode;
}
```

### 4. Accessibility

- Include proper ARIA labels
- Ensure keyboard navigation works
- Use semantic HTML elements

## Troubleshooting

### Common Issues

1. **MDX file not found**: Ensure the file is in `src/content/` and properly imported
2. **Component not rendering**: Check that it's added to `mdxComponents` object
3. **Syntax highlighting not working**: Verify the language is in the supported list
4. **TypeScript errors**: Ensure proper type definitions for custom components

### Debug Tips

1. Check browser console for MDX compilation errors
2. Verify Vite config includes MDX plugin
3. Ensure MDXProvider wraps the route content
4. Test components in isolation before adding to MDX

## Examples Repository

Check `src/content/` for example MDX files:

- `test.mdx` - Basic MDX example
- `java-test.mdx` - Java code examples
- `python-test.mdx` - Python robotics examples
- `typescript-test.mdx` - TypeScript/React examples

These files demonstrate best practices for structuring educational content with code examples and explanations.
