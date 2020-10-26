<template>
<div>
  <Form :article="article" :isUpdate="true" />
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
