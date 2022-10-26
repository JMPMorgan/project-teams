
<template>
  <div class="container mt-2">
    <input
      @keyup="searchUser"
      v-model="user"
      type="text"
      class="form-control"
    />
    <div class="row" v-if="hasUsers">
      <div class="col-12 my-3" v-for="user in users" :key="user._id">
        <div class="d-flex justify-content-between">
          <span
            ><b>{{ user.name }} {{ user.lastname }} - {{ user.username }}</b>
          </span>
          <button
            @click="addUserToConversation(user._id)"
            class="btn btn-info d-flex justify-content-end"
          >
            papa
          </button>
        </div>
      </div>
    </div>
    <div class="d-flex justify-content-end my-2">
      <button class="btn btn-outline-primary">Search</button>
    </div>
  </div>
</template>
<script>
import { mapActions, mapState } from 'vuex'
export default {
  props: {
    toGroup: {
      type: Boolean,
      required: true
    },
    idGroup: {
      type: String
    }
  },
  data() {
    return {
      user: ""
    }
  },
  methods: {
    ...mapActions('groupModule', ['searchUsers', 'addUserToGroup', 'createNewConversation']),
    searchUser() {
      if (this.user.trim().length > 0) {
        const data = {
          token: this.jwt,
          name: this.user
        }
        this.searchUsers(data)
      }
    },
    addUserToConversation(id) {
      if (this.toGroup) {
        const data = {
          iduser: id,
          idgroup: this.idGroup,
          token: this.jwt
        }
        this.addUserToGroup(data)
        return;
      }
      const data = {
        token: this.jwt,
        idreceiver: id
      }
      this.createNewConversation(data)
    }
  },
  computed: {
    ...mapState('authModule', ['jwt']),
    ...mapState('groupModule', ['hasUsers', 'users'])
  }
}
</script>