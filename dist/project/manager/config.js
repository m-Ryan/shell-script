"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const shell_1 = require("./shell");
const Manager = {
    name: 'project-manager-web',
    choices: [
        {
            name: '克隆前端项目到目录',
            method() {
                shell_1.default.clone();
            }
        },
        {
            name: '克隆后端项目到目录',
            method() {
                shell_1.default.clone();
            }
        },
        {
            name: '初始化项目',
            method(again) {
                shell_1.default.install();
                again();
            }
        },
        {
            name: '拉取前端静态资源',
            method(again) {
                shell_1.default.pull();
                again();
            }
        },
        {
            name: '获取后端更新',
            method(again) {
                shell_1.default.pull();
                again();
            }
        },
        {
            name: '发布',
            method() {
                shell_1.default.start();
            }
        },
        {
            name: '重置分支',
            method() {
                shell_1.default.reset();
            }
        },
        {
            name: '退出',
            method: () => {
                process.exit();
            }
        }
    ]
};
exports.default = Manager;
//# sourceMappingURL=config.js.map