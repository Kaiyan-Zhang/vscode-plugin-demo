import * as vscode from "vscode";
import { createCssPasteCommand } from "./utils/createCssPasteCommand";
import { commands } from "./constans/commands";
import { readFromSelection } from "./utils/vscodeHelpers/readFromSelection";
import { convertPxToRem } from "./utils/textHelpers/convertPxToRem";
import { COMMAND_PREFIX } from "./constans/COMMAND_PREFIX";
import { replaceCurrentSelection } from "./utils/vscodeHelpers/replaceCurrentSelection";

export function activate(context: vscode.ExtensionContext) {
  commands.forEach(({ name, processors }) => {
    const command = vscode.commands.registerCommand(
      `${COMMAND_PREFIX}.${name}`,
      createCssPasteCommand(processors)
    );
    context.subscriptions.push(command);
  });

  const px_to_rem = vscode.commands.registerCommand(
    `${COMMAND_PREFIX}.px_to_rem`,
    async () => {
      const selection = readFromSelection();
      const px2remText = convertPxToRem(selection);
      await replaceCurrentSelection(px2remText);
    }
  );
  context.subscriptions.push(px_to_rem);
}

export function deactivate() {}
