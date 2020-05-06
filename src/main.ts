import Vue from 'vue'
import App from './App.vue'
import VueI18n from 'vue-i18n';
import en from '@/assets/dict/en.json';
import ru from '@/assets/dict/ru.json';

Vue.config.productionTip = false

Vue.use(VueI18n);

const i18n = new VueI18n({
  locale: 'en',
  messages: { en, ru }
});

new Vue({
  i18n,
  render: h => h(App),
}).$mount('#app')
