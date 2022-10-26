<template>
  <NavBar />
  <div class="container" v-if="isLoading">
    <div class="d-flex justify-content-between">
      <h2>{{ group.name }}</h2>
      <button class="btn btn-outline-success">
        <font-icon icon="fa-solid fa-user-plus" />
      </button>
    </div>
    <div class="row">
      <div class="col-12" v-for="message in message" :key="message.id"></div>
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
import { mapGetters } from 'vuex'
import NavBar from '@/components/NavBar.vue'
import MenuFooter from '../components/MenuFooter.vue'
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
      messages: [],
      message: ""
    }
  },
  methods: {
    loadChat() {
      this.group = this.getGroupByID(this.id)
      if (this.group) {
        this.isLoading = true
      }
    },
    sendMessega() {
      if (this.message.trim().length > 0) {
        console.log(this.message)
      }
    }

  },
  computed: {
    ...mapGetters('groupModule', ['getGroupByID'])
  },
  created() {
    this.loadChat()
  },
  watch: {
    id() {
      this.loadChat()
    }
  },
  components: { MenuFooter, NavBar }
}
</script>
<style scoped>
.container-message {
  display: flex;
  position: fixed;
  bottom: 4rem;
}
</style>