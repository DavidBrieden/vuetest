// app.vue
<style>
.app-container {
  width: 50%;
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
  <WichtelNameItem v-for="name in names" :name="name"></WichtelNameItem>
</div>
</template>

<script>
import WichtelNameItem from './WichtelNameItem.vue'

export default {
  data() {
    return {
      msg: 'Hello world!',
      names: ['David', 'Frederik', 'Peter', 'Donatello']
    }
  },
  components: {
    WichtelNameItem
  }
}
</script>
