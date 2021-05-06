<template>
    <footer class="home-footer">
        <div class="container">
            <p>
                {{ app_name }} © {{ new Date().getFullYear() }} - Direitos
                autorais reservados.
            </p>
        </div>
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