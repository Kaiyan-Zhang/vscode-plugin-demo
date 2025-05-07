import * as vscode from "vscode";
import { CssTurpleProcessor } from "../types";
import { insertAtCursor } from "./vscodeHelpers/insertAtCursor";
import { readClipboard } from "./vscodeHelpers/readClipboard";
import { cssBuilder } from "./cssHelpers/cssBuilder";
import { cssParser } from "./cssHelpers/cssParser";

export function createCssPasteCommand(processors: CssTurpleProcessor[]) {
  return async () => {
    const editor = vscode.window.activeTextEditor;
    if (!editor) return;

    const clipboardText = await readClipboard();
    let css = cssParser(clipboardText);

    // 按顺序应用处理器
    for (const processor of processors) {
      css = processor(css);
    }

    await insertAtCursor(cssBuilder(css));
  };
}
