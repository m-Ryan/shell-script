import { exec, cd, echo, ExecOptions } from 'shelljs';
import { ASSETS_PATH } from '../constant';

export default class ShellScript {
	gitAddress: string;
	floderPath: string;
	localPath: string;

	runExec(command: string, async = false) {
		cd(this.localPath);
		echo(command);
		exec(command, { async });
	}

	clone() {
		this.runExec(`git clone ${this.gitAddress} ${this.localPath}`);
	}

	install() {
		this.runExec(`yarn`);
	}

	fetch() {
		this.runExec(`git fetch`);
	}

	pull() {
		this.runExec(`git pull`);
	}

	push() {
		this.runExec(`git push`);
	}

	start() {
		this.runExec(`cd fontend && yarn start`, true);
	}

	build() {
		this.runExec(`cd fontend && yarn build`);
	}

	cd(command: string) {
		echo(command);
		cd(command);
	}

	exec(command: string, options?: ExecOptions) {
		echo(command);
		exec(command, options);
	}

	echo(command: string) {
		echo(command);
	}
}
