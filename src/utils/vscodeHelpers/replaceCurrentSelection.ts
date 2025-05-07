import * as vscode from "vscode";

export const replaceCurrentSelection = async (text: string) => {
  const editor = vscode.window.activeTextEditor;
  // 增加选区数量检查，确保只有一个选区时执行替换
  if (!editor || editor.selections.length !== 1) {
    return;
  }
  await editor.edit((editBuilder) => {
    // 仅替换主选区内容
    editBuilder.replace(editor.selection, text);
  });
};
