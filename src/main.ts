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
	commandPrompt(question);
}
bootstrap();
