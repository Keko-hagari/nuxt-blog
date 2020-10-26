<template>
<div class="wrapper">
  <p class="title-container">
    <nuxt-link :to="'/articles/' + article.id">{{
        article.data().title
      }}</nuxt-link>
  </p>
  <p class="edit-container">
    <nuxt-link :to="'/articles/' + article.id + '/edit'">編集</nuxt-link>
  </p>
</div>
</template>

<script>
export default {
  props: {
    article: {
      require: true
    }
  }
};
</script>

<style lang="css" scoped>
.wrapper {
  display: flex;
}

.title-container {
  font-size: 30px;
  border: solid 1px;
  width: 900px;
  padding: 2px 10px 2px 10px;
  margin: 10px 0 0 10px;
  text-decoration: none;
  color: black;
}

.edit-container {
  font-size: 30px;
  height: 51px;
  border: solid 1px;
  padding: 2px 10px;
  margin: 10px 0 0 0;
  text-decoration: none;
  color: black;
  background-color: gray;
}
</style>
