declare const CMSConfig: {
    name: string;
    choices: {
        name: string;
        method(): void;
    }[];
};
export default CMSConfig;
