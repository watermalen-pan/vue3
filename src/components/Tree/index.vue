<template>
    <div class="tree">
        <div
            style="margin-left: 10px"
            v-for="(treeItem, index) in data"
            :key="index"
            @click.stop="clickTreeTap(treeItem)"
        >
            {{ treeItem.name }}
            <Tree @on-click="clickTreeTap"  v-if="isShowChildren(treeItem)" :data="treeItem.children"       />
        </div>
    </div>
</template>

<script lang="ts">
export default {
    name: 'treeItem',
};
</script>

<script setup lang="ts">
import Tree from './index.vue';
type TreeList = {
    name: string;
    icon?: string;
    children?: TreeList[] | [];
};

type Prop = {
    data?: TreeList[];
};

defineProps<Prop>();

const isShowChildren = (item: TreeList) => {
    if (!item.children || item.children.length === 0) return false;
    return true;
};
const emit = defineEmits(['on-click']);

const clickTreeTap = (item: TreeList) => {
    emit('on-click', item, '父组件的item');
};
</script>

<style lang="less" scoped></style>
