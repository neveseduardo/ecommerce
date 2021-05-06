<template>
    <div>
        <auth-admin-header />
        <auth-admin-content />
        <auth-admin-footer />
    </div>
</template>
<script>
import AuthAdminHeader from './components/Header.vue';
import AuthAdminContent from './components/Content.vue';
import AuthAdminFooter from './components/Footer.vue';

export default {
    components: {
        AuthAdminHeader,
        AuthAdminContent,
        AuthAdminFooter,
    },
};
</script>
