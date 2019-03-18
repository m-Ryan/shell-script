import ShellScript from '../../baseShell';
import { BACKEND_GIT_ADDRESS, FONTEND_FLODER_NAME, BACKEND_FLODER_NAME } from './constant';
import { ASSETS_PATH } from '../../constant';
import * as fs from 'fs';
class Shell extends ShellScript {
	gitAddress: string = BACKEND_GIT_ADDRESS;
	floderName: string = BACKEND_FLODER_NAME;
	localPath: string = ASSETS_PATH + BACKEND_FLODER_NAME;
	fontendPath: string = ASSETS_PATH + FONTEND_FLODER_NAME;

	pullFontend() {
		this.cd(this.fontendPath);
		this.exec('git pull');
	}

	cloneFontend() {
		if (fs.existsSync(this.fontendPath)) {
			this.echo('该目录已有项目');
			return;
		}
		this.cd(this.fontendPath);
		this.exec(`git clone ${this.gitAddress} ${this.fontendPath}`);
	}

	clone() {
		if (fs.existsSync(this.localPath)) {
			this.echo('该目录已有项目');
			return;
		}
		this.runExec(`git clone ${this.gitAddress} ${this.localPath}`);
	}

	reset() {
		this.runExec('git reset --heart');
	}
}

export default new Shell();
