<template>
  <UButton color="error" @click="throwError">触发错误</UButton>
  <UButton color="error" @click="toRequest">发起一个失败请求</UButton>
</template>

<script setup>
// 验证组件错误
const throwError = () => {
  throw new Error('测试全局错误处理');
};

// 测试异步请求错误​
const toRequest = async () => {
  const { error } = await useFetch('/api/nonexistent-route');
  if (error.value) {
    console.error('请求错误:', error.value);
  }
}
</script>