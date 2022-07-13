<template>
  <div class="layout">
    <Menu />
    <div class="layout-right">
      <Header />
      <Content />
    </div>
  </div>
</template>

<script setup lang="ts">
import Menu from "@/layOut/Menu/index.vue";
import Header from "./Header/index.vue";
import Content from "@/layOut/Content/index.vue";
</script>

<style lang="less" scoped>
.layout {
  height: 100%;
  display: flex;
  overflow: hidden;
  &-right {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
}
</style>
