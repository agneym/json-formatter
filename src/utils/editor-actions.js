import * as monaco from "monaco-editor/esm/vs/editor/editor.api.js";

/**
 * Get create function for the editor.
 * @returns {Object} config
 * @returns {function} config.createEditor - Function to create or return the editor already created.
 * @returns {function} config.destory - Function to destory current editor instance
 * @returns {function} config.find - Trigger find in the editor
 * @returns {function} config.format - Function to format the editor
 * @returns {function} config.updateFormatOptions - Function to update options to format a document
 * @returns {function} config.updateJsonOptions - Function to update JSON options
 * @returns {function} config.changeTheme - Function to change theme
 * @returns {function} config.getValue - gets the text in editor
 * @returns {function} config.setValue - sets the text in editor
 * @returns {function} config.createJsonModel - sets the text in editor
 */
function getEditor() {
  let editor = null;
  let model = null;

  /**
   * Create or return the editor instance
   * @param {DOMNode} container
   * @returns {Object}
   */
  const createEditor = container => {
    if (!editor) {
      editor = monaco.editor.create(container, {
        formatOnPaste: true,
        formatOnType: true,
        fontSize: "16px",
        minimap: {
          enabled: false,
        },
      });
    }
    return editor;
  };

  const createJsonModel = () => {
    if (!editor) {
      return;
    }
    if (!model) {
      model = monaco.editor.createModel(``, "json");
      editor.setModel(model);
    }
    return model;
  };

  const createJsModel = (value) => {
    if (!editor) {
      return;
    }
    if (!model) {
      model = monaco.editor.createModel(value || "", "javascript", "transformation.js");
      editor.setModel(model);
    }
    return model;
  };

  const setValue = value => {
    if (!editor) {
      return;
    }
    model.setValue(value);
  };

  const getValue = () => {
    if (!editor) {
      return;
    }
    return model.getValue();
  };

  /**
   * Destory editor instance if already created.
   */
  const destroy = () => {
    if (editor) {
      editor.dispose();
      model = null;
      editor = null;
    }
  };

  /**
   * Format the editor document.
   */
  const format = () => {
    if (!editor) {
      return;
    }
    editor.getAction("editor.action.formatDocument").run();
  };

  /**
   * Format the editor document.
   */
  const find = () => {
    if (!editor) {
      return;
    }
    editor.getAction("actions.find").run();
  };

  /**
   * Update formatting options for editor
   * @param {Object} options
   */
  const updateFormatOptions = options => {
    if (!editor) {
      return;
    }
    const model = editor.getModel();
    model.updateOptions(options);
    format();
  };

  const updateJsonOptions = options => {
    if (!editor) {
      return;
    }
    monaco.languages.json.jsonDefaults.setDiagnosticsOptions(options);
  };

  const changeTheme = theme => {
    if (!editor) {
      return;
    }
    monaco.editor.setTheme(theme);
  };

  return {
    createEditor,
    changeTheme,
    destroy,
    find,
    format,
    getValue,
    setValue,
    updateFormatOptions,
    updateJsonOptions,
    createJsModel,
    createJsonModel,
  };
}

export default getEditor;
