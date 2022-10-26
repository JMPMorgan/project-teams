<template>
  <div class="row mt-2">
    <div class="col-12">
      <input v-model="name" type="text" class="form-control" />
      <label>Group's Name</label>
    </div>
    <div class="col-12 d-flex justify-content-end">
      <button @click="createGroup" class="btn btn-outline-success">
        Create
      </button>
    </div>
  </div>
</template>
<script>
import { mapActions, mapState } from 'vuex';
export default {
  data() {
    return {
      name: ''
    }
  },
  methods: {
    ...mapActions('groupModule', ['createNewGroup']),
    async createGroup() {
      console.log('chill')
      console.log(this.jwt)
      const data = {
        name: this.name,
        jwt: this.jwt
      }
      await this.createNewGroup(data)

    }
  },
  computed: {
    ...mapState('authModule', ['jwt']),
  }
}
</script>