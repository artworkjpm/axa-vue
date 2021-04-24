import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
	{
		path: "/",
		name: "Home",
		component: Home,
	},
	{
		path: "/about-app",
		name: "AboutApp",
		// lazy-loaded
		component: () => import(/* webpackChunkName: "about" */ "../views/AboutApp.vue"),
	},
	{
		path: "/about-me",
		name: "AboutMe",
		// lazy-loaded
		component: () => import(/* webpackChunkName: "about" */ "../views/AboutMe.vue"),
	},
];

const router = new VueRouter({
	mode: "history",
	routes,
});

export default router;
