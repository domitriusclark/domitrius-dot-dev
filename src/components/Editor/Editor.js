import React from 'react';
import { createEditor } from 'slate';
import { Slate, Editable, withReact } from 'slate-react';

export default function Editor({ value, setValue }) {
  const editor = React.useMemo(() => withReact(createEditor()), []);

  return (
    <Slate
      editor={editor}
      value={value}
      onChange={(newValue) => setValue(newValue)}
      onSelect={() => {
        /**
         * Chrome doesn't scroll at bottom of the page. This fixes that.
         */
        if (!window.chrome) return;
        if (editor.selection == null) return;
        try {
          /**
           * Need a try/catch because sometimes you get an error like:
           *
           * Error: Cannot resolve a DOM node from Slate node: {"type":"p","children":[{"text":"","by":-1,"at":-1}]}
           */
          const domPoint = ReactEditor.toDOMPoint(
            editor,
            editor.selection.focus,
          );
          const node = domPoint[0];
          if (node == null) return;
          const element = node.parentElement;
          if (element == null) return;
          element.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        } catch (e) {
          /**
           * Empty catch. Do nothing if there is an error.
           */
        }
      }}
    >
      <Editable spellCheck="false" placeholder="Start typing your post..." />
    </Slate>
  );
}
