import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import mandMobile from 'mand-mobile/lib/mand-mobile.esm'
import 'mand-mobile/lib/mand-mobile.css'
import "mand-mobile/components/_style/global.styl";
import "normalize.css";

Vue.config.productionTip = false

Vue.use(mandMobile)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
