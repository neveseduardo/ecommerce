<template>
    <div class="wrapper">
        <admin-side-bar type="sidebar" backgroundColor="white" :sidebar-links="$adminSidebar.adminSidebarLinks">
            <div></div>
        </admin-side-bar>

        <div class="main-panel">
            <top-navbar></top-navbar>

            <dashboard-content @click.native="toggleSidebar">
            </dashboard-content>

            <content-footer></content-footer>
        </div>
    </div>
</template>
<style lang="scss"></style>
<script>
import TopNavbar from './components/TopNavbar.vue';
import ContentFooter from './components/ContentFooter.vue';
import DashboardContent from './components/Content.vue';

export default {
    components: {
        TopNavbar,
        ContentFooter,
        DashboardContent,
    },
    methods: {
        toggleSidebar() {
            if (this.$sidebar.showSidebar) {
                this.$sidebar.displaySidebar(false);
            }
        },
    },
	mounted(){
		console.log(this.$adminSidebar)
	}
};
</script>
