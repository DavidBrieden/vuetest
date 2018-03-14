// main.js
import Vue from 'vue'
import App from './app.vue'

new Vue({
  el: '#app',
  render: function(createElement) {
    return createElement(App);
  }
});
