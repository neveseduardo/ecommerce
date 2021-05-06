<template>
    <div class="row-flex justify-content-end navigation-path">
        <a href="/#/admin">Home</a>
		<i class="fa fa-chevron-right"></i>
        <a>{{ routeFatherName}}</a>
		<i class="fa fa-chevron-right"></i>
        <a>{{ routeName }}</a>
    </div>
</template>

<script>
export default {
    data() {
        return {}
    },
    props: {
        routeName: String,
        routeFatherName: String,
	},
}
</script>