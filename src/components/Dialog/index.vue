<template>
  <div class="dialog">
    <header class="header">header</header>
    <main class="main">main</main>
    <footer class="footer">footer</footer>
  </div>
</template>

<script lang="ts">
export default {
  name: "Dialog",
};
</script>

<script setup lang="ts">
import { reactive } from "vue";
</script>

<style lang="less" scoped>
.dialog {
  width: 200px;
  color: #fff;
  .header {
    height: 100px;
    background-color: red;
  }
  .main {
    height: 100px;
    background-color: green;
  }
  .footer {
    height: 100px;
    background-color: blue;
  }
}
</style>
