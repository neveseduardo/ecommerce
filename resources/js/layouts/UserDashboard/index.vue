<template>
    <div class="wrapper">
        <side-bar type="sidebar" :sidebar-links="$sidebar.sidebarLinks">
            <div></div>
        </side-bar>

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
};
</script>
