// Tell Monaco how to spin up its web workers. rspack bundles each worker
// as a separate chunk via the `new Worker(new URL(...))` syntax.
self.MonacoEnvironment = {
  getWorker(_workerId, label) {
    if (label === "json") {
      return new Worker(
        new URL("monaco-editor/language/json/json.worker.js", import.meta.url)
      );
    }
    return new Worker(
      new URL("monaco-editor/editor/editor.worker.js", import.meta.url)
    );
  },
};
