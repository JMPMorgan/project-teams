<template>
  <NavBar />
  <div>Mensaje {{ id }}</div>
  <div class="container">
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
      message: ""
    }
  },
  methods: {
    sendMessega() {
      console.log(this.message)
    }
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