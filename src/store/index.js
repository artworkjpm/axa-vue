// import dependency to handle HTTP request to our back end
import axios from "axios";
import Vuex from "vuex";
import Vue from "vue";

//load Vuex
Vue.use(Vuex);

//to handle state
const state = {
	posts: [],
};

//to handle state
const getters = {};

//to handle actions
const actions = {
	getPosts({ commit }) {
		axios.get("https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json").then((response) => {
			commit("SET_POSTS", response.data.Brastlewark);
		});
	},
};

//to handle mutations
const mutations = {
	SET_POSTS(state, payload) {
		state.posts = payload;
		console.log(state.posts);
	},
};

//export store module
export default new Vuex.Store({
	state,
	getters,
	actions,
	mutations,
});
