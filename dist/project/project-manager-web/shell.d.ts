import ShellScript from '../../baseShell';
declare class Shell extends ShellScript {
    gitAddress: string;
    floderName: string;
    localPath: string;
    fontendPath: string;
    pullFontend(): void;
    cloneFontend(): void;
    clone(): void;
    reset(): void;
}
declare const _default: Shell;
export default _default;
