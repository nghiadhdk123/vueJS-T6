export const formatText = (text) => {
    if (text.length > 25) {
        return text.slice(undefined, 25) + '...';
    } else {
        return text;
    }
}