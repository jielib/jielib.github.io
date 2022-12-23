<template>
  <aside>
    <span>產品清單</span>
    <a v-for="p in list" :href="`#${p}`">{{ p }}</a>
  </aside>
</template>

<script>
import list from '../templates/productsList.json';

export default {
  data() {
    return { list };
  }
};
</script>

<style scoped>
aside {
  background-color: #00e073;
  display: flex;
  flex-direction: column;
  width: max-content;
  height: max-content;
  row-gap: 20px;
  border-radius: 10px;
  padding: 15px 20px;
  justify-self: center;
  margin: 25px auto;
  position: sticky;
  top: 25px;
  font-size: 1rem;
}

span {
  font-size: 1em;
  color: #9d008d;
  font-weight: bold;
  opacity: 0.75;
}

a {
  color: inherit;
  text-decoration: none;
  font-size: 1.2em;
}

@media screen and (max-width: 1000px) {
  aside {
    font-size: 0.9rem;
  }
}

@media screen and (max-width: 900px) {
  aside {
    font-size: 0.8rem;
  }
}

@media screen and (max-width: 800px) {
  aside {
    display: none;
  }
}
</style>
