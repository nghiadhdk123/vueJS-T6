<template>
  <div class="cart">
    <h4>Giỏ hàng</h4>
    <table class="cartProduct">
      <tbody v-if="carts == ''">
        <tr>
          <td style="text-align:center;color:gray">Không có sản phẩm nào được thêm vào giỏ hàng</td>
        </tr>
      </tbody>
      <tbody v-else>
        <tr v-for="(cart,index) in carts" :key="cart.id">
          <td>
            <img :src="cart.image" alt style="width:40px;height: 40px;" />
          </td>
          <td class="cart-name-price">
            <span>{{ cart.name }}</span>
            <span>{{formatMoney(cart.price)}} VNĐ</span>
          </td>
          <td>{{cart.quantity}}</td>
          <td>
            <button @click="clear(cart.id,index)">Xóa</button>
          </td>
        </tr>
      </tbody>
    </table>
    <h3>Tổng tiền: {{formatMoney(sumPrice)}} VNĐ</h3>
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters } from "vuex";
import { formatMoney } from '../../helper/formatMoney.js'
export default {
  name: "PageCart",
  computed: {
    ...mapState(["carts"]),
    ...mapGetters(["sumPrice"])
  },
  methods: {
    ...mapMutations(["deleteCart"]),
    formatMoney,
    clear(id,index) {
        this.deleteCart({id,index});
    }
  }
};
</script>

<style lang="scss" scoped>
.cart {
  width: 49%;
  border: 0.5px solid #8080806b;
  display: flex;
  flex-direction: column;
  align-items: start;
  position: relative;
  padding-top: 1%;

  h4 {
    padding-left: 2%;
  }

  .cartProduct {
    width: 100%;
  }

  .cart-name-price {
    display: flex;
    flex-direction: column;
    align-items: self-start;
  }

  h3 {
    position: absolute;
    bottom: 5%;
    padding-left: 2%;
  }
}
</style>