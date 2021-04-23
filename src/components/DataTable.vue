<template>
	<div>
		<md-table :value="posts" md-sort="name" md-sort-order="asc" md-card md-fixed-header>
			<md-table-toolbar>
				<md-field md-clearable class="md-toolbar-section-end">
					<md-input placeholder="Search by name..." v-model="search" @input="searchOnTable" />
				</md-field>
			</md-table-toolbar>

			<md-table-empty-state md-label="No users found" :md-description="`No user found for this '${search}' query. Try a different search term or create a new user.`">
				<md-button class="md-primary md-raised" @click="newUser">Create New Character</md-button>
			</md-table-empty-state>

			<md-table-row slot="md-table-row" slot-scope="{ item }">
				<md-table-cell md-label="ID" md-sort-by="id" md-numeric>{{ item.id }}</md-table-cell>
				<md-table-cell md-label="Name" md-sort-by="name">{{ item.name }}</md-table-cell>
			</md-table-row>
		</md-table>
	</div>
</template>

<script>
const toLower = (text) => {
	return text.toString().toLowerCase();
};

const searchByName = (items, term) => {
	if (term) {
		return items.filter((item) => toLower(item.name).includes(toLower(term)));
	}

	return items;
};

export default {
	name: "DataTable",
	data: () => ({
		search: null,
	}),
	mounted() {
		this.$store.dispatch("getPosts");
	},
	computed: {
		posts() {
			return this.$store.state.posts;
		},

		searched: {
			get: () => this.$store.state.posts,
			set: (value) => value,
		},
	},
	methods: {
		newUser() {
			window.alert("Noop");
		},
		searchOnTable() {
			this.searched = searchByName(this.posts, this.search);
		},
	},
	created() {
		console.log("POSTS", this.posts);
	},
};
</script>
<style lang="scss"></style>
