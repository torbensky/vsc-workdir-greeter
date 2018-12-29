import * as vscode from 'vscode';

export function greetWorkingDirectory() {
    let folders = vscode.workspace.workspaceFolders
    // note: docs say 'undefined' <OR> array with `rootFolder` as first element
    if (folders == undefined) {
        return "No current working directory";
    } else {
        let rootDir = folders[0]
        return rootDir.uri.path;
    }
}