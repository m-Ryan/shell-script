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
    command_prompt_1.default({
        name: 'choose your project',
        choices: [
            {
                name: 'project1',
                choices: [
                    {
                        name: 'clone project',
                        method() {
                            console.log('git clone.....');
                        }
                    },
                    {
                        name: 'fetch project',
                        method() {
                            console.log('git fetch.....');
                        }
                    }
                ]
            },
            {
                name: 'project2',
                choices: [
                    {
                        name: 'clone project',
                        method() {
                            console.log('git clone.....');
                        }
                    },
                    {
                        name: 'fetch project',
                        method() {
                            console.log('git fetch.....');
                        }
                    }
                ]
            },
            {
                name: 'exit',
                method: () => process.exit()
            }
        ]
    });
}
bootstrap();
//# sourceMappingURL=main.js.map