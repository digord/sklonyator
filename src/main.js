import Vue from 'vue'
import App from './App.vue'
import sklonyator from './plugins/sklonyator'

Vue.use(sklonyator);

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
