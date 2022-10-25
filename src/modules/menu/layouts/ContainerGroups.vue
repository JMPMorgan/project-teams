<template>
  <div class="row">
    <div class="col-6 p-2 groups" v-for="group in groups" :key="group.id">
      <div class="course d-flex align-items-center container rounded">
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
export default {
  data() {
    return {
      groups: [
        {
          id: 1,
          name: "Group 1",
        },
        {
          id: 2,
          name: "Group 2",
        },
        {
          id: 3,
          name: "Group 3",
        },
        {
          id: 4,
          name: "Group 4",
        },
        {
          id: 5,
          name: "Group 5",
        },
        {
          id: 6,
          name: "Group 6"
        }
      ]
    }
  }
}
</script>