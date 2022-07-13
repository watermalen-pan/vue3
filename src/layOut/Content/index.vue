<template>
  <div class="content">
    <Dialog>
      <template v-slot="{ data, index }">
        <div>{{ data.age }}---{{ index }}</div>
      </template>
    </Dialog>
  </div>
</template>

<script setup lang="ts">
import Dialog from "@/components/Dialog/index.vue";
// import { reactive, markRaw } from "vue";
</script>

<style lang="less" scoped>
.content {
  flex: 1;
  margin: 20px;
  overflow: auto;
}
</style>
