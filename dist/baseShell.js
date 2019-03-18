"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const shelljs_1 = require("shelljs");
class ShellScript {
    runExec(command, options) {
        shelljs_1.cd(this.localPath);
        shelljs_1.echo(command);
        shelljs_1.exec(command, options);
    }
    clone() {
        this.runExec(`git clone ${this.gitAddress} ${this.localPath}`);
    }
    install() {
        this.runExec(`yarn`);
    }
    fetch() {
        this.runExec(`git fetch`);
    }
    pull() {
        this.runExec(`git pull`);
    }
    push() {
        this.runExec(`git push`);
    }
    start() {
        this.runExec(`yarn start`);
    }
    build() {
        this.runExec(`yarn build`);
    }
    cd(command) {
        shelljs_1.cd(command);
    }
    exec(command, options) {
        shelljs_1.exec(command, options);
    }
    echo(command) {
        shelljs_1.echo(command);
    }
}
exports.default = ShellScript;
//# sourceMappingURL=baseShell.js.map