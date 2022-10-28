<template>
  <div>
    <NavBar />
    <div class="container" v-if="!isLoading">
      <div class="m-2 row">
        <div class="col-12" v-for="message in messages" :key="message._id">
          <small
            ><b>{{ message.from }}</b></small
          >
          {{ message.message }}
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
    sendMessega() {
      const data = {
        token: this.jwt,
        sendToUser: true,
        message: this.message,
        userreceiver: this.receiver,
        idconversation: this.id,
      }
      this.socketInstance.emit("mensaje-privado", data)
      this.sendMessageToUser(data)
      this.message = ''
    },
    addNewMessage(message) {
      this.messages.push(message)
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
</style>