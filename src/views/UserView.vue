<template>
  <div>
    User : {{userName}}

    <button @click="logout">Logout</button>
  </div>
</template>

<script>

export default {
  name: 'UserView',
  data() {
    return {
      userName: window.user
    };
  },
  methods: {
    logout: function(){
        window.user = "";
        this.$router.push({name: "login"});
    }
  }
}
</script>
