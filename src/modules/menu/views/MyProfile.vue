<template>
  <NavBar />
  <div class="container">
    <div class="d-flex justify-content-center">
      <img
        id="profile-pic"
        class="rounded-pill"
        src="@/assets/profile_pic.png"
        alt=""
      />
    </div>
    <div class="row mt-4">
      <div class="col-12 border-top border-bottom p-2">
        <span class="options"><b>Log Out</b></span>
      </div>
      <div class="col-12"></div>

      <div class="col-12"></div>
    </div>
  </div>
  <MenuFooter />
</template>
<style scoped>
#profile-pic {
  width: 10rem;
}
.options {
  font-size: x-large;
}
</style>
<script>
import NavBar from '@/components/NavBar.vue';
import MenuFooter from '../components/MenuFooter.vue';
export default {
  components: { NavBar, MenuFooter }
}
</script>