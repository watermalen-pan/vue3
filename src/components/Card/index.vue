<template>
  <div class="card">
    <div class="card-header">
      <div>左侧</div>
      <div>右侧</div>
    </div>
    <div class="card-content" v-if="content">
      {{ content }}
    </div>
  </div>
</template>

<script setup lang="ts">
type Props = {
  content?: string;
};
defineProps<Props>();
</script>
<style lang="less" scoped>
@border: #ccc;
.card {
  border: 1px solid @border;
  margin: 10px;
  &:hover {
    box-shadow: 0 0 10px @border;
  }
  &-header {
    display: flex;
    justify-content: space-between;
    padding: 10px;
    border-bottom: 1px solid @border;
  }
  &-content {
    padding: 10px;
  }
}
</style>
