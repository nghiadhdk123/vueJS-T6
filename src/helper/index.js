export default {
    formatMoney(money) {
        return money.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")
    },

    formatText(text) {
        if (text.length > 25) {
            return text.slice(undefined, 25) + '...';
        } else {
            return text;
        }
    }
}