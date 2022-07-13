<template>
    <div class="layout_menu">
        菜单
        <Tree :data="data" @on-click="getItem" />
    </div>
</template>

<script setup lang="ts">
import { defineComponent, reactive } from 'vue';
defineComponent
type TreeList = {
    name: string;
    icon?: string;
    children?: TreeList[] | [];
};
const data = reactive<TreeList[]>([
    {
        name: 'no.1',
        children: [
            {
                name: 'no.1-1',
                children: [
                    {
                        name: 'no.1-1-1',
                        children: [],
                    },
                ],
            },
        ],
    },
    { name: 'no.2', children: [{ name: 'no.2-1', children: [] }] },
    { name: 'no.3' },
]);

const getItem = (item: TreeList) => {
    console.log(item);
};
</script>

<style lang="less" scoped>
.layout_menu {
    width: 200px;
    border-right: 1px solid #ccc;
}
</style>
