"use client";

import SyntaxHighlighter from "react-syntax-highlighter";
import * as themes from "react-syntax-highlighter/dist/esm/styles/hljs";

export default function CodeViewer(props: {
  code: string;
  language: string;
  codeTheme: string;
}) {
  const { code, language, codeTheme } = props;
  const codeThemeTransform =
    codeTheme[0].toLowerCase() + codeTheme.slice(1).replaceAll("-", "");
  const codeThemeObj = themes[codeThemeTransform as keyof typeof themes];

  return (
    <section className="bg-[#1f1f1f] h-[calc(100vh-70px)] visor overflow-auto">
      <SyntaxHighlighter
        language={language}
        style={codeThemeObj}
        showLineNumbers={true}
        wrapLongLines={true}
      >
        {code!}
      </SyntaxHighlighter>
    </section>
  );
}
