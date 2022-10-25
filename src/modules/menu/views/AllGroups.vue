<template>
  <NavBar />
  <div class="container">
    <div class="d-flex justify-content-end">
      <button @click="requestNewGroup = true" class="btn btn-outline-primary">
        New Group
      </button>
    </div>
    <div v-if="requestNewGroup">
      <NewGroup />
    </div>
    <ContainerGroups />
  </div>
  <MenuFooter />
</template>
<script>
import NavBar from '@/components/NavBar.vue'
import MenuFooter from '../components/MenuFooter.vue'
import ContainerGroups from '../layouts/ContainerGroups.vue'
import NewGroup from '../layouts/NewGroup.vue'

export default {
  data() {
    return {
      requestNewGroup: false
    }
  },
  components: { NavBar, MenuFooter, ContainerGroups, NewGroup }
}
</script>