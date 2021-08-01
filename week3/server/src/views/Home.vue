<template>
  <div class="home">
    <Demo></Demo>
  </div>
</template>

<script>
// @ is an alias to /src
import Demo from '@/components/Demo.vue'

export default {
  name: 'Home',
  components: {
    Demo,
  }
}
</script>
