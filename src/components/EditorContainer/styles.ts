import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: stretch;

  flex: 1;
  max-width: 120rem;

  code {
    flex: 1;
    height: 30rem;
    border: 1px solid var(--color-gray);
    padding: 1.2rem;
    margin-left: 2.4rem;

    box-shadow: var(--shadow-small);
  }

  .editor-container {
    flex: 1;
    box-shadow: var(--shadow-small);

  }

  .RichTextEditor__root___2QXK- {
    border-color: var(--color-gray);
    color: var(--color-gray);
  }

  .DraftEditor-editorContainer {
    padding: 0.1rem;
    font: 400 1.4rem sans-serif;
    word-break: break-all;
    height: 30rem;
  }

  .notranslate.public-DraftEditor-content {
    height: 28.5rem;
  }
`;
