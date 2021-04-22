<template>
	<div class="md-layout-column">
		<md-toolbar class="md-primary">
			<md-button class="md-icon-button" @click="showNavigation = true">
				<md-icon>menu</md-icon>
			</md-button>
			<span class="md-title">Brastlewark Population</span>
		</md-toolbar>

		<md-drawer :md-active.sync="showNavigation" md-swipeable>
			<md-toolbar class="md-transparent" md-elevation="0">
				<span class="md-title">Brastlewark Population</span>
			</md-toolbar>

			<md-list>
				<md-list-item>
					<md-icon>send</md-icon>
					<span class="md-list-item-text">About this app</span>
				</md-list-item>
				<md-list-item>
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
};
</script>

<style lang="scss" scoped></style>
