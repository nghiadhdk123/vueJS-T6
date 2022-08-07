<template>
  <table class="tableProduct" border="1">
    <thead>
      <th>STT</th>
      <th>Sản phẩm</th>
      <th>Giá</th>
      <th>Số lượng</th>
      <th>Trạng thái</th>
      <th>Hành động</th>
    </thead>
    <tbody>
      <tr v-for="(product,index) in products" :key="product.id">
        <td class="item-product">{{ ++index }}</td>
        <td class="name-product item-product">
          <img :src="product.image" alt style="width:50px;height:50px" />
          <a :href="product.image">{{formatText(product.name)}}</a>
        </td>
        <td class="item-product">{{ formatMoney(product.price) }} VNĐ</td>
        <td class="item-product">{{ product.quantity }}</td>
        <td class="item-product">
          <span v-if="product.quantity > 0" class="available">Còn hàng</span>
          <span v-else class="unavailable">Hết hàng</span>
        </td>
        <td class="item-product">
          <button @click="addCart(product.id)">Thêm vào giỏ</button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { mapState, mapMutations, mapGetters } from "vuex";
import { formatMoney } from '../../helper/formatMoney.js'
import { formatText } from '../../helper/formatText.js'
export default {
  computed: {
    ...mapState(["products"]),

    ...mapGetters(["findProduct","checkProduct"])
  },

  methods: {
    ...mapMutations(["addProduct"]),

    addCart(id) {
        let data = {
            product: this.findProduct(id),
            active: this.checkProduct(id)
        }
      this.addProduct(data);
    },
    formatMoney,
    formatText,
  }
};
</script>

<style lang="scss" scoped>
.tableProduct {
  width: 50%;
  margin: 0 auto;

  .name-product {
    display: flex;
    justify-content: start;
    align-items: center;

    a {
      text-decoration: none;
    }
  }

  td {
    text-align: center;

    .available {
      color: #43d5c4;
    }

    .unavailable {
      color: #f65a74;
    }

    button {
      background-color: #43d5c4;
      color: white;
      font-weight: 500;
      border-radius: 5px;
      border-style: none;
      width: 100px;
      height: 30px;
    }
  }
}
</style>