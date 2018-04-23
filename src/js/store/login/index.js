import * as type from './types';
import actions from './actions';

const state = {
    waiting: true,
    login: false
};

const mutations = {
    [type.WAITING](state) {
        state.waiting = true;
    },
    [type.LOGIN](state) {
        state.waiting = false;
        state.login = true;
    },
    [type.LOGOUT](state) {
        state.waiting = false;
        state.login = false;
    }
};

export default {
    state,
    type,
    mutations,
    actions
};