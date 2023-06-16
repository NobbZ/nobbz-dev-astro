import * as React from "react";
import { MDXProvider } from "@mdx-js/react";
import type { Components, Props as MDXProviderProps } from "@mdx-js/react/lib";
import Pre from "./pre";

type MDXWrapperProps = Omit<MDXProviderProps, "components">;

const combineClasses = (...classes: (string | undefined)[]) => {
  return classes.filter((e) => e !== undefined).join(" ");
};

const P = (props: React.HTMLAttributes<HTMLParagraphElement>) => {
  const { className: classes, ...newProps } = props;
  const className = combineClasses("lg:m-1.5", "m-1", classes);

  return <p className={className} {...newProps} />;
};

const H2 = (props: React.HTMLAttributes<HTMLHeadingElement>) => {
  const { className: classes, ...newProps } = props;
  const className = combineClasses(
    "w-full",
    "font-bold",
    "mt-5",
    "text-xl",
    "text-center",
    "md:relative",
    "md:left-[calc((var(--content-width)-var(--box-width))/2-var(--article-padding))]",
    // md:left-[calc((var(--content-width)-var(--box-width))/2)]
    "md:w-[--box-width]",
    "md:text-3xl",
    classes
  );

  return <h2 className={className} {...newProps} />;
};

const Code = (props: React.HTMLAttributes<HTMLElement>) => {
  const { className: classes, ...newProps } = props;
  const className = combineClasses(
    "bg-[rgb(220,220,220)]",
    "p-0.5",
    "rounded-md",
    classes
  );

  return <code className={className} {...newProps} />;
};

const A = (props: React.HTMLAttributes<HTMLElement>) => {
  const { className: classes, ...newProps } = props;
  const className = combineClasses("underline", "text-blue-700", classes);

  return <a className={className} {...newProps} />;
};

const BlockQuote = (props: React.HTMLAttributes<HTMLElement>) => {
  const { className: classes, ...newProps } = props;

  const className = combineClasses(
    "max-w-[calc(var(--box-width)*95%)]",
    "md:relative",
    "md:left-[calc((var(--content-width)-(var(--box-width)*0.95))/2)]",
    "md:w-[calc(var(--box-width)*0.95)]",
    "bg-quote",
    "bg-box",
    "bg-[#f0f7fb]",
    "px-[calc(2.25em+9px*2)]",
    "py-[calc((2.25em+9px*2)/4)]",
    "bg-no-repeat",
    "shadow-xl",
    "my-5",
    "rounded-md",
    classes
  );

  return <blockquote className={className} {...newProps} />;
};

const Ol = (props: React.HTMLAttributes<HTMLElement>) => {
  const { className: classes, ...newProps } = props;
  const className = combineClasses(classes); // TODO: add more classes

  return <ol className={className} {...newProps} />;
};

const Ul = (props: React.HTMLAttributes<HTMLElement>) => {
  const { className: classes, ...newProps } = props;
  const className = combineClasses(classes); // TODO: add more classes

  return <ul className={className} {...newProps} />;
};

const Li = (props: React.HTMLAttributes<HTMLElement>) => {
  const { className: classes, ...newProps } = props;
  const className = combineClasses(classes); // TODO: add more classes

  return <li className={className} {...newProps} />;
};

const Em = (props: React.HTMLAttributes<HTMLElement>) => {
  const { className: classes, ...newProps } = props;
  const className = combineClasses(classes); // TODO: add more classes

  return <em className={className} {...newProps} />;
};

const dontUse = (name: string) => {
  return () => {
    throw new Error(`dont use ${name}`);
  };
};

const implement = (name: string) => {
  return () => {
    throw new Error(`implement ${name}`);
  };
};

const components: Components = {
  p: P,
  h1: dontUse("h1"),
  h2: H2,
  h3: implement("h3"),
  h4: implement("h4"),
  h5: implement("h5"),
  h6: implement("h6"),
  thematicBreak: implement("thematicBreak"),
  blockquote: BlockQuote,
  ul: Ul,
  ol: Ol,
  li: Li,
  table: implement("table"),
  tr: implement("tr"),
  td: implement("td"),
  th: implement("th"),
  pre: Pre,
  em: Em,
  strong: implement("strong"),
  delete: implement("delete"),
  code: Code,
  inlineCode: implement("inlineCode"),
  hr: implement("hr"),
  a: A,
  img: implement("img"),
};

const MDXWrapper = (props: MDXWrapperProps) => {
  const { children, ...newProps } = props;

  return (
    <MDXProvider components={components} {...newProps}>
      {children}
    </MDXProvider>
  );
};

export default MDXWrapper;
