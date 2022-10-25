<template>
  <NavBar />
  <div class="container mt-2">
    <form @submit.prevent="sendData">
      <div class="row">
        <div class="col-12 d-flex justify-content-center mb-2">
          <img src="@/assets/profile_pic.png" class="img-fluid rounded-pill" />
          <input type="file" class="d-none" />
        </div>
        <div class="col-12">
          <label><b>Name</b></label>
          <input
            @keyup="checkInput('name')"
            v-model="user.name"
            type="text"
            class="form-control"
          />
          <small :class="[errorInputs.name.isActive]">
            {{ errorInputs.name.errorText }}
          </small>
        </div>
        <div class="col-12">
          <label><b>Last Name</b></label>
          <input
            @keyup="checkInput('lastname')"
            v-model="user.lastname"
            type="text"
            class="form-control"
          />
          <small :class="[errorInputs.lastname.isActive]">
            {{ errorInputs.lastname.errorText }}
          </small>
        </div>

        <div class="col-12">
          <label><b>Username</b></label>
          <input
            @keyup="checkInput('username')"
            v-model="user.username"
            type="text"
            class="form-control"
          />
          <small :class="[errorInputs.username.isActive]">
            {{ errorInputs.username.errorText }}
          </small>
        </div>
        <div class="col-12">
          <label><b>E mail</b></label>
          <input
            @keyup="checkInput('email')"
            v-model="user.email"
            type="text"
            class="form-control"
          />
          <small :class="[errorInputs.email.isActive]">
            {{ errorInputs.email.errorText }}
          </small>
        </div>
        <div class="col-6">
          <label><b>Password</b></label>
          <input
            @keyup="checkInput('password')"
            v-model="user.password"
            type="text"
            class="form-control"
          />
          <small :class="[errorInputs.password.isActive]">
            {{ errorInputs.password.errorText }}
          </small>
        </div>
        <div class="col-6">
          <label><b>Confirm Password</b></label>
          <input
            @keyup="checkInput('cpassword')"
            v-model="user.cpassword"
            type="text"
            class="form-control"
          />
          <small :class="[errorInputs.cpassword.isActive]">
            {{ errorInputs.cpassword.errorText }}
          </small>
        </div>
        <div class="col-12 d-flex justify-content-end mt-2">
          <button class="btn btn-secondary">SignUp</button>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
import NavBar from '@/components/NavBar.vue';
export default {
  components: { NavBar },
  data() {
    return {
      user: {
        name: '',
        lastname: '',
        username: '',
        email: '',
        password: '',
        cpassword: ''
      },
      errorInputs: {
        name: {
          isActive: 'success-input',
          errorText: 'Name is Required'
        },
        lastname: {
          isActive: 'success-input',
          errorText: 'Last Name is Required'
        },
        username: {
          isActive: 'success-input',
          errorText: 'Username is required'
        },
        email: {
          isActive: 'success-input',
          errorText: 'Email is required'
        },
        password: {
          isActive: 'success-input',
          errorText: 'Password is required'
        },
        cpassword: {
          isActive: 'success-input',
          errorText: 'Password dont match'
        }
      }

    }
  },
  methods: {
    sendData() {

    },
    checkInput(input) {
      if (input === 'username') {
        const regex = new RegExp('^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$')

        this.errorInputs[input].isActive = (regex.test(this.user[input])) ? 'success-input' : 'error-input'
        return;
      }
      if (input === 'password') {
        const active = (this.user[input].trim().length >= 8) ? true : false
        this.errorInputs[input].isActive = (active) ? 'success-input' : 'error-input'
        return;
      }
      if (input === 'cpassword') {
        const active = (this.user[input].trim().length >= 8) ? true : false
        this.errorInputs[input].isActive = (active && this.user[input] === this.user.password) ? 'success-input' : 'error-input'
        return;
      }
      if (input === 'email') {
        // eslint-disable-next-line no-useless-escape, no-invalid-regexp
        //const regex = new RegExp("/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/")
        this.errorInputs[input].isActive = (this.user[input].trim().length >= 8) ? 'success-input' : 'error-input'
        return;
      }

    }
  },

}
</script>
<style scoped>
img {
  width: 8rem;
}

.error-input {
  display: contents;
}

.success-input {
  display: none;
}
</style>