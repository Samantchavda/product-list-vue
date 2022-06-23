<template>
  <div>
    <form @submit.prevent="login">
        <label for="username">User Name</label>
        <input type="text" name="username">
        <button class="btn">Login</button>
    </form>
  </div>
</template>

<script>

export default {
  name: 'LoginView',
  methods: {
      login: function(){
          window.user = "samant";
          let redirectPath = this.$route.query.redirect || "/";
          this.$router.push(redirectPath);
      }
  }
}
</script>
