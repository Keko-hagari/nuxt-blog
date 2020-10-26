<template>
<div>
  <Form :article="{}" :isUpdate="false" />
</div>
</template>

<script>
export default {
  middleware: "maintainState"
};
</script>
