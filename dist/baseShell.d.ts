import { ExecOptions } from 'shelljs';
export default class ShellScript {
	gitAddress: string;
	floderPath: string;
	localPath: string;
	runExec(command: string, options?: ExecOptions): void;
	clone(): void;
	install(): void;
	fetch(): void;
	pull(): void;
	push(): void;
	start(): void;
	build(): void;
	cd(command: string): void;
	exec(command: string, options?: ExecOptions): void;
	echo(command: string): void;
}
