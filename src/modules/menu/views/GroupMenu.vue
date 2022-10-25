<template>
  <NavBar />
  <div class="container mt-2">
    <div class="row">
      <h1>Hola</h1>
    </div>
  </div>
  <MenuFooter />
</template>
<style scoped>
</style>
<script>
import MenuFooter from '../components/MenuFooter.vue';
import NavBar from '@/components/NavBar.vue';
export default {
  components: { MenuFooter, NavBar }
}
</script>