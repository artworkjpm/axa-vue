<template>
	<div class="hello">
		<h1>{{ msg }}</h1>
		<md-table v-model="posts" md-sort="name" md-sort-order="asc" md-card md-fixed-header>
			<md-table-toolbar>
				<h1 class="md-title">Users</h1>
			</md-table-toolbar>

			<md-table-row slot="md-table-row" slot-scope="{ item }">
				<md-table-cell md-label="ID" md-sort-by="id" md-numeric>{{ item.id }}</md-table-cell>
				<md-table-cell md-label="Name" md-sort-by="name">{{ item.name }}</md-table-cell>
			</md-table-row>
		</md-table>
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
	mounted() {
		this.$store.dispatch("getPosts");
	},
	computed: {
		posts() {
			return this.$store.state.posts;
		},
	},
};
</script>
<style lang="scss"></style>
