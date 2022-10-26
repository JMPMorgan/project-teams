<template>
  <NavBar />
  <div class="container">
    <div class="d-flex justify-content-between">
      <h1>Private Chats</h1>
      <button @click="toggleAddUser" class="btn btn-outline-success">
        <font-icon icon="fa-solid fa-user-plus" />
      </button>
    </div>
    <div class="border border-rounded m-2" v-if="isSearchUser">
      <UserFinder :toGroup="false" />
    </div>
  </div>
  <div class="row container" v-if="isLoading">
    <div
      class="col-12 border-bottom my-1"
      v-for="message in messages"
      :key="message._id"
      @click="$router.push({ name: 'chat', params: { id: message._id } })"
    >
      <span
        ><b
          >{{ message.user.username }} - {{ message.receiver.username }}</b
        ></span
      ><br />
      <span>{{ message.message.message }}</span>
    </div>
  </div>
  <MenuFooter />
</template>
<style scoped>
</style>
<script>
import MenuFooter from '../components/MenuFooter.vue'
import NavBar from '@/components/NavBar.vue'
import UserFinder from '../components/UserFinder.vue'
import { mapActions, mapState } from 'vuex';

export default {
  data() {
    return {
      isSearchUser: false,
      isLoading: false,
    }
  },
  methods: {
    ...mapActions('groupModule', ['getMessagesPerUser']),
    toggleAddUser() {
      this.isSearchUser = !this.isSearchUser
    }
  },
  computed: {
    ...mapState('authModule', ['jwt']),
    ...mapState('groupModule', ['messages'])
  },
  created() {
    const data = {
      token: this.jwt
    }
    this.getMessagesPerUser(data)
    this.isLoading = true
    console.log(this.messages)
  },
  components: { MenuFooter, NavBar, UserFinder }
}
</script>