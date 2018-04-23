import Vue from "vue";
import Vuex from 'vuex';
import axios from 'axios';
import login from './login';
import router from '../router';

Vue.use(Vuex);

// we need auth, login here

const store = new Vuex.Store({
    modules: {
        login,
    }
});

export default store;