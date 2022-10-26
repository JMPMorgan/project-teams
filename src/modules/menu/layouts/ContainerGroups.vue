<template>
  <div class="row">
    <div class="col-6 p-2 groups" v-for="group in groups" :key="group._id">
      <div
        @click="$router.push({ name: 'mygroup', params: { id: group._id } })"
        class="course d-flex align-items-center container rounded"
      >
        <h4>{{ group.name }}</h4>
      </div>
    </div>
  </div>
</template>
<style scoped>
.groups {
  /*margin: 20px 0px 20px 10px;*/
  color: white;
}
.course {
  background: blue;
  max-height: 10rem;
  height: 8rem;
  cursor: pointer;
}
</style>
<script>
import { mapActions, mapState } from 'vuex'
export default {
  data() {
    return {
    }
  },
  computed: {
    ...mapState('groupModule', ['groups']),
    ...mapState('authModule', ['jwt'])
  },
  methods: {
    ...mapActions('groupModule', ['loadGroups'])
  },
  async created() {
    console.log(this.groups)
    await this.loadGroups(this.jwt)
  }
}
</script>