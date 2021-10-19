<template>
  <div class="container py-5">
    <div class="row">
      <div class="col-4">
        <div class="card">
          <img :src="require('@/assets/img/' + product.img)" alt="..." />
          <div class="card-body">
            <h5 class="card-title">{{ product.name }} - {{ product.price }}</h5>
            <p class="card-text">{{ product.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import productService from "../services/productService.js";
var product;
export default {
  data() {
    return {
      product,
    };
  },
  name: "Product",
  components: {},
  beforeCreate() {
    product = productService.getProduct(this.$route.params.id);
  },
};
</script>