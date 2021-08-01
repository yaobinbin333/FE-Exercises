<template>
  <div class="id-container">
    <iframe src="http://localhost:3001" v-if="!isLoading" id="demo-iframe"> </iframe>
  </div>
</template>

<script>
export default {
  props: ['isLoading']
}
</script>

<style scoped>
#demo-iframe {
  width: 100%;
  border: none;
  height: 100%;
}
</style>