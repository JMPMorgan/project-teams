<template>
  <div class="home">
    <NavBar />
    <img class="d-flex mx-auto" alt="Vue logo" src="../assets/logoGC.png" />
    <div class="container-fluid">
      <h2 class="text-center">Aplicacion de Mensajes Chidos</h2>
      <div class="row">
        <div class="col-6 justify-content-center d-flex">
          <router-link :to="{ name: 'signup' }" class="btn btn-secondary"
            >Ir a Sign Up</router-link
          >
        </div>
        <div class="col-6 d-flex justify-content-center">
          <router-link :to="{ name: 'login' }" class="btn btn-secondary"
            >Ir a Log In</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
// @ is an alias to /src

export default {
  name: "HomeView",
  components: { NavBar }
}
</script>
