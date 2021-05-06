<template>
    <transition name="dropdown-content">
        <nav class="home-navbar" v-if="active">
            <ul>
                <li><a>Home</a></li>
                <li><a>Sobre</a></li>
                <li><a>Serviços</a></li>
                <li><a>Contato</a></li>
            </ul>
        </nav>
    </transition>
</template>

<script>
export default {
    name: 'Navbar',
    inject: ['sharedState'],
    computed: {
        active() {
            return this.sharedState.active;
        },
    },
};
</script>

<style>
</style>