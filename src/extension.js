const vscode = require('vscode');
const { previewFile } = require('./logic/febraban');

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
	const cmdUnregister = vscode.commands.registerCommand('automatic-debit-febraban-layout-previewer.execute', function () {
		const editor = vscode.window.activeTextEditor;
		if (!editor) {
			return;
		}

		const initialText = previewFile(editor.document.getText());
		let previewTextDocument = null;

		vscode.workspace.openTextDocument({ language: "json", content: initialText })
			.then(doc => {
				previewTextDocument = doc;
				vscode.window.showTextDocument(doc, vscode.ViewColumn.Beside, true);
			});

		const unsubscribe = vscode.workspace.onDidChangeTextDocument((e) => {
			if (e.document != editor.document) {
				return;
			}

			const previewTextEditor = vscode.window.visibleTextEditors.find(e => e.document === previewTextDocument);
			if (previewTextEditor) {
				previewTextEditor.edit(b =>
					b.replace(new vscode.Range(previewTextDocument.lineAt(0).range.start,
						previewTextDocument.lineAt(previewTextDocument.lineCount - 1).range.end),
						previewFile(editor.document.getText())))
			}
		});
		context.subscriptions.push(unsubscribe);
	});

	context.subscriptions.push(cmdUnregister);
}

function deactivate() { }

module.exports = {
	activate,
	deactivate
}
