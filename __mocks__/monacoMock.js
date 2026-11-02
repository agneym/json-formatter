import { vi } from "vitest";

// Monaco ships native ESM with web workers, which is heavy to load under jsdom.
// Provide a minimal stand-in for the parts of the API the app touches.
const model = {
  getValue: vi.fn(() => ""),
  setValue: vi.fn(),
  updateOptions: vi.fn(),
};
const editorInstance = {
  dispose: vi.fn(),
  setModel: vi.fn(),
  getModel: vi.fn(() => model),
  trigger: vi.fn(),
  getAction: vi.fn(() => ({ run: vi.fn() })),
};

export const editor = {
  create: vi.fn(() => editorInstance),
  createModel: vi.fn(() => model),
  createDiffEditor: vi.fn(() => ({
    setModel: vi.fn(),
    getModifiedEditor: vi.fn(() => editorInstance),
  })),
  setTheme: vi.fn(),
};

export const languages = {};

export const jsonDefaults = {
  setDiagnosticsOptions: vi.fn(),
};
