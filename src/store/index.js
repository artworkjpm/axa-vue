// import dependency to handle HTTP request to our back end
import axios from "axios";
import Vuex from "vuex";
import Vue from "vue";

//load Vuex
Vue.use(Vuex);

const toLower = (text) => {
	return text.toString().toLowerCase();
};

//export store module
export const store = new Vuex.Store({
	state: {
		loading: true,
		posts: [],
		term: "",
	},

	getters: {
		loading(state) {
			return state.loading;
		},
		searchByName(state) {
			if (state.term) {
				return state.posts.filter((item) => toLower(item.name).includes(toLower(state.term)));
			}
			return state.posts;
		},
	},

	actions: {
		getPosts({ commit }) {
			axios
				.get("https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json")
				.then((response) => {
					commit("SET_POSTS", response.data.Brastlewark);
				})
				.catch((err) => console.log(err));
		},
		saveText({ commit }, text) {
			commit("SAVE_TEXT", text);
		},
	},

	mutations: {
		SET_POSTS(state, payload) {
			state.posts = payload;
			state.loading = false;
			console.log(state.posts);
		},

		SAVE_TEXT(state, payload) {
			state.term = payload;
		},
	},
});
