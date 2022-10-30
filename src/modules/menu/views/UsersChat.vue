<template>
  <div>
    <NavBar />
    <div class="container container-messages" v-if="!isLoading">
      <div class="m-2 row">
        <div class="col-12" v-for="message in messages" :key="message._id">
          <div v-if="message.situation === 0">
            <small
              ><b>{{ message.from }}</b></small
            >
            {{ message.message }}
          </div>
          <div v-else>
            <small
              ><b>{{ message.from }} </b></small
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
  </div>
</template>
<script>
import NavBar from '@/components/NavBar.vue'
import MenuFooter from '../components/MenuFooter.vue'
import { mapActions, mapState } from 'vuex'
import io from "socket.io-client"
export default {
  props: {
    id: {
      type: String,
      required: true
    },
    receiver: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      message: "",
      messagesChat: []
    }
  },
  methods: {
    ...mapActions('groupModule', ['sendMessageToUser', 'getConversationPerUser']),
    sendMessega(situation = 0) {
      const data = {
        token: this.jwt,
        sendToUser: true,
        message: this.message,
        userreceiver: this.receiver,
        idconversation: this.id,
        situation
      }
      this.socketInstance.emit("mensaje-privado", data)
      this.sendMessageToUser(data)
      this.message = ''
    },
    getLocation() {
      navigator.geolocation.getCurrentPosition(this.sendLocation)
    },
    addNewMessage(message) {
      this.messages.push(message)
    },
    sendLocation(position) {
      this.message = `https://maps.google.com/?q=${position.coords.latitude},${position.coords.longitude}`
      this.sendMessega(1)
    }
  },
  computed: {
    ...mapState('authModule', ['jwt']),
    ...mapState('groupModule', ['messages', 'isLoading']),
  },
  created() {

    const data = {
      token: this.jwt,
      id: this.id
    }
    this.getConversationPerUser(data)
    this.socketInstance = io("http://localhost:8000", {
      extraHeaders: {
        "token": this.jwt
      }
    })
    this.socketInstance.on("mensaje-privado-chat", (data) => {
      this.addNewMessage(data)
    })
  },

  components: { NavBar, MenuFooter }
}
</script>
<style scoped>
.container-message {
  display: flex;
  position: fixed;
  bottom: 4rem;
}
.container-messages {
  height: 45rem;
  overflow-y: scroll;
}
</style>