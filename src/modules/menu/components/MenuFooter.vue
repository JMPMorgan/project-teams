<template>
  <div id="container" class="pb-2">
    <div class="row mt-2">
      <div class="col-3 d-flex align-items-center justify-content-center">
        <router-link :to="{ name: 'menu' }"
          ><font-icon class="icons" icon="fa-solid fa-house" />
        </router-link>
        <!--<font-icon icon="fa-solid fa-user" />
                <font-icon icon="fa-solid fa-gear" />-->
      </div>
      <div class="col-3 d-flex align-items-center justify-content-center">
        <router-link :to="{ name: 'chats' }">
          <font-icon class="icons" icon="fa-solid fa-message"
        /></router-link>
      </div>
      <div class="col-3 d-flex align-items-center justify-content-center">
        <router-link :to="{ name: 'groups' }">
          <font-icon class="icons" icon="fa-solid fa-users"
        /></router-link>
      </div>
      <div class="col-3 d-flex align-items-center justify-content-center">
        <router-link :to="{ name: 'myprofile' }">
          <font-icon class="icons" icon="fa-solid fa-user" />
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {

}
</script>
<style scoped>
#container {
  overflow-x: hidden;
  position: absolute;
  bottom: 0;
  max-width: 100%;
  width: 100%;
  background: #505050;
}
.row {
  height: 2.5rem;
}
.icons {
  color: rgb(233, 233, 233);
  background: #000;
  padding: 10px;
  border-radius: 20px;
}
</style>