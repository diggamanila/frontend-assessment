<template>
  <nav class="mfa-nav">
    <router-link to="/">EXERCISE 1</router-link> |
    <router-link to="/exercisetwo">EXERCISE 2</router-link>
  </nav>
  <main>
    <router-view />
  </main>
</template>

<script setup>
import './assets/index.scss'
</script>

<style lang="scss" scope>
.mfa-nav {
  padding: 10px 20px;
  background-color: #002664;
  color: white;
}
.mfa-nav a {
  color: white;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: #eee;
  font-family: sans-serif;
  overflow-x: hidden;
}

.container {
  width: 100%;
  margin-right: auto;
  margin-left: auto;
}
</style>
