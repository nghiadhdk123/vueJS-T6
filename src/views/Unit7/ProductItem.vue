<template>
  <div class="list-data-product">
    <table border="1">
      <thead>
        <th>Mã sản phẩm</th>
        <th>Tên sản phẩm</th>
        <th>Đơn giá</th>
        <th>Số lượng</th>
        <th>Trạng thái</th>
        <th>Hành động</th>
      </thead>
      <tbody>
        <tr v-if="items == ''">
          <td class="item-product" colspan="6">Không có dữ liệu ......</td>
        </tr>
        <tr v-else v-for="item in getItems()" :key="item.id">
          <td class="item-product">{{ item.id }}</td>
          <td class="item-product">{{ item.name }}</td>
          <td class="item-product">{{ formatMoney(item.price) }} VNĐ</td>
          <td class="item-product">{{ item.quantity }}</td>
          <td class="item-product">
            <span style="color:green" v-if="item.quantity > 0">Còn hàng</span>
            <span style="color:red" v-else>Hết hàng</span>
          </td>
          <td class="item-product">
            <button @click="UpdateItem(item.id)">Sửa</button>
            <button @click="DeleteItem(item.id)">Xóa</button>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="paginate">
      <p
        class="number-page"
      >Hiện thị {{indexStart+1}}-{{toPage()}} trên tổng {{ items.length }} sản phẩm ({{currentPage}} trang)</p>
      <div class="arrow">
        <button @click="currentPage--" :disabled="currentPage == 1">></button>
        <button @click="currentPage++" :disabled="currentPage == Math.ceil(items.length/pageSize)">></button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters } from "vuex";
import { formatMoney } from '../../helper/formatMoney.js'
export default {
//   mounted() {
//     this.getItems();
//   },
  updated() {
    this.getItems();
  },
  data() {
    return {
      pageSize: 5,
      currentPage: 1
    };
  },
  computed: {
    ...mapState(["items"]),

    ...mapGetters([
      // 'editItem'
    ]),

    indexStart() {
      return (this.currentPage - 1) * this.pageSize;
    },

    indexEnd() {
      return this.indexStart + this.pageSize;
    }
  },
  methods: {
    ...mapMutations(["deleteItem", "editItem"]),
    DeleteItem(id) {
      this.deleteItem(id);
    },
    UpdateItem(id) {
      this.editItem(id);
    },

    getItems() {
      let result = this.items.slice(this.indexStart, this.indexEnd);
      return result;
    },
    toPage() {
      let toPage = this.currentPage * this.pageSize;
      return toPage < this.items.length ? toPage : this.items.length;
    },
    formatMoney,
  }
};
</script>

<style lang="scss" scoped>
.list-data-product {
  width: 50%;
  box-sizing: border-box;

  table {
    width: 100%;
    height: 400px;
    border-collapse: collapse;
    border-color: #80808059;

    thead {
      th {
        padding: 2%;
        background-color: #f2f6fe;
      }
    }

    tbody {
      td {
        padding: 1%;
        text-align: center;
      }
    }
  } //End table

  .paginate {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .arrow {
      display: flex;
      justify-content: space-between;

      button {
        width: 25px;
        height: 25px;
        outline: none;
        font-weight: bold;
      }

      button:nth-child(1) {
        margin-right: 5%;
        transform: rotate(180deg);
      }
    } // End arrow
  } //End paginate
} // End list-data-product
</style>