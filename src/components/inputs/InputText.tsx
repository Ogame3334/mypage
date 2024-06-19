import React, { useState, useRef, useEffect } from 'react';
import './InputText.css';

export default function InputText({ labelName, isTextarea = false }: { labelName: string, isTextarea?: boolean }) {
  const [hasContent, setHasContent] = useState(false);
  const inputRef = useRef<HTMLTextAreaElement & HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      setHasContent(inputRef.current.value.length > 0);
      if (isTextarea) {
        autoResize();
      }
    }
  }, []);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setHasContent(e.target.value.length > 0);
    if (isTextarea) {
      autoResize();
    }
  };

  const autoResize = () => {
    if (inputRef.current) {
      inputRef.current.style.height = 'auto';
      inputRef.current.style.overflowY = 'hidden';
      if (inputRef.current.scrollHeight > 200) {
        inputRef.current.style.height = '200px';
        inputRef.current.style.overflowY = 'auto';
      } else {
        inputRef.current.style.height = `${inputRef.current.scrollHeight}px`;
      }
    }
  };

  return (
    <div className={`cp_iptxt ${hasContent ? 'has-content' : ''}`}>
      {isTextarea ? (
        <textarea ref={inputRef} className="ef" placeholder="" onChange={handleInput} />
      ) : (
        <input ref={inputRef} className="ef" type="text" placeholder="" onChange={handleInput} />
      )}
      <label>{labelName}</label>
      <span className="focus_line"></span>
    </div>
  );
}
