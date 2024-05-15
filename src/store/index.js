import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate';

export default createStore({
  state: {
    data:{
      email:'',
      password: '',
      confirmPassword: ''
    }
  },
  getters: {
    getEmail(state) {
      return state.data.email;
    },
    getPassword(state) {
      return state.data.password;
    },
    getConfirmPassword(state) {
      return state.data.confirmPassword;
    }
  },

  mutations: {
    setEmail(state, email) {
      state.data.email = email;
    },
    setPassword(state, password) {
      state.data.password = password;
    },
    setConfirmPassword(state, confirmPassword) {
      state.data.confirmPassword = confirmPassword;
    }
  },
  actions: {
    updateEmail({ commit }, email) {
      commit('setEmail', email);
    },
    updatePassword({ commit }, password) {
      commit('setPassword', password);
    },
    updateConfirmPassword({ commit }, confirmPassword) {
      commit('setConfirmPassword', confirmPassword);
    }
  },
  modules: {
  },
  plugins: [createPersistedState()] 

})
