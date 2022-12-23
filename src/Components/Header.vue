<template>
  <header>
    <router-link to="/" class="logo-link">
      <img src="../Assets/images/logo.png" alt="logo" class="logo" />
    </router-link>
  </header>
</template>
<style scoped>
header {
  width: 100vw;
  height: 72px;
  background-color: #d593f5;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.logo-link {
  margin: 0 20px;
  height: 80%;
}

.logo {
  height: 100%;
}
</style>
