import { useEffect, useState } from "react";

interface TypingSentenceProp {
  text: string;
  delay?: number;
  duration?: number;
}

export default function TypingSentence({ text, delay = 0, duration }: TypingSentenceProp) {
  const [index, setIndex] = useState(0);
  const showDuration = duration || 200;

  useEffect(() => {
    const startTyping = () => {
      const itv = setInterval(() => {
        setIndex(i => {
          if (i < text.length) {
            return i + 1;
          }
          return i;
        });
      }, showDuration);

      return () => {
        clearInterval(itv);
      };
    };

    const timeout = setTimeout(startTyping, delay);

    return () => {
      clearTimeout(timeout);
    };
  }, [text, delay, showDuration]);

  const ReturnText = () => {
    return text.slice(0, index);
  };

  return (
    <div>
      {ReturnText()}
    </div>
  );
}
