<template>
  <div class="content">
    <div v-for="(item, index) in list" :key="index">{{ index }}</div>
  </div>
</template>

<script setup lang="ts">
import { axios } from "./server";
const list = await axios("./data.json");
</script>
<style lang="less" scoped></style>
