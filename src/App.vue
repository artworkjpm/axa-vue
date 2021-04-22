<template>
	<div id="app">
		<TopNavBar />
		<DataTable />DataTable
	</div>
</template>

<script lang="ts">
import TopNavBar from "./components/TopNavBar.vue";
import DataTable from "./components/DataTable.vue";

export default {
	name: "App",
	components: {
		TopNavBar,
		DataTable,
	},
};
</script>

<style></style>
