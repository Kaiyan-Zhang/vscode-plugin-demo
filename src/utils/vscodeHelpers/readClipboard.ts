import * as vscode from "vscode";

export const readClipboard = async () => {
  const clipboardText = await vscode.env.clipboard.readText();
  return clipboardText;
};
