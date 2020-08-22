<template>
  <div class="container">
    <form class="form" @submit="onSubmit">
      <h1 class="title">Log In</h1>
      <div class="field">
        <p class="control">
          <input
            v-model="email"
            class="input"
            type="email"
            placeholder="Email"
          />
        </p>
      </div>
      <div class="field">
        <p class="control">
          <input
            v-model="password"
            class="input"
            type="password"
            placeholder="Password"
          />
        </p>
      </div>

      <div class="field">
        <button type="submit" class="button is-primary is-fullwidth">
          Login
        </button>
      </div>

      <div v-show="error" class="notification is-danger">
        <p>Invalid password</p>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  middleware: 'isLoggedIn',
  data() {
    return {
      email: '',
      password: '',
      error: null,
    }
  },
  methods: {
    async onSubmit(e) {
      e.preventDefault()

      const payload = {
        data: {
          email: this.email,
          password: this.password,
        },
      }

      try {
        await this.$auth.loginWith('local', payload)
        this.$router.push('/')
      } catch (error) {
        this.error = error
      }
    },
  },
}
</script>

<style scoped>
.form {
  width: 320px;
}
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
