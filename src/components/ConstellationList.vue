<script lang="ts">
import axios from "axios";
import { reactive, onMounted } from "vue";

const url =
  "https://private-anon-42847c8595-hoshimiru.apiary-mock.com/hoshimiru/constellation?lat=lat&lng=lng&date=date&hour=hour&min=min&id=id&disp=disp";

export default {
  setup() {
    const data = reactive({
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
          <div class="text-center text-lg text-white">
            {{ item.jpName }}({{ item.enName }})
          </div>
          <div class="flex flex-wrap justify-center border bg-white rounded-lg">
            <img class="w-52 object-contain" :src="item.starIcon" />
            <img class="w-52 object-contain" :src="item.starImage" />
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
