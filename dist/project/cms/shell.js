"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const baseShell_1 = require("../../baseShell");
const constant_1 = require("./constant");
const constant_2 = require("../../constant");
const fs = require("fs");
class CMSBlog extends baseShell_1.default {
    constructor() {
        super(...arguments);
        this.gitAddress = constant_1.GIT_ADDRESS;
        this.floderName = constant_1.FLODER_NAME;
        this.localPath = constant_2.ASSETS_PATH + constant_1.FLODER_NAME;
        this.fontendPath = constant_2.ASSETS_PATH + constant_1.FLODER_NAME + '/fontend';
        this.backendPath = constant_2.ASSETS_PATH + constant_1.FLODER_NAME + '/backend';
    }
    clone() {
        if (fs.existsSync(this.localPath)) {
            this.echo('该目录已有项目');
            return;
        }
        this.runExec(`git clone ${this.gitAddress} ${this.localPath}`);
    }
    backendInstall() {
        this.cd(this.backendPath);
        this.exec('yarn');
    }
    backendStart() {
        this.cd(this.backendPath);
        this.exec('yarn server:product');
    }
    fontendStart() {
        this.cd(this.fontendPath);
        this.exec('yarn server:product');
    }
    fontednInstall() {
        this.cd(this.fontendPath);
        this.exec('yarn');
    }
    initStall() {
        this.cd(this.backendPath);
        this.exec('yarn');
        this.cd(this.fontendPath);
        this.exec('yarn');
    }
    start() {
        this.backendStart();
        this.fontendStart();
    }
}
exports.default = new CMSBlog();
//# sourceMappingURL=shell.js.map