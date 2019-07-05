import * as monaco from 'monaco-editor/esm/vs/editor/editor.api.js';

/**
 * Get create function for the editor.
 * @returns {Object} config
 * @returns {function} config.createEditor - Function to create or return the editor already created.
 * @returns {function} config.destory - Function to destory current editor instance
 * @returns {function} config.format - Function to format the editor
 * @returns {function} config.updateFormatOptions - Function to update options to format a document
 * @returns {function} config.updateJsonOptions - Function to update JSON options
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

  /**
   * Update formatting options for editor
   * @param {Object} options 
   */
  const updateFormatOptions = (options) => {
    if(!editor) {
      return;
    } 
    const model = editor.getModel();
    model.updateOptions(options);
    format();
  }

  const updateJsonOptions = (options) => {
    console.log(options)
    if(!editor) {
      return;
    }
    monaco.languages.json.jsonDefaults.setDiagnosticsOptions(options);
  }

  return {
    createEditor,
    destroy,
    format,
    updateFormatOptions,
    updateJsonOptions,
  };
}

export default getEditor;