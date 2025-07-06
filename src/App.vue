<template>
  <div>
    <h1>PayPal IPN Data</h1>
    <div v-if="ipnData">
      <h2>Headers</h2>
      <pre>{{ ipnData.headers }}</pre>
      <h2>Body</h2>
      <pre>{{ ipnData.body }}</pre>
    </div>
    <div v-else>
      <p>Waiting for IPN notification...</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

const ipnData = ref<any>(null);

const fetchData = async () => {
  try {
    const response = await fetch('http://localhost:3000/ipn-data');
    const data = await response.json();
    ipnData.value = data;
  } catch (error) {
    console.error('Error fetching IPN data:', error);
  }
};

onMounted(() => {
  setInterval(fetchData, 2000);
});
</script>

<style scoped>
pre {
  background-color: #f4f4f4;
  padding: 1rem;
  border-radius: 5px;
  white-space: pre-wrap;
}
</style>