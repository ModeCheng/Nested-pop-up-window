import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		count: '',
		lists: []
	},
	mutations: {
		listOption: (state, lists) => state.lists = lists,
		add: (state, n) => state.count = state.count - n
	},
	actions: {
		listOption(context, lists) {
			context.commit('listOption', lists)
		},
		add(context, n) {
			context.commit('add', n)
		}
	}
})
