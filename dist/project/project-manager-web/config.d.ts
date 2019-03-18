declare const CMSConfig: {
    name: string;
    choices: {
        name: string;
        method(again: () => void): void;
    }[];
};
export default CMSConfig;
