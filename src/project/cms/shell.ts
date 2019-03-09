import ShellScript from '../../script/baseShell';
import { GIT_ADDRESS, FLODER_PATH } from './constant';
import { ASSETS_PATH } from '../../constant';
import * as fs from 'fs';
class CMSBlog extends ShellScript {
	gitAddress: string = GIT_ADDRESS;
	floderPath: string = FLODER_PATH;
	localPath: string = ASSETS_PATH + FLODER_PATH;
	fontendPath: string = ASSETS_PATH + FLODER_PATH + '/fontend';
	backendPath: string = ASSETS_PATH + FLODER_PATH + '/backend';

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
		this.cd(this.backendPath);
		this.exec('yarn start:server');
	}

	fontednInstall() {
		this.cd(this.fontendPath);
		this.exec('yarn');
	}

	initStall() {
		this.cd(this.backendPath);
		this.exec('yarn', { async: false });
		this.cd(this.fontendPath);
		this.exec('yarn', { async: false });
	}

	start() {
		this.backendStart();
		this.fontendStart();
	}
}

export default new CMSBlog();
