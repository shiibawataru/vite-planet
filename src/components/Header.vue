<template>
  <div class="bg-indigo-900">
    <header class="container mx-auto flex justify-between items-center">
      <div class="flex justify-start text-white text-5xl my-2">
        <router-link to="/">Constellation &amp; Planet</router-link>
      </div>
      <div>
        <ul class="flex justify-end text-white">
          <li class="mx-3">
            <router-link to="/constellationlist">星座リスト</router-link>
          </li>
          <li class="mx-3">
            <router-link to="/planetlist">惑星リスト</router-link>
          </li>
        </ul>
      </div>
    </header>
  </div>
</template>
