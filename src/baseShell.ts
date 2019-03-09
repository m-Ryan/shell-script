import { exec, cd, echo, ExecOptions } from 'shelljs';

export default class ShellScript {
	gitAddress: string;
	floderPath: string; // 项目目录名称
	localPath: string; // 项目所在地址

	runExec(command: string, options?: ExecOptions) {
		cd(this.localPath);
		echo(command);
		exec(command, options);
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
		this.runExec(`yarn start`);
	}

	build() {
		this.runExec(`yarn build`);
	}

	cd(command: string) {
		cd(command);
	}

	exec(command: string, options?: ExecOptions) {
		exec(command, options);
	}

	echo(command: string) {
		echo(command);
	}
}
