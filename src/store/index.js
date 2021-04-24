// import dependency to handle HTTP request to our back end
import axios from "axios";
import Vuex from "vuex";
import Vue from "vue";

//load Vuex
Vue.use(Vuex);

//export store module
export const store = new Vuex.Store({
	state: {
		loading: true,
		posts: [],
		postsPerTen: [],
		term: "",
	},

	getters: {
		loading(state) {
			return state.loading;
		},
		searchByName(state) {
			if (state.term) {
				let sposts = state.posts.filter((item) => item.name.toLowerCase().includes(state.term.toLowerCase()));
				return sposts.slice(0, 10);
			} else {
				return state.postsPerTen;
			}
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

			axios
				.get("https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json")

				.then((response) => {
					commit("SET_POSTS_PER_TEN", response.data.Brastlewark.slice(0, 5));
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
		},

		SET_POSTS_PER_TEN(state, payload) {
			state.postsPerTen = payload;
			state.loading = false;
		},

		SAVE_TEXT(state, payload) {
			state.term = payload;
		},
	},
});
