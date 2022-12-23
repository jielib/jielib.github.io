<template>
  <header>
    <router-link to="/" class="logo-link">
      <img src="../Assets/images/logo.png" alt="logo" class="logo" />
    </router-link>
    <div class="hamburger" @click="() => (navAct = !navAct)">
      <span></span>
      <span></span>
      <span></span>
    </div>
    <div class="bg" v-if="navAct" @click="() => (navAct = false)"></div>
    <nav :class="navAct ? 'active' : ''">
      <ul>
        <li><router-link to="/contact" @click="navClick">聯絡我們</router-link></li>
        <li><router-link to="/products" @click="navClick">產品資訊</router-link></li>
        <ul>
          <li v-for="i in list">
            <!-- <router-link :to="{ name: 'products', hash: `#${i}` }">{{ i }}</router-link> -->
            <a :href="`#${i}`" @click="productClick">{{ i }}</a>
          </li>
        </ul>
      </ul>
    </nav>
  </header>
</template>
<script>
import list from '../templates/productsList.json';

export default {
  data() {
    return {
      navAct: false,
      list
    };
  },

  methods: {
    navClick() {
      this.navAct = false;
    },
    productClick() {
      this.$router.push('/products');
      this.navAct = false;
    }
  }
};
</script>
<style scoped>
header {
  width: 100vw;
  height: 72px;
  background-color: #d593f5;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

a {
  color: inherit;
  text-decoration: none;
}

.logo-link {
  margin: 0 20px;
  height: 80%;
}

.logo {
  height: 100%;
}

nav {
  position: fixed;
  right: -300px;
  top: 80px;
  background-color: #00e073;
  padding: 10px 20px;
  border-radius: 10px;
  transition: right 0.1s ease-in-out 0s;
}

nav.active {
  right: 20px;
}

nav li {
  padding: 3px 0;
}

nav > ul {
  list-style: none;
  padding: 0;
}
.bg {
  position: fixed;
  background-color: rgba(100, 100, 100, 0.6);
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
}

.hamburger {
  width: 50px;
  height: 50px;
  margin: 0 20px;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  display: none;
}

.hamburger span {
  width: 35px;
  height: 1px;
  background-color: #000;
  border: 2px solid #000;
  border-radius: 3px;
  display: block;
}

@media screen and (min-width: 801px) {
  nav {
    display: none;
  }
}

@media screen and (max-width: 800px) {
  .hamburger {
    display: flex;
  }
}
</style>
