import React, { useState, useEffect } from "react";
import Markdown from "react-markdown";
import NunkaContent from "../Markdown/Nunka.md";

function Rutas() {
  const [markdownContent, setMarkdownContent] = useState("");

  useEffect(() => {
    const fetchMarkdown = async () => {
      try {
        const response = await fetch(NunkaContent);
        const text = await response.text();
        setMarkdownContent(text);
      } catch (error) {
        console.error("Error fetching Markdown content:", error);
      }
    };

    fetchMarkdown();
  }, []);

  return (
    <div>
      <Markdown>{markdownContent}</Markdown>
    </div>
  );
}

export { Rutas };
