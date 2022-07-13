<template>
  <div class="dialog">
    <div class="header"></div>
    <div class="main">
      <div v-for="(item, index) in data" :key="index">
        <slot :data="item" :index="index"></slot>
      </div>
    </div>
    <div class="footer"></div>
  </div>
</template>

<script lang="ts">
export default {
  name: "Dialog",
};
</script>

<script setup lang="ts">
import { reactive } from "vue";
type names = {
  name: string;
  age: number;
};
const data = reactive<names[]>([
  { name: "丫丫丫", age: 200 },
  { name: "丫丫丫", age: 210 },
  { name: "丫丫丫", age: 220 },
  { name: "丫丫丫", age: 230 },
  { name: "丫丫丫", age: 240 },
]);
</script>

<style lang="less" scoped>
.dialog {
  .header {
    height: 200px;
    background-color: red;
    color: #fff;
  }
  .main {
    height: 300px;
    background-color: green;
    color: #fff;
  }
  .footer {
    height: 200px;
    background-color: blue;
    color: #fff;
  }
}
</style>
