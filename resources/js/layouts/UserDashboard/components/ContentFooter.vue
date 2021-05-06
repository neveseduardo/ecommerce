<template>
    <footer class="footer">
        <p>
            {{ app_name }} © {{ new Date().getFullYear() }} - Direitos autorais
            reservados.
        </p>
    </footer>
</template>
<script>
export default {
    name: 'Footer',
    data() {
        return {
            app_name: process.env.MIX_APP_NAME,
        };
    },
};
</script>
<style>
</style>
