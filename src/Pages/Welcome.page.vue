<template>
  <main id="welcome-page-container">
    <h1>歡迎來到喆麗生技</h1>
    <nav>
      <router-link to="/products">產品資訊</router-link>
      <router-link to="/about">關於我們</router-link>
      <router-link to="/contact">聯絡我們</router-link>
    </nav>
  </main>
</template>
<style scoped>
#welcome-page-container {
  width: 100vw;
  height: calc(100vh - 72px);
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

nav a {
  color: inherit;
  text-decoration: none;
  padding: 0 20px;
}

nav a:not(:last-child) {
  border-right: 1px solid black;
}
</style>
