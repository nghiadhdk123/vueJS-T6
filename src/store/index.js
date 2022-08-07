import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        count: 1,
        todos: [
            { id: 1, text: 'task 1', done: true },
            { id: 2, text: 'task 2', done: false },
            { id: 3, text: 'task 3', done: true },
            { id: 4, text: 'task 4', done: true },
            { id: 5, text: 'task 5', done: false }
        ],

        //State bài tập Unit 7
        carts: [],
        products: [{
                name: 'iPhone 12 Pro Max Chính Hãng',
                image: 'https://galaxydidong.vn/wp-content/uploads/2020/11/thumb_IP12Pro_4.jpg',
                price: 32990000,
                quantity: 566,
                id: 1,
            },
            {
                name: 'iPhone 12 Chính Hãng (VN/A)',
                image: 'https://didongviet.vn/pub/media/catalog/product/i/p/ip12.jpg',
                price: 21790000,
                quantity: 123,
                id: 2,
            },
            {
                name: 'iPhone 11 Chính hãng',
                image: 'https://galaxydidong.vn/wp-content/uploads/2019/10/thumb_iP11_2.jpg',
                price: 16690000,
                quantity: 0,
                id: 3,
            },
            {
                name: 'Apple iPhone XR 64GB Chính hãng(VN/A)',
                image: 'https://galaxydidong.vn/wp-content/uploads/2014/09/iphone-xr-64gb-quoc-te-moi-95-99.jpg',
                price: 12190000,
                quantity: 1023,
                id: 4,
            },
            {
                name: 'iPhone 11 Pro Max Chính hãng(VN/A)',
                image: 'https://galaxydidong.vn/wp-content/uploads/2021/01/iphone-11-pro-galaxydidong.jpg',
                price: 26500000,
                quantity: 45,
                id: 5,
            }
        ],

        //Exp 7.2
        items: [{ "id": 1659802239276, "name": "Sản phẩm 1", "quantity": 12, "price": 1000000 }, { "id": 165980222276, "name": "Sản phẩm Nghĩa", "quantity": 0, "price": 150000 }],
        active: false,
        itemUpdate: {
            id: '',
            name: ' ',
            quantity: '',
            price: ''
        },

    },
    getters: {
        doneTodo: state => {
            return state.todos.filter(todo => todo.done);
        },

        findTodo: state => (index) => {
            return state.todos.find(todo => todo.id === index);
        },

        //getters Unit 7

        findProduct: state => (id) => {
            return state.products.find(product => product.id === id);
        },

        checkProduct: state => (id) => {
            var data = {
                active: "",
                index: ""
            };
            for (let i = 0; i < state.carts.length; i++) {
                if (state.carts[i].id === id) {
                    data.active = true;
                    data.index = i;
                    break;
                } else {
                    data.active = false;
                }
            }
            return data;
        },

        sumPrice: state => {
            let sum = 0;
            for (let i = 0; i < state.carts.length; i++) {
                sum += state.carts[i].price * state.carts[i].quantity;
            }
            return sum;
        },
        //Exp 7.2
    },
    mutations: {
        ChangeCount(state, data) {
            state.count += data.number;
            console.log(data.name + state.count);
        },

        //Mutations Unit 7

        //Exp 7.1
        addProduct(state, data) {
            let i;
            state.products.map((product, index) => {
                if (product.id === data.product.id) {
                    i = index;
                }
            });

            if (data.product.quantity == 0) {
                alert('Sản phẩm hiện đang hết hàng!');
            } else {
                if (data.active.active) {
                    state.carts[data.active.index].quantity++;
                    state.products[i].quantity--;
                } else {
                    state.carts.unshift({
                        name: data.product.name,
                        image: data.product.image,
                        price: data.product.price,
                        quantity: 1,
                        id: data.product.id,
                    });
                    state.products[i].quantity--;
                }
            }
        },

        deleteCart(state, data) {
            // console.log(data);
            state.products.map((product, index) => {
                if (product.id === data.id) {
                    state.products[index].quantity += state.carts[data.index].quantity;
                }
            })
            state.carts.splice(data.index, 1);
        },

        //Exp 7.2
        addItem(state, data) {
            // console.log(data);
            state.items.unshift(data);
        },

        editItem(state, data) {
            var pr = state.items.find(item => item.id === data);
            state.active = true;
            state.itemUpdate.id = pr.id;
            state.itemUpdate.name = pr.name;
            state.itemUpdate.quantity = pr.quantity;
            state.itemUpdate.price = pr.price;

            // console.log(state.itemUpdate);
        },

        itemUpdateData(state, data) {
            // console.log(data);
            state.items.find((value, index) => {
                if (value.id === data.id) {
                    state.items[index].name = data.name;
                    state.items[index].quantity = data.quantity;
                    state.items[index].price = data.price;
                }
            });
            state.active = false;
        },

        deleteItem(state, data) {
            state.items.map((value, index) => {
                if (value.id == data) {
                    state.items.splice(index, 1);
                }
            })
        },

        resetItem(state) {
            state.itemUpdate.id = '';
            state.itemUpdate.name = '';
            state.itemUpdate.quantity = '';
            state.itemUpdate.price = '';
            state.active = false;
        }
    },
    actions: {},
    modules: {}
})