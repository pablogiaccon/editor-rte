import { SetStateAction, useEffect, useRef, useState } from 'react';

import RichTextEditor, { EditorValue, ToolbarConfig } from 'react-rte';

import { Container } from './styles';

export default function EditorContainer() {
  const editorRef = useRef(null);


  const [convertedText, setConvertedText] = useState('');
  const [editorState, setEditorState] = useState(
    RichTextEditor.createEmptyValue(),
  );
  const counterCaracter = editorState
    .getEditorState()
    .getCurrentContent()
    .getPlainText().length;

  // useEffect(() => {
  //   if (description) {
  //     setEditorState(RichTextEditor.createValueFromString(description, 'html'));
  //     setConvertedText(description);
  //   }
  // }, [description]);

  const handleChangeEditor = (editorText: SetStateAction<EditorValue>) => {
    setEditorState(editorText);
    setConvertedText(editorText.toString('html'));
    // setTextDescription(editorText.toString('markdown'));
  };

  const toolbarConfig: ToolbarConfig = {
    display: [
      'INLINE_STYLE_BUTTONS',
      'BLOCK_TYPE_BUTTONS',
      'BLOCK_TYPE_DROPDOWN',
      'HISTORY_BUTTONS',
    ],
    INLINE_STYLE_BUTTONS: [
      { label: 'Bold', style: 'BOLD', className: 'custom-css-class' },
      { label: 'Italic', style: 'ITALIC' },
      { label: 'Underline', style: 'UNDERLINE' },
    ],
    BLOCK_TYPE_DROPDOWN: [
      { label: 'Normal', style: 'unstyled' },
      { label: 'Título 1', style: 'header-one' },
      { label: 'Título 2', style: 'header-two' },
      { label: 'Título 3', style: 'header-three' },
    ],
    BLOCK_TYPE_BUTTONS: [
      { label: 'UL', style: 'unordered-list-item' },
      { label: 'OL', style: 'ordered-list-item' },
    ],
  };

  useEffect(() => {

    console.log(convertedText.replaceAll('<p><br></p>', '').trim().length !== 0
    ? convertedText
    : null);


  }, [convertedText]);

  return (
    <Container>
      <RichTextEditor
        ref={editorRef}
        value={editorState}
        onChange={handleChangeEditor}
        toolbarConfig={toolbarConfig}
        editorClassName="editor"
        className="editor-container"
      />
        <code>{convertedText}</code>
    </Container>
  );
}
