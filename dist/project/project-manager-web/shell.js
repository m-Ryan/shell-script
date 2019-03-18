"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const baseShell_1 = require("../../baseShell");
const constant_1 = require("./constant");
const constant_2 = require("../../constant");
const fs = require("fs");
class Shell extends baseShell_1.default {
    constructor() {
        super(...arguments);
        this.gitAddress = constant_1.BACKEND_GIT_ADDRESS;
        this.floderName = constant_1.BACKEND_FLODER_NAME;
        this.localPath = constant_2.ASSETS_PATH + constant_1.BACKEND_FLODER_NAME;
        this.fontendPath = constant_2.ASSETS_PATH + constant_1.FONTEND_FLODER_NAME;
    }
    pullFontend() {
        this.cd(this.fontendPath);
        this.exec('git pull');
    }
    cloneFontend() {
        if (fs.existsSync(this.fontendPath)) {
            this.echo('该目录已有项目');
            return;
        }
        this.cd(this.fontendPath);
        this.exec(`git clone ${this.gitAddress} ${this.fontendPath}`);
    }
    clone() {
        if (fs.existsSync(this.localPath)) {
            this.echo('该目录已有项目');
            return;
        }
        this.runExec(`git clone ${this.gitAddress} ${this.localPath}`);
    }
    reset() {
        this.runExec('git reset --heart');
    }
}
exports.default = new Shell();
//# sourceMappingURL=shell.js.map