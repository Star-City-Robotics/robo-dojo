# 🤖 RoboDOJO Learning Management System

A modern, interactive learning platform for robotics programming built with **TanStack Start** and **Bun**. Learn robotics through hands-on projects, interactive tutorials, and real-world applications.

## 🌐 Live Application

**Visit the live site:** [https://robotics-lms-tanstack.fly.dev/](https://robotics-lms-tanstack.fly.dev/)

## 🎯 Project Overview

RoboDOJO is designed to make robotics programming accessible to everyone, from complete beginners to advanced practitioners. The platform features:

- **📚 Interactive Courses** - Step-by-step programming tutorials
- **💻 Code Playground** - VS Code-style editor with syntax highlighting
- **🎥 Video Integration** - Embedded tutorials and demonstrations
- **📊 Progress Tracking** - Monitor learning journey with completion badges
- **🤖 ROB-E Assistant** - Our friendly robot mascot to guide you

---

## 📖 For Course Contributors (Non-Technical)

Want to create or modify courses? You don't need programming experience! Our courses are written in **Markdown** with some special features.

### 🚀 Quick Start for Course Creation

1. **Browse Existing Courses**
   - Look at `src/data/courses/` to see course structure
   - Check `src/data/content/` for content examples

2. **Understanding Course Structure**

   ```
   courses/
   ├── my-course.course.ts      # Course configuration
   └── content/
       ├── lesson-1.mdx         # Lesson content
       ├── lesson-2.mdx         # More lessons
       └── project-1.mdx        # Project files
   ```

3. **Writing Course Content**
   - Use **Markdown** for text formatting
   - Add code blocks with syntax highlighting
   - Include videos, images, and interactive elements

### ✍️ Content Creation Guide

#### Basic Markdown

```markdown
# Lesson Title

## Section Heading

### Subsection

**Bold text** and _italic text_

- Bullet points
- Another point

1. Numbered list
2. Second item
```

#### Code Blocks

````markdown
```java
public class Robot {
    public void moveForward() {
        // Your robot code here
    }
}
```
````

````

#### Special Components
```markdown
<!-- Add videos -->
<MDXVideo src="https://youtube.com/watch?v=VIDEO_ID" title="Lesson Video" />

<!-- Add interactive charts -->
<MDXChart type="bar" data={[...]} title="Progress Chart" />

<!-- Add our robot mascot -->
<MDXRobEButton size="w-32 h-32" />
````

### 📝 How to Contribute Content

1. **Fork the Repository** on GitHub
2. **Edit or Create** course files in `src/data/courses/`
3. **Add Content** in `src/data/content/`
4. **Submit a Pull Request** with your changes

**Need help?** Open an issue and we'll guide you through the process!

---

## 👩‍💻 For Developers

Ready to contribute code? Here's everything you need to know.

### 🛠️ Tech Stack

- **Framework:** [TanStack Start](https://tanstack.com/start) (React-based)
- **Runtime:** [Bun](https://bun.sh) (Fast JavaScript runtime)
- **Styling:** [Tailwind CSS](https://tailwindcss.com)
- **Components:** [Radix UI](https://radix-ui.com) + [shadcn/ui](https://ui.shadcn.com)
- **Content:** [MDX](https://mdxjs.com) for interactive markdown
- **Deployment:** [Fly.io](https://fly.io)
- **CI/CD:** GitHub Actions

### 🚀 Local Development Setup

#### Prerequisites

- [Bun](https://bun.sh) installed globally
- Node.js 18+ (for compatibility)
- Git

#### Quick Start

```bash
# Clone the repository
git clone https://github.com/yourusername/robotics-lms-tanstack.git
cd robotics-lms-tanstack

# Install dependencies
bun install

# Start development server
bun run dev
```

Your app will be running at `http://localhost:3000` 🎉

### 📁 Project Structure

```
src/
├── components/           # React components
│   ├── ui/              # shadcn/ui components
│   ├── mdx/             # MDX-specific components
│   └── ...              # Feature components
├── data/
│   ├── courses/         # Course configurations
│   ├── content/         # MDX content files
│   └── types.ts         # TypeScript types
├── hooks/               # Custom React hooks
├── lib/                 # Utility functions
├── routes/              # TanStack Router pages
└── styles/              # Global styles
```

### 🧪 Available Scripts

```bash
# Development
bun run dev              # Start dev server with hot reload

# Building
bun run build            # Build for production
bun run start            # Start production server

# Quality Assurance
bun run check-lint       # Run Biome linting
bun run type-check       # TypeScript type checking
```

### 🔧 Development Workflow

1. **Create a Branch**

   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make Changes**
   - Follow the existing code style
   - Add TypeScript types for new functionality
   - Write meaningful commit messages

3. **Test Your Changes**

   ```bash
   bun run check-lint      # Check code quality
   bun run type-check      # Verify types
   bun run build           # Ensure it builds
   ```

4. **Submit Pull Request**
   - Our CI will automatically run tests
   - Include screenshots for UI changes
   - Describe what your change does

### 🏗️ Adding New Features

#### Creating New Components

```typescript
// src/components/my-component.tsx
interface MyComponentProps {
  title: string;
  children: React.ReactNode;
}

export const MyComponent = ({ title, children }: MyComponentProps) => {
  return (
    <div className="p-4 border rounded-lg">
      <h2 className="text-xl font-bold">{title}</h2>
      {children}
    </div>
  );
};
```

#### Adding New Routes

```typescript
// src/routes/my-route.tsx
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/my-route')({
  component: MyRouteComponent,
})

function MyRouteComponent() {
  return <div>My new page!</div>
}
```

#### Creating MDX Components

```typescript
// src/components/mdx/MyMDXComponent.tsx
interface MyMDXComponentProps {
  data: string[];
  interactive?: boolean;
}

export const MyMDXComponent = ({ data, interactive = false }: MyMDXComponentProps) => {
  return (
    <div className="my-6 p-4 bg-gray-100 rounded-lg">
      {/* Your component implementation */}
    </div>
  );
};

// Don't forget to add it to src/components/mdx-components.tsx
export const mdxComponents = {
  // ... existing components
  MyMDXComponent,
};
```

### 🚀 Deployment

The app auto-deploys to [Fly.io](https://fly.io) when code is merged to `main`.

**Manual deployment:**

```bash
fly deploy
```

**CI/CD Pipeline:**

- **Pull Requests:** Run linting, type checking, and build tests
- **Main Branch:** Automatically deploy to production after all checks pass

### 🐛 Debugging Tips

- **Build Issues:** Check `bun run build` output for errors
- **Type Errors:** Run `bun run type-check` for detailed TypeScript feedback
- **Styling Issues:** Tailwind classes are purged in production - ensure they're used correctly
- **MDX Problems:** Check the MDX compilation in the build logs

---

## 🤝 Contributing Guidelines

### 🎨 Code Style

- Use **TypeScript** for all new code
- Follow the existing **Tailwind CSS** patterns
- Use **functional components** with hooks
- Write **meaningful variable names**

### 📋 Pull Request Process

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Ensure all checks pass (CI will verify)
5. Submit a pull request with a clear description

### 🐛 Reporting Issues

- Use the GitHub issue tracker
- Include steps to reproduce
- Add screenshots for UI issues
- Mention your browser/OS if relevant

---

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- **TanStack** for the amazing Start framework
- **Bun** for the lightning-fast runtime
- **Radix UI** and **shadcn/ui** for the component library
- **Fly.io** for reliable hosting
- All our **contributors** who make this project possible!

---

**Happy Learning! 🤖✨**

Ready to dive into robotics programming? [Start your journey at RoboDOJO!](https://robotics-lms-tanstack.fly.dev/)
