<script lang="ts">
// import { Vue } from "vue-class-component";
// import { Options, Vue } from "vue-class-component";
import axios from "axios";
import { reactive, onMounted } from "vue";

const url =
  "https://private-anon-42847c8595-hoshimiru.apiary-mock.com/hoshimiru/constellation?lat=lat&lng=lng&date=date&hour=hour&min=min&id=id&disp=disp";
// "https://private-anon-42847c8595-hoshimiru.apiary-mock.com/hoshimiru/planet?lat=35.6581&lng=139.7414&date=2020-01-15&hour=20&min=00&id=102";
// @Options({
//   props: {
//     msg: String,
//   },
// })
// export default class HelloWorld extends Vue {
export default {
  // props: {
  //   msg: String,
  //   jpname: String
  // },
  setup() {
    const data = reactive({
      // title: "Planet",
      mydata: "",
    });

    const getData = async () => {
      let result = await axios.get(url);
      console.log(result);
      data.mydata = result.data.result;
    };
    onMounted(() => {
      getData();
    });
    return { data, getData };
  },
};
</script>

<template>
  <div class="">
    <ul class="flex flex-wrap justify-center">
      <li class="m-5" v-for="item of data.mydata" :key="item">
        <router-link v-bind:to="'/constellationdetail/' + item.id">
          <div class="text-center text-lg">
            {{ item.jpName }}({{ item.enName }})
          </div>
          <div class="flex flex-wrap justify-center border">
            <img class="w-64 rounded-lg object-contain" :src="item.starIcon" />
            <img class="w-64 rounded-lg object-contain" :src="item.starImage" />
          </div>
        </router-link>
        <!-- <div>Explanation:{{ item.content }}</div> -->
        <!-- <div>Origin:{{ item.origin }}</div> -->
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
