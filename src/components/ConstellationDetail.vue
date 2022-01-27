<script lang="ts">
// import { Vue } from "vue-class-component";
// import { Options, Vue } from "vue-class-component";
import axios from "axios";
import { reactive, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";

// const urlPlanet =
//   "https://private-anon-42847c8595-hoshimiru.apiary-mock.com/hoshimiru/planet?lat=lat&lng=lng&date=date&hour=hour&min=min&id=id";

const urlSign =
  "https://private-anon-42847c8595-hoshimiru.apiary-mock.com/hoshimiru/constellation?lat=lat&lng=lng&date=date&hour=hour&min=min&id=id&disp=disp";
// "https://private-anon-42847c8595-hoshimiru.apiary-mock.com/hoshimiru/planet?lat=35.6581&lng=139.7414&date=2020-01-15&hour=20&min=00&id=102";
// @Options({
//   props: {
//     msg: String,
//   },
// })
// export default class HelloWorld extends Vue {
// const itemId = parseInt($route.params.id);
export default {
  // props: {
  //   msg: String,
  //   jpname: String
  // },
  setup() {
    const route = useRoute();
    const id = route.params.id;

    const router = useRouter();

    const data = reactive({
      // title: "Planet",
      //   dataplanet: "",
      datasign: "",
    });

    const getData = async () => {
      //   let resultPlanet = await axios.get(urlPlanet);
      let resultSign = await axios.get(urlSign);
      //   console.log(resultPlanet);
      // if (id <= 100) {
      for (let i = 0; i < resultSign.data.result.length; i++) {
        if (id === resultSign.data.result[i].id) {
          data.datasign = resultSign.data.result[i];
        }
        // }
        // } else {
        //   for (let i = 0; i < resultPlanet.data.result.length; i++) {
        //     if (id === resultPlanet.data.result[i].id) {
        //       data.dataplanet = resultPlanet.data.result[i];
        //     }
      }
      // }

      //   console.log(data.dataplanet);
      //   return;
    };

    const onReturn = () => {
      router.push("/sign");
    };

    onMounted(() => {
      getData();
      //   const id = route.params.id;
      //   console.log("id:" + id);
    });
    return { data, getData, id, onReturn };
  },
};
</script>

<template>
  <div class="">
    <!-- <h1 class="text-2xl">{{ data.title }}</h1> -->
    <ul class="flex flex-wrap justify-center">
      <!-- <li class="m-5" v-for="item of data.mydata" :key="item"> -->
      <li class="m-5">
        <div class="text-center text-2xl">
          {{ data.datasign.jpName }}({{ data.datasign.enName }})
          <!-- {{ data.datasign.jpName }}({{ data.datasign.enName }}) -->
        </div>
        <div class="flex justify-center flex-wrap">
          <img
            class="w-1/3 rounded-lg object-contain"
            :src="data.datasign.starIcon"
          />
          <img
            class="w-1/3 rounded-lg object-contain"
            :src="data.datasign.starImage"
          />
        </div>
        <div class="m-4">{{ data.datasign.content }}</div>
        <div class="m-4">{{ data.datasign.origin }}</div>
        <!-- <div>ID:{{ $route.params.id }}</div> -->
        <!-- <div>id:{{ id }}</div> -->
        <!-- <div>item:{{ data.mydata.jpName }}</div> -->
        <!-- <div>id:{{  }}</div> -->
      </li>
    </ul>
    <div class="flex justify-center">
      <button
        type="button"
        v-on:click="onReturn"
        class="bg-gradient-to-r from-teal-400 bg-blue-500 hover:bg-blue-400 text-white font-medium py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
      >
        一覧へ戻る
      </button>
    </div>
  </div>
</template>

<style scoped></style>
