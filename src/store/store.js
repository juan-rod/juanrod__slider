import Vue from 'vue';
import Vuex from 'vuex';


Vue.use(Vuex);

const state = {
	slideTransition: 'router-slide-r',
	nextPage: 'about',
	prevPage: ''
 }

const getters = {
  slideTransition: state => state.slideTransition,
  nextPage: state => state.nextPage,
  prevPage: state => state.prevPage
}

const actions ={
	getSlideTransition({ commit }, transition) {
		console.log("transition in actions:", transition)
		commit('SET_SLIDETRANSITION', transition)
	},
	getNextPage({ commit }, next) {
		console.log("nextpage in actions:", next)
		commit('SET_NEXTPAGE', next)
	},
	getPrevPage({ commit }, prev) {
		console.log("prevpage in actions:", prev)
		commit('SET_PREVPAGE', prev)
	}
}

const mutations = {
  SET_SLIDETRANSITION(state,transition) {
    state.slideTranstion = transition
	},
  SET_NEXTPAGE(state,next) {
    state.nextPage = next
	},
	SET_PREVPAGE(state,prev) {
    state.prevPage = prev
	}
}

export default new Vuex.Store({
	state,
	getters,
	actions,
	mutations
})
