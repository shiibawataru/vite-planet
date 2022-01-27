<script lang="ts">
import Vue from "vue";
import { useRoute, useRouter } from "vue-router";

export default {
  setup() {
    const router = useRouter();

    const onConstellationList = () => {
      router.push("/constellationlist");
    };
    const onPlanetList = () => {
      router.push("/planetlist");
    };

    return {
      onConstellationList,
      onPlanetList,
    };
  },
};
</script>

<template>
  <div class="flex justify-center my-64 flex-wrap">
    <button
      type="button"
      v-on:click="onConstellationList"
      class="mx-8 text-3xl w-64 h-24 bg-gradient-to-r from-teal-400 bg-blue-500 hover:bg-blue-400 text-white font-medium py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
    >
      星座リスト
    </button>

    <button
      type="button"
      v-on:click="onPlanetList"
      class="mx-8 text-3xl w-64 h-24 bg-gradient-to-r from-teal-400 bg-blue-500 hover:bg-blue-400 text-white font-medium py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
    >
      惑星リスト
    </button>
  </div>
</template>
