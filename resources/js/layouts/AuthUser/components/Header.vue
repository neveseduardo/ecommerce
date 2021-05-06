<template>
    <header class="auth-header">
        <nav class="auth-navbar">
            <div class="container">
                <ul>
                    <li>
                        <a href="#" @click.prevent="redirect('Home')"
                            >Página inicial</a
                        >
                    </li>
                    <li>
                        <a
                            href="#"
                            @click.prevent="redirect('AdminDashboard')"
                            >Área do gerente</a
                        >
                    </li>
                </ul>
            </div>
        </nav>
    </header>
</template>

<script>
export default {
    data() {
        return {};
    },
    components: {},
    computed: {},
    methods: {},
    mounted() {},
};
</script>
