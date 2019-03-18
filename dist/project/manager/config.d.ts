declare const Manager: {
    name: string;
    choices: {
        name: string;
        method(again: () => void): void;
    }[];
};
export default Manager;
