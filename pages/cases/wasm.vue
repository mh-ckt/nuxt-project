<!-- 目前wasm处于实验阶段，此处代码只是一个尝试，并不完整 -->
<script setup>
const a = ref(100)
const b = ref(250)

const { data } = await useAsyncData(
  () => $fetch('/api/sum', { params: { a: a.value, b: b.value } }),
  { default: () => ({ sum: 0 }) } // 默认值
);
</script>

<template>
  <div dir="experimental/wasm">
    <p>
      <code>a = {{ a }}</code>
    </p>
    <p>
      <code>b = {{ b }}</code>
    </p>
    <p>
      Computation performed server-side with WASM :
      <br>
      <code>{{ a }} + {{ b }} = {{ data.sum }}</code>
    </p>
  </div>
</template>
