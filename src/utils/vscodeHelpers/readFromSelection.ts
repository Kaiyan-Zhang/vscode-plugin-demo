import * as vscode from "vscode";

export const readFromSelection = () => {
  const editor = vscode.window.activeTextEditor;
  if (!editor) return "";
  const selection = editor.selection;
  return editor.document.getText(selection);
};
