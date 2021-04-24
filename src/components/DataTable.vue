<template>
	<div>
		<div v-if="loading" class="loader">
			<md-progress-spinner md-mode="indeterminate"></md-progress-spinner>
		</div>

		<md-table v-if="!loading" :value.sync="searchByName" md-sort="name" md-sort-order="asc" md-card md-fixed-header>
			<md-table-toolbar>
				<md-field md-clearable class="md-toolbar-section-end">
					<md-input placeholder="Search by name..." v-model="search" @input="saveText()" />
				</md-field>
			</md-table-toolbar>

			<md-table-empty-state md-label="No character found" :md-description="`No character was found for this '${search}' query. Try a different character name`"> </md-table-empty-state>
			<md-table-row slot="md-table-row" slot-scope="{ item }">
				<md-table-cell md-label="ID" md-sort-by="id" md-numeric>{{ item.id }}</md-table-cell>

				<md-table-cell md-label="Avatar">
					<md-avatar class="md-large"> <img :src="item.thumbnail" alt="People" /> </md-avatar
				></md-table-cell>

				<md-table-cell md-label="Name" md-sort-by="name"
					><b>{{ item.name }}</b></md-table-cell
				>

				<md-table-cell md-label="Age" md-sort-by="age" class="nowrap">{{ item.age }} years</md-table-cell>

				<md-table-cell md-label="Height" md-sort-by="height" class="nowrap">{{ item.height.toFixed(2) }} cm</md-table-cell>

				<md-table-cell md-label="Weight" md-sort-by="weight" class="nowrap">{{ item.weight.toFixed(2) }} kg</md-table-cell>

				<md-table-cell md-label="Hair Color" md-sort-by="hair_color"
					><md-chip :style="{ backgroundColor: item.hair_color }"
						><b>{{ item.hair_color }}</b></md-chip
					></md-table-cell
				>

				<md-table-cell md-label="Professions" md-numeric>
					<div v-for="el in item.professions" v-bind:key="el">
						<div>{{ el }}</div>
					</div>
				</md-table-cell>
				<md-table-cell md-label="Friends" md-numeric>
					<div v-for="el in item.friends" v-bind:key="el">
						<md-button class="md-dense md-raised md-primary" @click="showFriend(el)">{{ el }}</md-button>
					</div>
				</md-table-cell>
			</md-table-row>
		</md-table>
	</div>
</template>

<script>
export default {
	name: "DataTable",
	mounted() {
		this.$store.dispatch("getPosts");
	},
	data: () => ({
		search: null,
	}),

	computed: {
		loading() {
			return this.$store.getters.loading;
		},
		searchByName() {
			return this.$store.getters.searchByName;
		},
	},
	methods: {
		saveText() {
			this.$store.dispatch("saveText", this.search);
			this.$store.getters.searchByName;
		},
		showFriend(friendName) {
			this.search = friendName;
			this.$store.dispatch("saveText", this.search);
		},
	},
};
</script>
<style lang="scss">
.loader {
	position: fixed;
	top: 50%;
	left: 50%;
}
.md-table-content {
	max-height: 100vh !important;
}
.nowrap {
	white-space: nowrap;
}
</style>
