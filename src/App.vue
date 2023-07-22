<template>

  <Header/>

  <main>
    <div class="container my-5">
      <router-view/>
    </div>
  </main>

</template>


<script>
import Header from './components/Header.vue'
export default {
  components: {Header}
}

</script>


<style scoped>

</style>