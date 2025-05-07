import * as vscode from "vscode";

export const insertAtCursor = async (text: string) => {
  const editor = vscode.window.activeTextEditor;
  if (!editor) {
    return;
  }
  await editor.edit((editBuilder) => {
    editBuilder.insert(editor.selection.active, text);
  });
};
