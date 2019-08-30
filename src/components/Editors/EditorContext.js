import { createContext } from "react";

const EditorContext = createContext();

export const { Provider: EditorCtxProvider, Consumer: EditorCtxConsumer } = EditorContext;

export default EditorContext;