<template>
  <NavBar />
  <div class="container mt-2">
    <div class="row">
      <div class="col-12">
        <label><b>Username</b></label>
        <input v-model="data.username" type="text" class="form-control" />
      </div>
      <div class="col-12">
        <label><b>Password</b></label>
        <input v-model="data.password" type="password" class="form-control" />
      </div>
      <div class="col-12 d-flex justify-content-center mt-2">
        <router-link :to="{ name: 'forgot' }">Forget Password?</router-link>
      </div>
      <div class="col-12 d-flex justify-content-end mt-2">
        <button @click="logUser" class="btn btn-secondary">Log In</button>
      </div>
    </div>
  </div>
</template>
<script>
import NavBar from '@/components/NavBar.vue'
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      data: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    ...mapActions('authModule', ['logIn']),
    async logUser() {
      const response = await this.logIn(this.data)
      console.log(response)
      if (response.isLogged) {
        this.$router.push({ name: 'menu' })
        return;
      }
      alert('Error')
    }

  },

  components: {
    NavBar,

  }
}
</script>
<style scoped>
</style>