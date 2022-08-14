export default {
    namespaced: true,
    state: {
        title: 'Sản phẩm',
        products: [{
            name: 'Bánh',
            quantity: '10',
            price: '10000',
        }, {
            name: 'Kẹo',
            quantity: '10',
            price: '10000',
        }, {
            name: 'Bim Bim',
            quantity: '10',
            price: '10000',
        }, {
            name: 'Trà Sữa',
            quantity: '10',
            price: '10000',
        }, {
            name: 'Chân Châu',
            quantity: '10',
            price: '10000',
        }, ]
    },
    getters: {
        // Khai báo getters
    },
    mutations: {
        changeTitle(state, data) {
            state.title = data;
        }
    },
}