import ShellScript from '../../baseShell';
declare class CMSBlog extends ShellScript {
    gitAddress: string;
    floderName: string;
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
