"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const shell_1 = require("./shell");
const ManagerConfig = {
    name: '项目web管理',
    choices: [
        {
            name: '克隆项目到目录',
            method() {
                shell_1.default.clone();
            }
        },
        {
            name: '安装依赖',
            method(again) {
                shell_1.default.install();
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
            name: '项目发布',
            method() {
                shell_1.default.start();
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
exports.default = ManagerConfig;
//# sourceMappingURL=config.js.map