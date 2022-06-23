<template>
  <div class="container" v-if="product">

    <div class="row">
      <div class="col-md-5 order-md-1">
        <img class="bd-placeholder-img card-img-top" height="500" src="../assets/product.png" alt="product" />
      </div>
      <div class="col-md-7 order-md-2">
        <h2 class="featurette-heading fw-normal lh-1">{{ product.Name }}<span class="text-muted">See for
            yourself.</span>
        </h2>
        <p class="lead">Good Product</p>
        <ul>
          <li v-for="item in product.mainfeatures" :key="item">{{ item }}</li>
        </ul>
      </div>

    </div>

    <div v-if="product.Specifications">
      <h2>Specifications</h2>
      <div class="row" v-for="(item, index) in Object.keys(product.Specifications)" :key="index">
      <h4>{{item}}</h4>
      <table>
        <tr v-for="(Specifications, sindex) in Object.keys(product.Specifications[item])" :key="sindex">
          <td>{{Specifications}}</td>
          <td>{{product.Specifications[item][Specifications]}}</td>
        </tr>
      </table>
      </div>
    </div>

  </div>
</template>

<script>
import productJson from "../Data/Product.json";

export default {
  name: 'ProductInfo',
  computed: {
    productName() {
      return this.$route.params.productName;
    },
    product() {
      return productJson.Proucts.find(x => x.link == this.productName);
    }
  }
}
</script>
