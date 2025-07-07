// Custom MDX Components for styling markdown elements
export const mdxComponents = {
  h1: (props: any) => (
    <h1
      className="mb-6 pb-2 border-[#3e3e42] border-b font-bold text-[#4ec9b0] text-3xl"
      {...props}
    />
  ),
  h2: (props: any) => (
    <h2
      className="mt-8 mb-4 font-semibold text-[#569cd6] text-2xl"
      {...props}
    />
  ),
  h3: (props: any) => (
    <h3 className="mt-6 mb-3 font-medium text-[#dcdcaa] text-xl" {...props} />
  ),
  h4: (props: any) => (
    <h4 className="mt-4 mb-2 font-medium text-[#dcdcaa] text-lg" {...props} />
  ),
  p: (props: any) => (
    <p className="mb-4 text-[#cccccc] leading-relaxed" {...props} />
  ),
  code: (props: any) => (
    <code
      className="bg-[#2d2d30] px-2 py-1 rounded font-mono text-[#ce9178] text-sm"
      {...props}
    />
  ),
  pre: (props: any) => (
    <pre
      className="bg-[#1e1e1e] mb-6 p-4 border border-[#3e3e42] rounded-lg overflow-x-auto"
      {...props}
    />
  ),
  blockquote: (props: any) => (
    <blockquote
      className="bg-[#252526] my-4 py-2 pl-4 border-[#007acc] border-l-4 text-[#cccccc] italic"
      {...props}
    />
  ),
  ul: (props: any) => (
    <ul
      className="space-y-1 mb-4 text-[#cccccc] list-disc list-inside"
      {...props}
    />
  ),
  ol: (props: any) => (
    <ol
      className="space-y-1 mb-4 text-[#cccccc] list-decimal list-inside"
      {...props}
    />
  ),
  li: (props: any) => <li className="ml-2 text-[#cccccc]" {...props} />,
  a: (props: any) => (
    <a
      className="text-[#569cd6] hover:text-[#4ec9b0] underline transition-colors"
      {...props}
    />
  ),
  strong: (props: any) => (
    <strong className="font-bold text-[#dcdcaa]" {...props} />
  ),
  em: (props: any) => <em className="text-[#ce9178] italic" {...props} />,
  hr: (props: any) => <hr className="my-8 border-[#3e3e42]" {...props} />,
  table: (props: any) => (
    <table
      className="my-4 border border-[#3e3e42] w-full border-collapse"
      {...props}
    />
  ),
  th: (props: any) => (
    <th
      className="bg-[#252526] px-4 py-2 border border-[#3e3e42] font-semibold text-[#dcdcaa] text-left"
      {...props}
    />
  ),
  td: (props: any) => (
    <td
      className="px-4 py-2 border border-[#3e3e42] text-[#cccccc]"
      {...props}
    />
  ),
};
