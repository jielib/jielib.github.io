<template>
  <main id="products-page-container">
    <ProductsAside></ProductsAside>
    <ProductsList></ProductsList>
  </main>
</template>
<script setup>
import ProductsAside from '../Components/ProductsAside.vue';
import ProductsList from '../Components/ProductsList.vue';
</script>
<style scoped>
#products-page-container {
  width: 90vw;
  margin: auto;
  display: grid;
  grid-template-columns: 1fr 3fr;
}

@media screen and (max-width: 1200px) {
  #products-page-container {
    width: 100vw;
  }
}

@media screen and (max-width: 800px) {
  #products-page-container {
    grid-template-columns: 1fr;
    width: 90vw;
  }
}
</style>
