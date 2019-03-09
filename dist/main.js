"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const command_prompt_1 = require("command-prompt");
const config_1 = require("./project/cms/config");
const question = {
    name: '选择你要进行的项目',
    choices: [
        config_1.default,
        {
            name: 'exit',
            method: () => process.exit()
        }
    ]
};
function bootstrap() {
    command_prompt_1.default(question);
}
bootstrap();
//# sourceMappingURL=main.js.map