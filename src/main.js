import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueTextareaAutosize from 'vue-textarea-autosize';
import firebase from "firebase/app";
import 'firebase/firestore';

Vue.use(VueTextareaAutosize);

Vue.config.productionTip = false

firebase.initializeApp({
  apiKey: "AIzaSyBTrXP1zdrfkI_Mn1ZkL4GRIEUPF6RGTYM",
  authDomain: "vue-calendar-3b22b.firebaseapp.com",
  databaseURL: "https://vue-calendar-3b22b.firebaseio.com",
  projectId: "vue-calendar-3b22b",
  storageBucket: "vue-calendar-3b22b.appspot.com",
  messagingSenderId: "870297532443",
  appId: "1:870297532443:web:ee45dc8b5e2d6ed21fa0be"
});

export const db = firebase.firestore();

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
