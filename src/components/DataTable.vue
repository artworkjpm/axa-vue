<template>
	<div class="hello">
		<h1>{{ msg }}</h1>
		<div v-for="post in posts" :key="post.id">
			<p>{{ post.name }}</p>
		</div>
	</div>
</template>

<script>
export default {
	name: "DataTable",
	data() {
		return {
			msg: "Welcome to my Vuex Store",
		};
	},
	computed: {
		posts() {
			return this.$store.state.posts;
		},
	},
	mounted() {
		this.$store.dispatch("getPosts");
	},
};
</script>
<style lang="scss"></style>
