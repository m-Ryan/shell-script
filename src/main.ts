import commandPrompt from 'command-prompt';
import CMSConfig from './project/cms/config';
import { IBaseQuestion } from 'command-prompt/dist/command-prompt.interface';
import ManagerConfig from 'project/manager/config';
const question: IBaseQuestion = {
	name: '选择你要进行的项目',
	choices: [
		CMSConfig,
		ManagerConfig,
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
