import commandPrompt from 'command-prompt';
import { IBaseQuestion } from './interface/promptItem.interface';
import CMSConfig from './project/cms/config';
const question: IBaseQuestion = {
	name: '选择你要进行的项目',
	choices: [
		CMSConfig,
		{
			name: 'exit',
			method: () => process.exit()
		}
	]
};
function bootstrap() {
	commandPrompt({
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
