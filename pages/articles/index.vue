<template>
<div class="container">
  <div v-for="(article, i) in articles" :key="i">
    <nuxt-Link :to="'/articles/' + article.id">
      <Article :article="article" />
    </nuxt-Link>
  </div>
</div>
</template>

<script>
import firebase from "@/plugins/firebase";
import Article from "@/components/Article.vue";

export default {
  middleware: "maintainState",
  components: {
    Article
  },
  data() {
    return {
      articles: []
    };
  },
  mounted: function () {
    const db = firebase.firestore();
    db.collection("articles")
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          console.log(doc.id, " => ", doc.data());
          this.articles.push(doc);
        });
      });
  }
};
</script>

<style lang="css" scoped>
.container {
  width: 80%;
  height: 100%;
}
</style>
