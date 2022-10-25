<template>
  <NavBar />
  <div class="container mt-2">
    <div class="row">
      <h1>Hola {{ name }}</h1>
    </div>
  </div>
  <MenuFooter />
</template>
<style scoped>
</style>
<script>
import MenuFooter from '../components/MenuFooter.vue';
import NavBar from '@/components/NavBar.vue';
import { mapActions, mapState } from 'vuex';

export default {
  data() {
    return {
      username: '',
      name: '',
      lastname: ''
    }
  },
  methods: {
    ...mapActions('authModule', ['getUserInfo'])
  },
  computed: {
    ...mapState('authModule', ['jwt', 'isLoggin']),
  },
  async created() {
    if (!this.isLoggin) {
      alert('Log In Please')
      this.$router.push({ name: 'home' })
    }
    const data = await this.getUserInfo(this.jwt)
    if (!data) {
      alert('User not found')
      this.$router.push({ name: 'home' })
    }
    this.username = data.username
    this.name = data.name
    this.lastname = data.lastname
  },
  components: { MenuFooter, NavBar }

}
</script>