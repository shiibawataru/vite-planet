<script lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
// import HelloWorld from "./components/HelloWorld.vue";
import Header from "./components/Header.vue";
export default {
  // name: "app",
  components: { Header },
  // setup() {
  // },
};
</script>

<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <!-- <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" /> -->
  <!-- <h1 class="text-3xl font-bold underline">Hello world!</h1> -->
  <!-- <div id="nav"> -->
  <!-- <router-link to="/">Home</router-link> |
    <router-link to="/planetlist">PlanetList</router-link> |
    <router-link to="/constellationlist">ConstellationList</router-link> |
    <router-link to="/planetdetail">PlanetDetail</router-link> |
    <router-link to="/constellationdetail">ConstellationDetail</router-link> | -->
  <Header />

  <router-view />
  <!-- </div> -->
</template>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
