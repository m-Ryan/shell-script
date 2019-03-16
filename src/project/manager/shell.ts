import ShellScript from '../../baseShell';
import { GIT_ADDRESS, FLODER_NAME } from './constant';
import { ASSETS_PATH } from '../../constant';
import * as fs from 'fs';
class Manager extends ShellScript {
	gitAddress: string = GIT_ADDRESS;
	floderName: string = FLODER_NAME;
	localPath: string = ASSETS_PATH + FLODER_NAME;
	fontendPath: string = ASSETS_PATH + FLODER_NAME + '/fontend';
	backendPath: string = ASSETS_PATH + FLODER_NAME + '/backend';

	clone() {
		if (fs.existsSync(this.localPath)) {
			this.echo('该目录已有项目');
			return;
		}
		this.runExec(`git clone ${this.gitAddress} ${this.localPath}`);
	}

	start() {
		this.runExec('yarn server:product');
	}
}

const manager =  new Manager();
export default manager;
