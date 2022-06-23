<template>
  <div class="album py-5">
    <div class="container">
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        <template v-for="product in productJson" :key="product.id">
          <div class="col">
            <div class="card shadow-sm">
              <img class="bd-placeholder-img card-img-top" height="400" src="../assets/product.png"  alt="product" />
              <div class="card-body">
                <p class="card-text">
                  {{ product.title }}
                </p>
                <div class="d-flex justify-content-between align-items-center">
                  <router-link :to="{
                    name: 'productinfo',
                    params: { productName: product.link },
                  }">{{ product.Name }}</router-link>
                </div>
              </div>
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import productJson from "../Data/Product.json";

export default {
  name: "ProductView",
  data() {
    return {
      productJson: productJson.Proucts,
    };
  },
  methods: {
    logout: function () {
      window.user = "";
      this.$router.push({ name: "login" });
    },
  },
  created() {
    
  },
};
</script>
