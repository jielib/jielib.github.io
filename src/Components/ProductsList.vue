<template>
  <article>
    <ProductCard
      v-for="product in products"
      :name="product.name"
      :images="product.images"
      :description="product.description"
      :info="product.info"
    />
  </article>
</template>
<script>
import ProductCard from './Card.vue';
import products from '../templates/products.json';

export default {
  data() {
    return { products };
  },
  components: {
    ProductCard
  }
};
</script>

<style scoped>
article {
  width: 750px;
  margin: auto;
}

@media screen and (max-width: 1000px) {
  article {
    width: 95%;
  }
}
</style>
