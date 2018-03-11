// WichtelNameItem.vue
<style>
.center {
  margin: auto;
  width: 100%;
  background-color: #3ec393;
  color: #3e3e3e;
  padding: 10px;
  margin: 10px;
  border-radius: 25px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
</style>

<template>
<p class="center">{{name}}</p>
</template>

<script>
export default {
  // data () {
  //   return {
  //     name: 'David Brieden'
  //   };
  // },
  props: {
    name: String
  }
}
</script>
