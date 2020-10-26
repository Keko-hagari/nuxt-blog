<template>
<div>
  <p class="title">{{ article.title }}</p>
  <p class="body">{{ article.body }}</p>
</div>
</template>

<script>
import firebase from "@/plugins/firebase";
export default {
  middleware: "maintainState",
  data() {
    return {
      article: {}
    };
  },
  mounted() {
    const db = firebase.firestore();
    db.collection("articles")
      .doc(this.$route.params.id)
      .get()
      .then(r => {
        console.log(r.data(), r.id);
        this.article = r.data();
      });
  }
};
</script>

<style lang="css" scoped>
.title {
  width: 200px;
  margin: 10px auto;
  border: solid 1px;
  padding: 2px 2px;
}

.body {
  width: 800px;
  height: 400px;
  margin: 0 auto;
  border: solid 1px;
}
</style>
