<template>
    <div>
        <auth-user-header />
        <auth-user-content />
        <auth-user-footer />
    </div>
</template>
<script>
import AuthUserHeader from './components/Header.vue';
import AuthUserContent from './components/Content.vue';
import AuthUserFooter from './components/Footer.vue';

export default {
    components: {
        AuthUserHeader,
        AuthUserContent,
        AuthUserFooter,
    },
};
</script>
