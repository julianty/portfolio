import { useEffect, useState } from "react";
import { codeToHtml } from "shiki";

interface CodeBlockProps {
  code: string;
  language?: string;
}

const CodeBlock = ({ code, language = "tsx" }: CodeBlockProps) => {
  const [html, setHtml] = useState("");

  useEffect(() => {
    codeToHtml(code, {
      lang: language,
      themes: { light: "github-light", dark: "dracula" },
    }).then(setHtml);
  }, [code, language]);

  return (
    <div
      className="max-h-96 overflow-y-auto rounded-xl border border-border/50 bg-card/50 text-sm [&_pre]:overflow-x-auto [&_pre]:p-5"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};

export default CodeBlock;
