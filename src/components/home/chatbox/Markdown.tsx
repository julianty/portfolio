import { marked } from "marked";

function Markdown({ raw }: { raw: string }) {
  const html = marked(raw);
  return <div dangerouslySetInnerHTML={{ __html: html }}></div>;
}

export default Markdown;
