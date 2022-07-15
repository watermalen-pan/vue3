<template>
  <div class="content">
    <A></A>
    <B></B>
    <C></C>
  </div>
</template>

<script setup lang="ts">
import A from "./A.vue";
import B from "./B.vue";
import C from "./C.vue";
</script>

<style lang="less" scoped>
.content {
  flex: 1;
  margin: 20px;
  overflow: auto;
}
</style>
