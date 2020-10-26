<template>
<div class="header-container">
  <button class="top-btn">
    <nuxt-link to="/articles/">My-blog</nuxt-link>
  </button>
  <p class="post-link">
    <nuxt-link to="/articles/post">投稿</nuxt-link>
  </p>
  <p class="user-name">{{ getName }}</p>
</div>
</template>

<script>
export default {
  middleware: "maintainState",
  data() {
    return {
      user: {
        uid: "",
        name: ""
      }
    };
  },
  computed: {
    getName: function () {
      this.user = this.$store.getters.getUser;
      return this.user.name;
    }
  }
};
</script>

<style lang="css" scoped>
.header-container {
  height: 70px;
  width: 100%;
  background-color: gray !important;
  display: flex;
}

.top-btn {
  width: 80px;
  height: 60px;
  border-radius: 50%;
  background-color: #c1666b;
  margin: 3px 5px;
}

.post-link {
  font-size: 40px;
  font-style: bold;
  text-decoration: none;
  margin: 5px auto 0 auto;
}

.user-name {
  font-size: 30px;
  font-style: bold;
  margin: 10px 10px 5px 0;
  line-height: 1.7;
}
</style>
