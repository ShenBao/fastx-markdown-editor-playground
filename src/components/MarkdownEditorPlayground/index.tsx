import { useState } from "react";
import MarkdownEditor from "@uiw/react-markdown-editor";
import DocumentStr from "@uiw/react-markdown-editor/README.md?raw";
import "./index.scss";

const DocumentStrSource = DocumentStr.replace(
  /([\s\S]*)<!--dividing-->/,
  ""
).replace(/^\n*/g, "");
let count = 1;

const MarkdownEditorPlayground = () => {
  const [visible, setVisible] = useState(true);
  const [mdstr, setMdstr] = useState<string>(DocumentStrSource);
  const [hideToolbar, setHideToolbar] = useState(true);
  const [toolbarBottom, setToolbarBottom] = useState(false);
  const [enableScroll, setEnableScroll] = useState(true);

  return (
    <div className="fastx-markdown-editor-playground-wrapper">
      <div
        className="tool-wrapper"
        style={{ marginTop: 10, display: "flex", gap: "10px" }}
      >
        <button
          onClick={() => {
            count += 1;
            setMdstr(`String ${count}`);
          }}
        >
          Modify Markdown
        </button>
        <label>
          <input
            type="checkbox"
            checked={hideToolbar}
            onChange={(evn) => setHideToolbar(evn.target.checked)}
          />
          showToolbar
        </label>
        <label>
          <input
            type="checkbox"
            checked={enableScroll}
            onChange={(evn) => setEnableScroll(evn.target.checked)}
          />
          enableScroll
        </label>
        <label>
          <input
            type="checkbox"
            checked={toolbarBottom}
            onChange={(evn) => setToolbarBottom(evn.target.checked)}
          />
          toolbarBottom
        </label>
        <button onClick={() => setVisible(!visible)}>
          {visible ? "Show" : "Hide"}
        </button>
      </div>
      <div className="markdown-editor-wrapper">
        <div className="editor-wrapper">
          <MarkdownEditor
            visible={visible}
            value={mdstr}
            height={`${window.screen.height - 350}px`}
            enableScroll={enableScroll}
            showToolbar={hideToolbar}
            toolbarBottom={toolbarBottom}
          />
        </div>
      </div>
    </div>
  );
};

export default MarkdownEditorPlayground;
