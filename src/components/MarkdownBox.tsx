import ReactMarkdown from 'react-markdown';
import './MarkdownBox.css';
import rehypeRaw from 'rehype-raw';
import { Inter } from "next/font/google";
import remarkGfm from 'remark-gfm';

const inter = Inter({ subsets: ["latin"] });

interface MarkdownBoxProp {
  src: string;
}

export default function MarkdownBox(props: MarkdownBoxProp){
  return (
    <>
      <div className={inter.className + ' markdown-box'}>
        <ReactMarkdown rehypePlugins={[rehypeRaw, remarkGfm]}>{props.src}</ReactMarkdown>
      </div>
    </>
  )
}
