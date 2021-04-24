<template>
	<div class="home">
		<DataTable />
		<router-view />
	</div>
</template>

<script>
// @ is an alias to /src
import DataTable from "@/components/DataTable.vue";

export default {
	name: "Home",
	components: {
		DataTable,
	},
};
</script>
