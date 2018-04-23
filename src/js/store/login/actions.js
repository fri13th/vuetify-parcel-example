import * as type from './types';
import axios from 'axios/index';
import router from '../../router';

const actions = {
  waiting({ commit }) {
    commit(type.WAITING);
  },
  loggedIn({ commit }) {
    commit(type.LOGIN);
  },
  loggedOut({ commit }) {
    commit(type.LOGOUT);
  },
  checkLogin({ commit }) {
    commit(type.LOGIN);
    // axios.get('/json/loginState.json').then(function(response) {
    //   if (response.data.login) {
    //     commit(type.LOGIN);
    //   } else {
    //     commit(type.LOGOUT);
    //     router.push('/login');
    //   }
    // });
  }
};

export default actions;
