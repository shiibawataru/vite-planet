<script lang="ts">
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
export default {
  components: { Header, Footer },
};
</script>

<template>
  <div class="bg-hero-pattern bg-center bg-repeat min-h-screen flex flex-col">
    <Header />
    <div class="flex-grow">
      <router-view />
    </div>
    <Footer />
  </div>
</template>

<style></style>
