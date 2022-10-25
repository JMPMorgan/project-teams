<template>
  <NavBar />
  <div class="container mt-2">
    <div class="row">
      <div class="col-12">
        <label><b>Username</b></label>
        <input type="text" class="form-control" />
      </div>
      <div class="col-12">
        <label><b>Password</b></label>
        <input type="password" class="form-control" />
      </div>
      <div class="col-12 d-flex justify-content-center mt-2">
        <router-link :to="{ name: 'forgot' }">Forget Password?</router-link>
      </div>
      <div class="col-12 d-flex justify-content-end mt-2">
        <button class="btn btn-secondary">Log In</button>
      </div>
    </div>
  </div>
</template>
<script>
import NavBar from '@/components/NavBar.vue';
export default {
  components: {
    NavBar,

  }
}
</script>
<style scoped>
</style>