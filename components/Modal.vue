<template>
<div v-if="isOpen" class="layer">
  <button @click="cancel" class="cancel_btn">キャンセル</button>
  <button class="delete_btn">削除する</button>
</div>
</template>

<script>
export default {
  props: {
    isOpen: {
      require: true,
    },
  },
  methods: {
    cancel() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>

<style lang="css" scoped>
.layer {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(255, 255, 255, 0.5);
  display: flex;
  flex-direction: column;
}

.cancel_btn {
  font-size: 30px;
  border: solid 1px;
  text-align: center;
  display: inline-block;
  margin: 300px auto 10px auto;
  width: 300px;
}

.delete_btn {
  text-align: center;
  display: inline-block;
}
</style>
