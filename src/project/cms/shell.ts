import ShellScript from '../../baseShell';
import { GIT_ADDRESS, FLODER_NAME } from './constant';
import { ASSETS_PATH } from '../../constant';
import * as fs from 'fs';
class CMSBlog extends ShellScript {
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

	backendInstall() {
		this.cd(this.backendPath);
		this.exec('yarn');
	}

	backendStart() {
		this.cd(this.backendPath);
		this.exec('yarn server:product');
	}

	fontendStart() {
		this.cd(this.fontendPath);
		this.exec('yarn server:product');
	}

	fontednInstall() {
		this.cd(this.fontendPath);
		this.exec('yarn');
	}

	initStall() {
		this.cd(this.backendPath);
		this.exec('yarn');
		this.cd(this.fontendPath);
		this.exec('yarn');
	}

	start() {
		this.backendStart();
		this.fontendStart();
	}
}

export default new CMSBlog();
