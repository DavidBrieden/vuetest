// app.vue
<style>
.app-container {
  width: 90%;
  margin: 0 auto;
  padding: 0;
  border: 0;
  font-family: "Dosis", "Source Sans Pro", "Helvetica Neue", Arial, sans-serif;
  font-size: 1.5em;
  font-weight: 500;
}
</style>

<template>
<div class="app-container">
  <WichtelNameItem name="Dave"></WichtelNameItem>
  <WichtelNameItem name="Freddy"></WichtelNameItem>
</div>
</template>

<script>
const WichtelNameItem = require('./WichtelNameItem.vue');
export default {
  data() {
    return {
      msg: 'Hello world!'
    }
  },
  components: {
    WichtelNameItem
  }
}
</script>
