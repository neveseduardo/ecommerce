<template>
    <div>
        <home-header />
        <home-content />
        <home-footer />
    </div>
</template>
<script>
import HomeHeader from './components/Header.vue';
import HomeContent from './components/Content.vue';
import HomeFooter from './components/Footer.vue';

export default {
    components: {
        HomeHeader,
        HomeContent,
        HomeFooter,
    },
};
</script>
