import ShellScript from '../../baseShell';
declare class Manager extends ShellScript {
    gitAddress: string;
    floderName: string;
    localPath: string;
    fontendPath: string;
    backendPath: string;
    clone(): void;
    start(): void;
}
declare const manager: Manager;
export default manager;
