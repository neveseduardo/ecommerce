<template>
    <header class="home-header">
        <div class="container">
            <button
                title="MENU"
                @click.prevent="toggle"
                class="btn btn-icon btn-round btn-primary"
            >
                <i class="fa" :class="active ? 'fa-times' : 'fa-bars'"></i>
            </button>

            <h1>
                <span class="screen-large">{{ app_name }}</span>
            </h1>

            <el-form ref="addressForm" :inline="true" :model="formData">
                <el-form-item prop="city">
                    <el-autocomplete
                        v-model="formData.cityInput"
                        :fetch-suggestions="getCities"
                        placeholder="Pesquisar..."
                        :trigger-on-focus="false"
                        :clearable="true"
                        @select="handleSelectCity"
                        @clear="clearCity"
                    >
                        <el-select
                            v-model="select"
                            slot="prepend"
                            placeholder="Categoria"
							clearable
                        >
                            <el-option
                                v-for="(categorie, index) in categories"
                                :key="index"
                                :label="categorie.title"
                                :value="index"
                            ></el-option>
                        </el-select>
                        <el-button
                            slot="append"
                            icon="el-icon-search"
                        ></el-button>
                    </el-autocomplete>
                </el-form-item>
            </el-form>

            <div>
                <a
                    title="Área do usuário"
                    @click.prevent="redirect('UserDashboard')"
                    class="btn btn-icon btn-primary btn-round"
                    ><i class="fa fa-user"></i
                ></a>
                <a
                    title="Área do usuário"
                    @click.prevent="redirect('UserDashboard')"
                    class="btn btn-icon btn-primary btn-round"
                    ><i class="fa fa-shopping-cart"></i
                ></a>
            </div>

            <transition name="dropdown-content">
                <nav v-if="active" v-on-clickaway="away">
                    <ul>
                        <li>
                            <a
                                @click.prevent="
                                    scrollToElement('.home-content');
                                    toggle();
                                "
                                href="#"
                                >Home</a
                            >
                        </li>
                        <li>
                            <a
                                @click.prevent="
                                    scrollToElement('.home-about');
                                    toggle();
                                "
                                href="#"
                                >Sobre</a
                            >
                        </li>
                        <li>
                            <a
                                @click.prevent="
                                    scrollToElement('.home-services');
                                    toggle();
                                "
                                href="#"
                                >Serviços</a
                            >
                        </li>
                        <li>
                            <a
                                @click.prevent="
                                    scrollToElement('.home-pricing');
                                    toggle();
                                "
                                href="#"
                                >Planos</a
                            >
                        </li>
                        <li>
                            <a
                                @click.prevent="
                                    scrollToElement('.home-contact');
                                    toggle();
                                "
                                href="#"
                                >Contato</a
                            >
                        </li>
                    </ul>
                </nav>
            </transition>
        </div>
    </header>
</template>

<script>
import { mixin as clickaway } from 'vue-clickaway';
import categories from '@/database/categories.js';
import axios from 'axios';

export default {
    name: 'Header',
    mixins: [clickaway],
    computed: {
        active() {
            return this.showNavbar;
        },
    },
    data() {
        return {
            categories: categories,
            app_name: process.env.MIX_APP_NAME,
            showNavbar: false,
            formData: {
                cityInput: '',
                city: '',
            },
            input3: '',
            select: [],
        };
    },
    methods: {
        toggle() {
            this.showNavbar = !this.showNavbar;
        },
        away() {
            this.showNavbar = false;
        },
        onSubmit() {
        },
        getCities(query, callback) {
            this.clearCity();
            setTimeout(() => {
                callback([]);
            }, 2000);
        },
        handleSelectCity(item) {
            this.formData.city = item.value;
        },
        clearCity() {
            this.formData.city = '';
        },
    },
    mounted() {
        $(window).scroll(function () {
            if ($(window).scrollTop() >= 100) {
                $('.home-header').addClass('fixed');
            } else {
                $('.home-header').removeClass('fixed');
            }
        });
    },
};
</script>
