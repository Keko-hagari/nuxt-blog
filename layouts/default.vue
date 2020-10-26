<template>
<div class="def-container">
  <Header />
  <Nuxt />

  <Footer />
</div>
</template>

<script>
import Modal from "../components/Modal";
export default {
  components: {
    Modal
  },
  data() {
    return {
      isOpen: false
    };
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  min-height: 100vh;
  position: relative;
  padding-bottom: 100px;
  background-color: #c2c2c2;
}

.def-container {
  min-height: 100%;
}
</style>
