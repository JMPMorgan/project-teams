<template>
  <NavBar />
  <div class="container">
    <div class="row">
      <div class="col-12">
        <label><b>Enter the email</b></label>
        <input type="text" class="form-control" />
      </div>
      <div class="col-12 d-flex justify-content-end mt-2">
        <button class="btn btn-secondary">Send</button>
      </div>
    </div>
  </div>
</template>
<script>
import NavBar from '@/components/NavBar.vue';
export default {
  components: {
    NavBar
  }
}
</script>