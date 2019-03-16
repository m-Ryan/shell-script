declare const ManagerConfig: {
    name: string;
    choices: {
        name: string;
        method(again: () => void): void;
    }[];
};
export default ManagerConfig;
