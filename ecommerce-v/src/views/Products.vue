<template>
  <div class="container">
    <div class="row py-5">
      <div class="col-4" v-for="(product, index) in products" :key="index">
        <div class="card">
          <img :src="require('@/assets/img/' + product.img)" alt="..." />
          <div class="card-body">
            <h5 class="card-title">{{ product.name }} - {{ product.price }}</h5>
            <p class="card-text">{{ product.description }}</p>
            <a class="btn btn-primary" v-on:click="changeView(index)"
              >Ver detalles</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import productService from "../services/productService.js";
const products = productService.products;
console.log(products[0].img);
export default {
  data() {
    return {
      products,
    };
  },
  name: "Home",
  components: {},
  methods: {
    changeView: function (id) {
      this.$router.push({ name: "newLocation", params: { id: id } });
    },
  },
};
</script>
