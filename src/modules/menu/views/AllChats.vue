<template>
  <NavBar />
  <div class="container">
    <h1>All Chats</h1>
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