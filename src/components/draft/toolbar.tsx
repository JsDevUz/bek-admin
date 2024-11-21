import React from "react";
import { RichUtils } from "draft-js";
import {
  FaBold,
  FaItalic,
  FaUnderline,
  FaHighlighter,
  FaStrikethrough,
  FaSuperscript,
  FaSubscript,
  FaTextWidth,
  FaQuoteRight,
  FaListUl,
  FaListOl,
  FaCode,
  FaChevronUp,
  FaChevronDown,
  FaAlignLeft,
  FaAlignCenter,
  FaAlignRight,
} from "react-icons/fa";

const Toolbar = ({ editorState, setEditorState }) => {
  const tools = [
    {
      label: "bold",
      style: "BOLD",
      icon: <FaBold className="dark:text-white text-[#1d2533]" />,
      method: "inline",
    },
    {
      label: "italic",
      style: "ITALIC",
      icon: <FaItalic className="dark:text-white text-[#1d2533]" />,
      method: "inline",
    },
    {
      label: "underline",
      style: "UNDERLINE",
      icon: <FaUnderline className="dark:text-white text-[#1d2533]" />,
      method: "inline",
    },
    {
      label: "highlight",
      style: "HIGHLIGHT",
      icon: <FaHighlighter className="dark:text-white text-[#1d2533]" />,
      method: "inline",
    },
    {
      label: "strike-through",
      style: "STRIKETHROUGH",
      icon: <FaStrikethrough className="dark:text-white text-[#1d2533]" />,
      method: "inline",
    },
    {
      label: "Superscript",
      style: "SUPERSCRIPT",
      icon: <FaSuperscript className="dark:text-white text-[#1d2533]" />,
      method: "inline",
    },
    {
      label: "Subscript",
      style: "SUBSCRIPT",
      icon: <FaSubscript className="dark:text-white text-[#1d2533]" />,
      method: "inline",
    },
    {
      label: "Monospace",
      style: "CODE",
      icon: <FaTextWidth className="dark:text-white text-[#1d2533]" />,
      method: "inline",
    },
    {
      label: "Blockquote",
      style: "blockQuote",
      icon: <FaQuoteRight className="dark:text-white text-[#1d2533]" />,
      method: "block",
    },
    {
      label: "Unordered-List",
      style: "unordered-list-item",
      icon: <FaListUl className="dark:text-white text-[#1d2533]" />,
      method: "block",
    },
    {
      label: "Ordered-List",
      style: "ordered-list-item",
      icon: <FaListOl className="dark:text-white text-[#1d2533]" />,
      method: "block",
    },
    {
      label: "Code Block",
      style: "CODEBLOCK",
      icon: <FaCode className="dark:text-white text-[#1d2533]" />,
      method: "inline",
    },
    {
      label: "Uppercase",
      style: "UPPERCASE",
      icon: <FaChevronUp className="dark:text-white text-[#1d2533]" />,
      method: "inline",
    },
    {
      label: "lowercase",
      style: "LOWERCASE",
      icon: <FaChevronDown className="dark:text-white text-[#1d2533]" />,
      method: "inline",
    },
    {
      label: "Left",
      style: "leftAlign",
      icon: <FaAlignLeft className="dark:text-white text-[#1d2533]" />,
      method: "block",
    },
    {
      label: "Center",
      style: "centerAlign",
      icon: <FaAlignCenter className="dark:text-white text-[#1d2533]" />,
      method: "block",
    },
    {
      label: "Right",
      style: "rightAlign",
      icon: <FaAlignRight className="dark:text-white text-[#1d2533]" />,
      method: "block",
    },
    { label: "H1", style: "header-one", method: "block" },
    { label: "H2", style: "header-two", method: "block" },
    { label: "H3", style: "header-three", method: "block" },
    { label: "H4", style: "header-four", method: "block" },
    { label: "H5", style: "header-five", method: "block" },
    { label: "H6", style: "header-six", method: "block" },
  ];

  const applyStyle = (e, style, method) => {
    e.preventDefault();
    method === "block"
      ? setEditorState(RichUtils.toggleBlockType(editorState, style))
      : setEditorState(RichUtils.toggleInlineStyle(editorState, style));
  };

  const isActive = (style, method) => {
    if (method === "block") {
      const selection = editorState.getSelection();
      const blockType = editorState
        .getCurrentContent()
        .getBlockForKey(selection.getStartKey())
        .getType();
      return blockType === style;
    } else {
      const currentStyle = editorState.getCurrentInlineStyle();
      return currentStyle.has(style);
    }
  };

  return (
    <div className="toolbar-grid">
      {tools.map((item, idx) => (
        <button
          style={{
            color: isActive(item.style, item.method)
              ? "rgba(0, 0, 0, 1)"
              : "rgba(0, 0, 0, 0.3)",
          }}
          key={`${item.label}-${idx}`}
          title={item.label}
          onClick={(e) => applyStyle(e, item.style, item.method)}
          onMouseDown={(e) => e.preventDefault()}
        >
          {item.icon || item.label}
        </button>
      ))}
    </div>
  );
};

export default Toolbar;
