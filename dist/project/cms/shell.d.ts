import ShellScript from '../../script/baseShell';
declare class CMSBlog extends ShellScript {
    gitAddress: string;
    floderPath: string;
    localPath: string;
    fontendPath: string;
    backendPath: string;
    clone(): void;
    backendInstall(): void;
    backendStart(): void;
    fontendStart(): void;
    fontednInstall(): void;
    initStall(): void;
    start(): void;
}
declare const _default: CMSBlog;
export default _default;
