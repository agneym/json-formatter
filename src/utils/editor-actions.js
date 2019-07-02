import * as monaco from 'monaco-editor/esm/vs/editor/editor.api.js';

/**
 * Get create function for the editor.
 * @returns {Object} config
 * @returns {function} config.createEditor - Function to create or return the editor already created.
 * @returns {function} config.destory - Function to destory current editor instance
 * @returns {function} config.format - Function to format the editor 
 */
function getEditor() {
  let editor = null;

  /**
   * Create or return the editor instance
   * @param {DOMNode} container 
   * @returns {Object}
   */
  const createEditor = (container) => {
    if(!editor) {
      editor = monaco.editor.create(container, {
        value: ``,
        language: "json",
        formatOnPaste: true,
        formatOnType: true,
      });
    }
    return editor;
  }

  /**
   * Destory editor instance if already created.
   */
  const destroy = () => {
    if(editor) {
      editor.dispose();
      editor = null;
    }
  }

  /**
   * Format the editor document.
   */
  const format = () => {
    if(!editor) {
      return;
    }
    editor.getAction('editor.action.formatDocument').run();
  }

  return {
    createEditor,
    destroy,
    format
  };
}

export default getEditor;