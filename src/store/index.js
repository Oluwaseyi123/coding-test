import { createStore } from "vuex";
import axios from 'axios'

export default createStore({
  state: {
    data: []
  },
  mutations: {
    setData(state, data){
      state.data = data
    }
  },
  actions: {
     getData({commit}){
       axios.get('https://www.ipushpull.com/api/1.0/domain_page_access/')
      .then((res) => {
        console.log(res.data)
        commit('setData', res.data)
      } )
     
    }
  },
  getters: {
    getData(state){
      return state.data
    }
  },
  modules: {},
});
