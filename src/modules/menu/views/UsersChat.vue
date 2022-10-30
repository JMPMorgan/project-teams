<template>
  <div>
    <NavBar />
    <div class="container container-messages" v-if="!isLoading">
      <div class="row">
        <div v-if="isReverseActive" class="col-2 p-0">
          <div
            class="
              container-circle
              d-flex
              justify-content-center
              align-items-center
            "
          >
            <div class="pulsating-circle"></div>
          </div>
        </div>
        <div class="col-10">
          <h2>Chats's {{ userReverse }}</h2>
        </div>
      </div>
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
      messagesChat: [],
      isReverseActive: false,
      userReverse: ""
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
    this.socketInstance.on("usuarios-activos", (users) => {
      if (users) {
        const user = users.filter(user => (user._id === this.receiver))
        if (user.length > 0) {
          this.userReverse = user[0].username
          this.isReverseActive = true;
          return;
        }
      }
      this.isReverseActive = false;
    })
  },
  beforeUnmount() {
    this.socketInstance.emit("desconectar-chat")
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

.pulsating-circle {
  /*display: flex;

  */
  position: absolute;
  /* padding: 10px 0px 0px 0px;*/
  /*transform: translateX(-50%) translateY(-50%);*/
  width: 10px;
  height: 10px;
  z-index: 50;
}

.pulsating-circle:before {
  content: "";
  position: absolute;
  display: block;
  width: 300%;
  height: 300%;
  box-sizing: border-box;
  margin-left: -100%;
  margin-top: -100%;
  border-radius: 45px;
  background-color: #01a4e9;
  animation: pulse-ring 1.25s cubic-bezier(0.215, 0.61, 0.355, 1) infinite;
  z-index: 50;
}

.pulsating-circle:after {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  display: block;
  width: 100%;
  height: 100%;
  background-color: rgb(17, 243, 84);
  border-radius: 15px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);
  animation: pulse-dot 1.25s cubic-bezier(0.455, 0.03, 0.515, 0.955) -0.4s infinite;
  z-index: 50;
}

.container-circle {
  padding: 15px 0px 0px 35px;
}

@keyframes pulse-ring {
  0% {
    transform: scale(0.33);
  }
  80%,
  100% {
    opacity: 0;
  }
}

@keyframes pulse-dot {
  0% {
    transform: scale(0.8);
  }
  50% {
    transform: scale(1);
  }
  100% {
    transform: scale(0.8);
  }
}
</style>