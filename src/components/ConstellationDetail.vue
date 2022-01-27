<script lang="ts">
import axios from "axios";
import { reactive, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";

const urlSign =
  "https://private-anon-42847c8595-hoshimiru.apiary-mock.com/hoshimiru/constellation?lat=lat&lng=lng&date=date&hour=hour&min=min&id=id&disp=disp";

export default {
  setup() {
    const route = useRoute();
    const id = route.params.id;

    const router = useRouter();

    const data = reactive({
      datasign: "",
    });

    const getData = async () => {
      let resultSign = await axios.get(urlSign);

      for (let i = 0; i < resultSign.data.result.length; i++) {
        if (id === resultSign.data.result[i].id) {
          data.datasign = resultSign.data.result[i];
        }
      }
    };

    const onReturn = () => {
      router.push("/constellationlist");
    };

    onMounted(() => {
      getData();
    });

    return { data, getData, id, onReturn };
  },
};
</script>

<template>
  <div class="">
    <ul class="flex flex-wrap justify-center">
      <li class="m-5">
        <div class="text-center text-2xl text-white">
          {{ data.datasign.jpName }}({{ data.datasign.enName }})
        </div>
        <div class="flex justify-center flex-wrap">
          <img
            class="max-w-xs rounded-lg object-contain"
            :src="data.datasign.starIcon"
          />
          <img
            class="max-w-xs rounded-lg object-contain"
            :src="data.datasign.starImage"
          />
        </div>
        <div class="m-4 text-white">{{ data.datasign.content }}</div>
        <div class="m-4 text-white">{{ data.datasign.origin }}</div>
      </li>
    </ul>
    <div class="flex justify-center">
      <button
        type="button"
        v-on:click="onReturn"
        class="my-4 bg-gradient-to-r from-teal-400 bg-blue-500 hover:bg-blue-400 text-white font-medium py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
      >
        一覧へ戻る
      </button>
    </div>
  </div>
</template>

<style scoped></style>
