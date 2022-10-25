<template>
  <nav class="navbar navbar-expand-lg bg-light">
    <div class="container-fluid">
      <router-link class="navbar-brand" :to="{ name: 'home' }"
        ><img src="@/assets/logoGC.png" id="logo" alt="Logo"
      /></router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul v-for="link in links" :key="link.to" class="navbar-nav mx-2">
          <span @click="$router.push({ name: link.to })"
            ><b>{{ link.name }}</b></span
          >
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  data() {
    return {
      links: [
        {
          to: "login",
          name: "Log In"
        },
        {
          to: "signup",
          name: "Sing Up"
        }
      ]
    }
  }
}
</script>
<style scoped>
span {
  cursor: pointer;
}
span:hover {
  color: #1d6042;
}
#logo {
  width: 3rem;
}
</style>