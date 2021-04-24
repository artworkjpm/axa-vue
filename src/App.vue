<template>
	<div id="app">
		<TopNavBar />
		<router-view />
	</div>
</template>

<script>
import TopNavBar from "./components/TopNavBar";
export default {
	components: {
		TopNavBar,
	},
};
</script>
