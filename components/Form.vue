<template>
<div>
  <form @submit.prevent>
    画像ファイル
    <p>
      <input type="file" name="pic" />
    </p>
    <p>
      <input @change="info" v-model="title" type="text" name="title" />
    </p>
    <p>
      <textarea @change="info" v-model="body" placeholder="    記事を書く" name="body" />
    </p>
    <p>
      <input @click="submit" type="submit" value="send" />
    </p>
  </form>
</div>
</template>

<script>
import firebase from "../plugins/firebase";

export default {
  props: {
    article: {
      require: true
    },
    isUpdate: {
      reqire: true,
      type: Boolean
    }
  },
  data() {
    return {
      pic: "",
      title: "",
      body: ""
    };
  },
  watch: {
    article: function () {
      this.title = this.article.title;
      this.body = this.article.body;
    }
  },
  methods: {
    info: function () {
      console.log(this.title, this.body, firebase);
    },
    submit: async function () {
      const db = firebase.firestore();
      if (this.isUpdate) {
        let dbArticles = db.collection("articles").doc(this.$route.params.id);
        dbArticles
          .set({
            title: this.title,
            body: this.body
          })
          .then(ref => {
            this.$router.push("/articles/" + this.$route.params.id);
          });
      } else {
        let dbArticles = db.collection("articles");
        dbArticles
          .add({
            title: this.title,
            body: this.body
          })
          .then();
      }
    }
  }
};
</script>

<style lang="css" scoped>
form {
  margin-top: 30px;
  text-align: center;
  border-radius: 30px;
}

textarea {
  width: 800px;
  height: 400px;
}
</style>
