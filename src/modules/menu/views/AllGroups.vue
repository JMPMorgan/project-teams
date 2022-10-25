<template>
  <NavBar />
  <div class="container">
    <ContainerGroups />
  </div>
  <MenuFooter />
</template>
<script>
import NavBar from '@/components/NavBar.vue';
import MenuFooter from '../components/MenuFooter.vue';
import ContainerGroups from '../layouts/ContainerGroups.vue';
export default {
  components: { NavBar, MenuFooter, ContainerGroups }
}
</script>