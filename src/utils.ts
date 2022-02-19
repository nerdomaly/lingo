export const getRandomNumber = (max: number) => {
    return Math.floor(Math.random() * Math.floor(max));
};

export const isAlpha = (letter: string) => {
    return /^[a-zA-Z]/.test(letter);
};
