<script setup lang="ts">
const { $hello } = useNuxtApp()
import CaseList from './case-list.vue';
console.log($hello('World')) 
</script>

<template>
  <CaseList />

</template>

<style></style>