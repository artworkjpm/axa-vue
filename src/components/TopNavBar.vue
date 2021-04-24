<template>
	<div class="md-layout-column">
		<md-toolbar class="md-primary">
			<md-button class="md-icon-button" @click="showNavigation = true">
				<md-icon>menu</md-icon>
			</md-button>
			<span class="md-title">Brastlewark population: {{ total }}</span>
		</md-toolbar>

		<md-drawer :md-active.sync="showNavigation" md-swipeable>
			<md-toolbar class="md-transparent" md-elevation="0">
				<span class="md-title">Brastlewark App</span>
			</md-toolbar>

			<md-list>
				<md-list-item to="/" @click="showNavigation = false" exact>
					<md-icon>send</md-icon>
					<span class="md-list-item-text">Data Table</span>
				</md-list-item>
				<md-list-item to="/about-app" @click="showNavigation = false" exact>
					<md-icon>send</md-icon>
					<span class="md-list-item-text">About this app</span>
				</md-list-item>
				<md-list-item to="/about-me" @click="showNavigation = false" exact>
					<md-icon>send</md-icon>
					<span class="md-list-item-text">About John Moran</span>
				</md-list-item>
			</md-list>
		</md-drawer>
	</div>
</template>

<script>
export default {
	name: "TopNavBar",
	data: () => ({
		showNavigation: false,
		showSidepanel: false,
	}),
	computed: {
		total() {
			return this.$store.state.posts.length;
		},
		searchByName() {
			return this.$store.getters.searchByName;
		},
	},
};
</script>

<style lang="scss" scoped></style>
