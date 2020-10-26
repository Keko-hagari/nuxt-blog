<template>
<div>
  <div class="container">
    <p><button class="btn" @click="login">ログイン</button></p>
  </div>
</div>
</template>

<script>
export default {
  middleware: "maintainState",
  methods: {
    login() {
      console.log("login");
      this.$store.dispatch("login");
    }
  }
};
</script>

<style lang="css" scoped>
.btn {
  width: 150px;
  height: 100px;
  border-radius: 100px;
  background-color: #c1666b;
  color: white;
  margin: 250px 47%;
}
</style>
