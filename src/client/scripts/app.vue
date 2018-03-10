// app.vue
<style>
  .red {
    color: #f00;
  }
</style>

<template>
  <WichtelNameItem></WichtelNameItem>
</template>

<script>
  const WichtelNameItem = require('./WichtelNameItem.vue');
  export default {
    data () {
      return {
        msg: 'Hello world!'
      }
    },
    components: {
      WichtelNameItem
    }
  }
</script>
