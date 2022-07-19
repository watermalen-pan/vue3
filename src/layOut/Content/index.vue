<template>
  <div class="content">
    <div class="move-box" @click="handlerClick">
      <Dialog />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, Directive, DirectiveBinding } from "vue";
import Dialog from "@/components/Dialog/index.vue";
const handlerClick = (e: MouseEvent) => {
  const { offsetX, offsetY, clientX, clientY } = e;
  console.log(clientX, "clientX");
  console.log(clientY, "clientY");
};
// const vMove: Directive<any, void> = (
//   el: HTMLElement,
//   bingding: DirectiveBinding
// ) => {
//   let moveElement: HTMLElement = el as HTMLElement;
//   const mouseDown = (e: MouseEvent) => {
//     let X = e.clientX - el.offsetLeft;
//     let Y = e.clientY - el.offsetTop;
//     const move = (e: MouseEvent) => {
//       moveElement.style.position = "absolute";
//       moveElement.style.top = e.clientY - Y + "px";
//       moveElement.style.left = e.clientX - X + "px";
//     };
//     document.addEventListener("mousemove", move);

//     document.addEventListener("mouseup", () => {
//       document.removeEventListener("mousemove", move);
//     });
//   };
//   moveElement.addEventListener("mousedown", mouseDown);
// };
</script>

<style lang="less" scoped>
.content {
  flex: 1;
  margin: 20px;
  overflow: auto;
  .move-box {
  }
}
</style>
