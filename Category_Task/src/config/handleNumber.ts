export const handleNumber = (number: number) => {
    if (number >= 1000) {
        return number.toLocaleString("en-US");
    }
    return number.toString();
};
