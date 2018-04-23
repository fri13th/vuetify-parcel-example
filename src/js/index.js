import Vue from "vue";
import Vuetify from "vuetify";
import 'vuetify/dist/vuetify.min.css';
import store from "./store";
import router from "./router";
import app from "./App";

Vue.use(Vuetify);

new Vue({
    el: '#app',
    store,
    router,
    render: h => h(app)
});
