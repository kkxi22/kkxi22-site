import type { MDXComponents } from "mdx/types";
import { Children, isValidElement, type HTMLAttributes, type PropsWithChildren, type ReactNode } from "react";

function mergeClassName(...values: Array<string | undefined>) {
  return values.filter(Boolean).join(" ");
}

function Callout({
  children,
  tone = "default",
}: PropsWithChildren<{ tone?: "default" | "success" }>) {
  const tones = {
    default:
      "border-border bg-background-soft text-foreground",
    success:
      "border-[#9aca9d] bg-[#eef8ee] text-[#255b2e]",
  } as const;

  return (
    <div className={`callout my-6 rounded-2xl border px-4 py-3 text-sm leading-7 ${tones[tone]}`}>
      {children}
    </div>
  );
}

type CodeToken = {
  content: string;
  kind: "plain" | "comment" | "string" | "keyword" | "number" | "property" | "literal" | "command" | "flag" | "variable";
};

function getTextContent(node: ReactNode): string {
  if (typeof node === "string" || typeof node === "number") {
    return String(node);
  }

  if (Array.isArray(node)) {
    return node.map(getTextContent).join("");
  }

  if (isValidElement<{ children?: ReactNode }>(node)) {
    return getTextContent(node.props.children);
  }

  return "";
}

function tokenizeCodeLine(line: string, language: string): CodeToken[] {
  let matcher: RegExp;

  if (["ts", "tsx", "js", "jsx", "javascript", "typescript"].includes(language)) {
    matcher =
      /(\/\/.*$|\/\*.*?\*\/|"(?:\\.|[^"])*"|'(?:\\.|[^'])*'|`(?:\\.|[^`])*`|\b(?:const|let|var|function|return|export|import|from|if|else|for|while|switch|case|break|continue|try|catch|throw|new|await|async|class|extends|type|interface|implements|public|private|protected|default)\b|\b(?:true|false|null|undefined)\b|\b\d+(?:\.\d+)?\b)/g;
  } else if (["json"].includes(language)) {
    matcher = /("(?:\\.|[^"])*"(?=\s*:)|"(?:\\.|[^"])*"|\b(?:true|false|null)\b|\b\d+(?:\.\d+)?\b)/g;
  } else if (["bash", "sh", "shell", "zsh"].includes(language)) {
    matcher = /(#.*$|"(?:\\.|[^"])*"|'(?:\\.|[^'])*'|\$[A-Za-z_][\w]*|--?[A-Za-z0-9-]+|\b(?:cd|ls|pwd|find|sed|node|npm|pnpm|git|curl|echo|cat|cp|mv)\b)/g;
  } else {
    return [{ content: line, kind: "plain" }];
  }

  const tokens: CodeToken[] = [];
  let lastIndex = 0;

  for (const match of line.matchAll(matcher)) {
    const value = match[0];
    const index = match.index ?? 0;

    if (index > lastIndex) {
      tokens.push({ content: line.slice(lastIndex, index), kind: "plain" });
    }

    let kind: CodeToken["kind"] = "plain";

    if (value.startsWith("//") || value.startsWith("/*") || value.startsWith("#")) {
      kind = "comment";
    } else if (value.startsWith('"') || value.startsWith("'") || value.startsWith("`")) {
      kind = language === "json" && /":?$/.test(value) ? "property" : "string";
    } else if (value.startsWith("$")) {
      kind = "variable";
    } else if (value.startsWith("-")) {
      kind = "flag";
    } else if (/^\d/.test(value)) {
      kind = "number";
    } else if (/^(true|false|null|undefined)$/.test(value)) {
      kind = "literal";
    } else if (["bash", "sh", "shell", "zsh"].includes(language)) {
      kind = "command";
    } else {
      kind = "keyword";
    }

    tokens.push({ content: value, kind });
    lastIndex = index + value.length;
  }

  if (lastIndex < line.length) {
    tokens.push({ content: line.slice(lastIndex), kind: "plain" });
  }

  return tokens.length > 0 ? tokens : [{ content: line, kind: "plain" }];
}

function CodeBlock({ code, language }: { code: string; language: string }) {
  const normalizedLanguage = language.toLowerCase() || "text";
  const lines = code.replace(/\n$/, "").split("\n");

  return (
    <div className="code-block my-6 overflow-hidden rounded-2xl border border-border bg-background-soft">
      <div className="border-b border-border bg-background-elevated px-4 py-2 text-[0.7rem] font-medium uppercase tracking-[0.18em] text-foreground-soft">
        {normalizedLanguage}
      </div>
      <pre className="m-0 overflow-x-auto bg-transparent px-0 py-4 text-sm leading-7">
        <code className={`language-${normalizedLanguage}`}>
          {lines.map((line, index) => (
            <span key={`${normalizedLanguage}-${index}`} className="code-line">
              {line.length === 0 ? "\u00A0" : tokenizeCodeLine(line, normalizedLanguage).map((token, tokenIndex) => (
                <span key={`${normalizedLanguage}-${index}-${tokenIndex}`} className={`code-token code-token-${token.kind}`}>
                  {token.content}
                </span>
              ))}
            </span>
          ))}
        </code>
      </pre>
    </div>
  );
}

export const mdxComponents: MDXComponents = {
  h2: ({ className, ...props }) => <h2 {...props} className={mergeClassName(className, "font-semibold")} />,
  h3: ({ className, ...props }) => <h3 {...props} className={mergeClassName(className, "font-semibold")} />,
  p: (props) => <p {...props} />,
  a: ({ className, ...props }) => (
    <a
      {...props}
      className={mergeClassName(
        className,
        "text-foreground decoration-border-strong underline underline-offset-4 hover:text-foreground-soft",
      )}
    />
  ),
  ul: ({ className, ...props }) => <ul {...props} className={mergeClassName(className, "list-disc")} />,
  ol: ({ className, ...props }) => <ol {...props} className={mergeClassName(className, "list-decimal")} />,
  pre: ({ children, ...props }) => {
    const child = Children.count(children) === 1 ? Children.only(children) : null;

    if (isValidElement<HTMLAttributes<HTMLElement>>(child) && child.type === "code") {
      const language = child.props.className?.replace(/^language-/, "") ?? "text";
      const code = getTextContent(child.props.children);

      return <CodeBlock code={code} language={language} />;
    }

    return <pre {...props} className="my-6 text-sm leading-7">{children}</pre>;
  },
  blockquote: (props) => <blockquote {...props} />,
  table: ({ className, ...props }) => <table {...props} className={mergeClassName(className, "text-sm")} />,
  Callout,
};
