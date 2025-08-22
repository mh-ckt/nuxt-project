<template>
  <div class="error-container">
    <h2 class="error-code">{{ error.statusCode }}</h2>
    <p class="error-message">{{ error.message }}</p>
    <button class="home-button" @click="handleError">返回首页</button>
  </div>
</template>

<script setup>
const props = defineProps({ error: Object });
const handleError = () => clearError({ redirect: '/' });
</script>

<style scoped>
.error-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #f8f9fa;
  padding: 2rem;
  text-align: center;
}

.error-code {
  font-size: 5rem;
  color: #dc3545;
  margin-bottom: 1rem;
}

.error-message {
  font-size: 1.5rem;
  color: #6c757d;
  margin-bottom: 2rem;
}

.home-button {
  padding: 0.75rem 1.5rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.home-button:hover {
  background-color: #0056b3;
}
</style>