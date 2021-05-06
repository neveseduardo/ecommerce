<template>
    <navbar v-model="showNavbar">
        <div class="navbar-wrapper">
            <div class="navbar-minimize">
                <button
                    id="minimizeSidebar"
                    class="btn btn-icon btn-round"
                    @click="minimizeSidebar"
                >
                    <i
                        class="fa fa-arrow-right text-center visible-on-sidebar-mini"
                    ></i>
                    <i
                        class="fa fa-arrow-left text-center visible-on-sidebar-regular"
                    ></i>
                </button>
            </div>

            <div class="navbar-toggle">
                <navbar-toggle-button @click.native="toggleSidebar">
                </navbar-toggle-button>
            </div>
            <a
                href="#"
                @click.prevent="redirect('UserDashboard')"
                class="navbar-brand"
                >{{ app_name }}</a
            >
        </div>

        <template slot="navbar-menu">
            <form>
                <div class="input-group no-border">
                    <el-autocomplete
                        class="inline-input"
                        v-model="state1"
                        :fetch-suggestions="querySearch"
                        placeholder="Pesquisar menu..."
                        @select="handleSelect"
                    >
                        <i
                            slot="suffix"
                            class="el-input__icon el-icon-search"
                        ></i>
                    </el-autocomplete>
                </div>
            </form>

            <ul class="navbar-nav">
                <el-dropdown class="nav-item" trigger="click">
                    <div class="avatar-wrapper nav-link">
                        <i class="fa fa-bell"></i>
                        <i class="el-icon-caret-bottom" />

                        <span class="d-lg-none d-md-block">ALERTAS</span>
                    </div>
                    <el-dropdown-menu slot="dropdown">
                        <router-link to="/profile/index">
                            <el-dropdown-item>Notificações</el-dropdown-item>
                        </router-link>
                        <router-link to="/">
                            <el-dropdown-item>Mensagens</el-dropdown-item>
                        </router-link>
                    </el-dropdown-menu>
                </el-dropdown>

                <li class="nav-item">
                    <a
                        @click.prevent="redirect('UserSettings')"
                        class="nav-link btn-rotate"
                        href="#"
                    >
                        <i class="nc-icon nc-settings-gear-65"></i>
                        <p>
                            <span class="d-lg-none d-md-block"
                                >CONFIGURAÇÕES</span
                            >
                        </p>
                    </a>
                </li>

                <el-dropdown class="nav-item" trigger="click">
                    <div class="avatar-wrapper nav-link">
                        <i class="fa fa-user"></i>
                        <i class="el-icon-caret-bottom" />

                        <span class="d-lg-none d-md-block"
                            >CONFIGURAR PERFIL</span
                        >
                    </div>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>
                            <a
                                href="#"
                                @click.prevent="redirect('UserProfile')"
                                class="d-block"
                                >Meu prefil</a
                            >
                        </el-dropdown-item>
                        <el-dropdown-item>
                            <a class="d-block" @click.prevent="logout">Sair</a>
                        </el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </ul>
        </template>
    </navbar>
</template>
<script>
import Navbar from '@/components/Navbar';
import NavbarToggleButton from '@/components/NavbarToggleButton';
import links from '@/sidebarLinks';
import { outUser } from '@/services/authentication';

export default {
    components: {
        Navbar,
        NavbarToggleButton,
    },
    data() {
        return {
            app_name: process.env.MIX_APP_NAME,
            search: '',
            activeNotifications: false,
            showNavbar: false,
            notificacao: [],
            notificacaoNaoLida: null,
            id_notificacao_beneficiario_array: [],
            usuario: JSON.parse(localStorage.getItem('usuario')),
            links: [],
            state1: '',
        };
    },
    methods: {
        capitalizeFirstLetter(string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
        },
        toggleNotificationDropDown() {
            this.activeNotifications = !this.activeNotifications;
        },
        closeDropDown() {
            this.activeNotifications = false;
        },
        toggleSidebar() {
            this.$sidebar.displaySidebar(!this.$sidebar.showSidebar);
        },
        hideSidebar() {
            this.$sidebar.displaySidebar(false);
        },
        minimizeSidebar() {
            this.$sidebar.toggleMinimize();
        },
        toggleNavbar() {
            this.showNavbar = !this.showNavbar;
        },
        querySearch(queryString, cb) {
            var links = this.links;
            var results = queryString
                ? links.filter(this.createFilter(queryString))
                : links;
            cb(results);
        },
        createFilter(queryString) {
            return (link) => {
                return link.value
                    .toLowerCase()
                    .includes(queryString.toLowerCase());
            };
        },
        loadAll() {
            let userArr = [];

            this.$sidebar.sidebarLinks.map((item) => {
                if (item?.children) {
                    item.children.map((children) => {
                        userArr.push({
                            value:
                                this.capitalize(item.name) +
                                '/' +
                                this.capitalize(children.name),
                            link: children.path,
                        });
                    });
                } else {
                    userArr.push({
                        value: this.capitalize(item.name),
                        link: item.path,
                    });
                }
            });
            return userArr;
        },
        handleSelect(item) {
            this.state1 = '';
            this.redirect(item.link);
        },
        logout() {
            outUser();
            this.redirect('UserLogin');
        },
    },
    mounted() {
        this.links = this.loadAll();
    },

    watch: {},
};
</script>

<style lang="scss">
.navbar {
    form {
        .input-group {
            .el-autocomplete {
                width: 100%;
            }
        }
    }

    .navbar-nav .nav-link {
        font-size: 1rem !important;
    }
}
</style>

