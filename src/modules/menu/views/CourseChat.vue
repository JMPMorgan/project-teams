<template>
  <NavBar />
  <div class="container" v-if="!isLoading">
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
        <div v-if="message.situation === 0">
          <small
            ><b>{{ message.from }}</b></small
          >
          {{ message.message }}
        </div>
        <div v-else>
          <small
            ><b>{{ message.from }}</b></small
          >
          <a :href="message.message" target="_blank">Location</a>
        </div>
      </div>
    </div>
    <div class="container-message w-100">
      <div class="row w-100">
        <div class="col-9 ps-1 pe-0">
          <input
            v-model="message"
            @keyup.enter="sendMessega"
            type="text"
            class="form-control rounded rounded-pill"
          />
        </div>
        <div class="col-3 d-flex">
          <button @click="sendMessega" class="btn btn-outline-success">
            <font-icon icon="fa-solid fa-paper-plane" />
          </button>
          <button @click="getLocation" class="btn btn-outline-info">
            <font-icon icon="fa-solid fa-location-crosshairs" />
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
import io from "socket.io-client"

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
        this.messages = await this.getMessages(data)
      }
    },
    async sendMessega(situation = 0) {
      if (this.message.trim().length > 0) {
        console.log(this.message)
        const data = {
          message: this.message,
          idgroup: this.id,
          token: this.jwt,
          situation
        }
        await this.sendMessage(data)
        this.socketInstance.emit("mensaje-grupo", data)
        this.message = '';
      }
    },
    getLocation() {
      navigator.geolocation.getCurrentPosition(this.sendLocation)
    },
    sendLocation(position) {
      this.message = `https://maps.google.com/?q=${position.coords.latitude},${position.coords.longitude}`
      this.sendMessega(1)
    },
    toggleAddUser() {
      this.isSearchUser = !this.isSearchUser
    },
    addNewMessage(message) {
      this.messages.push(message)
    }

  },
  computed: {
    ...mapGetters('groupModule', ['getGroupByID']),
    ...mapState('authModule', ['jwt']),
    ...mapState('groupModule', ['messages'])
  },
  created() {
    this.loadChat()
    this.socketInstance = io("http://localhost:8000", {
      extraHeaders: {
        "token": this.jwt,
        "group": this.id
      }
    })
    this.socketInstance.on("mensaje-grupo-recibido", (data) => {
      this.addNewMessage(data)

    })
    this.socketInstance.on("usuarios-activos", (data) => {
      console.log(data)
    })
  },
  beforeUnmount() {
    this.socketInstance.emit("desconectar-chat-sala", { group: this.id })
    this.socketInstance.emit("desconectar-chat")


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