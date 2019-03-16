"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const shell_1 = require("./shell");
const CMSConfig = {
    name: 'cms内容管理系统',
    choices: [
        {
            name: '克隆项目到目录',
            method() {
                shell_1.default.clone();
            }
        },
        {
            name: '初始化项目',
            method(again) {
                shell_1.default.initStall();
                again();
            }
        },
        {
            name: '获取更新',
            method(again) {
                shell_1.default.pull();
                again();
            }
        },
        {
            name: '后端安装依赖',
            method() {
                shell_1.default.backendInstall();
            }
        },
        {
            name: '前端安装依赖',
            method() {
                shell_1.default.fontednInstall();
            }
        },
        {
            name: '前后端发布',
            method() {
                shell_1.default.start();
            }
        },
        {
            name: '后端发布',
            method() {
                shell_1.default.backendStart();
            }
        },
        {
            name: '前端发布',
            method() {
                shell_1.default.fontendStart();
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
exports.default = CMSConfig;
//# sourceMappingURL=config.js.map