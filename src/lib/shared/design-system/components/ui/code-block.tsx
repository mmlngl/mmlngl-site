import { createHighlighter } from "shiki";

const highlighter = await createHighlighter({
  themes: ["github-dark-default", "dracula"],
  langs: [
    "typescript",
    "tsx",
    "javascript",
    "jsx",
    "bash",
    "json",
    "html",
    "css",
    "markdown",
    "plaintext",
  ],
});

export interface CodeBlockProps {
  code: string;
  language?: string;
}

export const CodeBlock = ({ code, language = "plaintext" }: CodeBlockProps) => {
  try {
    const html = highlighter.codeToHtml(code, {
      lang: language,
      themes: {
        dark: "github-dark-default",
        light: "dracula",
      },
      defaultColor: false,
    });

    return (
      <div
        className="not-prose overflow-x-auto rounded-xl border border-border text-sm [&_pre]:m-0 [&_pre]:p-4 [&_pre]:bg-[var(--shiki-light-bg)] [&_pre]:text-[var(--shiki-light)] dark:[&_pre]:bg-[var(--shiki-dark-bg)] dark:[&_pre]:text-[var(--shiki-dark)] [&_code]:font-mono [&_span]:text-[var(--shiki-light)] dark:[&_span]:text-[var(--shiki-dark)]"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    );
  } catch {
    return (
      <pre className="not-prose overflow-x-auto rounded-xl border border-border bg-card p-4 text-sm">
        <code>{code}</code>
      </pre>
    );
  }
};
