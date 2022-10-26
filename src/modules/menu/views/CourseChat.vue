<template>
  <NavBar />
  <div class="container" v-if="isLoading">
    <div class="d-flex justify-content-between">
      <h2>{{ group.name }}</h2>
      <button @click="toggleAddUser" class="btn btn-outline-success">
        <font-icon icon="fa-solid fa-user-plus" />
      </button>
    </div>
    <div class="border border-rounded m-2" v-if="isSearchUser">
      <UserFinder :toGroup="true" :idGroup="id" />
    </div>
    <div class="row">
      <div class="col-12" v-for="message in messages" :key="message._id">
        <span>{{ message.message }}</span>
      </div>
    </div>
    <div class="container-message w-100">
      <div class="row w-100">
        <div class="col-10">
          <input
            v-model="message"
            @keyup.enter="sendMessega"
            type="text"
            class="form-control rounded rounded-pill"
          />
        </div>
        <div class="col-1">
          <button @click="sendMessega" class="btn btn-outline-success">
            <font-icon icon="fa-solid fa-paper-plane" />
          </button>
        </div>
      </div>
    </div>
  </div>
  <MenuFooter />
</template>
<script>
import { mapActions, mapGetters, mapState } from 'vuex'
import NavBar from '@/components/NavBar.vue'
import MenuFooter from '../components/MenuFooter.vue'
import UserFinder from '../components/UserFinder.vue'
export default {
  props: {
    id: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      group: {},
      isLoading: false,
      message: "",
      isSearchUser: false
    }
  },
  methods: {
    ...mapActions('groupModule', ['getMessages', 'sendMessage']),
    async loadChat() {
      this.group = this.getGroupByID(this.id)
      if (this.group) {
        this.isLoading = true
        console.log(this.jwt)
        const data = {
          id: this.id,
          token: this.jwt
        }
        console.log(data)
        this.messages = await this.getMessages(data)
        console.log(this.messages)
      }
    },
    async sendMessega() {
      if (this.message.trim().length > 0) {
        console.log(this.message)
        const data = {
          message: this.message,
          idgroup: this.id,
          token: this.jwt
        }
        await this.sendMessage(data)
      }
    },
    toggleAddUser() {
      this.isSearchUser = !this.isSearchUser
    }

  },
  computed: {
    ...mapGetters('groupModule', ['getGroupByID']),
    ...mapState('authModule', ['jwt']),
    ...mapState('groupModule', ['messages'])
  },
  created() {
    this.loadChat()
  },
  watch: {
    id() {
      this.loadChat()
    }
  },
  components: { MenuFooter, NavBar, UserFinder }
}
</script>
<style scoped>
.container-message {
  display: flex;
  position: fixed;
  bottom: 4rem;
}
</style>