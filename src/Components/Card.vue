<template>
  <section class="product-card" :id="name">
    <h1>{{ name }}</h1>
    <div class="description">
      <div class="product-image"><img :src="`/products-images/${images[0]}`" /></div>
      <Markdown :source="description" />
    </div>
    <ul>
      <li v-for="(value, key) in info">
        <span>{{ key }}</span>
        :
        <span>{{ value }}</span>
      </li>
    </ul>
  </section>
</template>

<script>
import Markdown from './Markdown.vue';
export default {
  props: ['name', 'images', 'description', 'info'],
  components: {
    Markdown
  }
};
</script>

<style scoped>
h1 {
  font-size: 1.6rem;
}
.description {
  background-color: #7af5ba;
  padding: 20px;
  border-radius: 10px;
  display: flex;
  column-gap: 20px;
}

.product-image img {
  width: 120px;
}
</style>
