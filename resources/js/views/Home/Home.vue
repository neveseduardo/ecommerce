<template>
    <div>
        <!-- <section class="home-carousel">
            <div class="container">
                <el-carousel height="450px" indicator-position="outside">
                    <el-carousel-item v-for="item in 4" :key="item">
                        <h3>{{ item }}</h3>
                    </el-carousel-item>
                </el-carousel>
            </div>
        </section>

        <section class="products-new">
            <div class="container">
                <div class="section-title">
                    <h1>NOSSOS PRODUTOS</h1>
                    <h5>
                        Tudo que você precisa para ficar atualizado com o mundo
                        geek.
                    </h5>
                </div>

                <div class="row">
                    <div
                        class="col-6 col-sm-4 col-md-3"
                        v-for="(item, index) in data"
                        :key="index"
                    >
                        <product-card
                            :image="item.image"
                            :title="item.title"
                            :value="item.value"
                            :discount="item.discount"
                        />
                    </div>
                </div>

                <div class="section-button">
                    <a class="see-more btn btn-round btn-primary">Ver mais</a>
                </div>
            </div>
        </section> -->

        <section class="paralax">
            <div class="container">
                <div>
                    <h2>Nova sessão de vendas 2021/02. Não perca!</h2>
                    <h1>Até 70% de desconto.</h1>
                    <a class="btn btn-round"
                        >Compre agora <i class="fa fa-arrow-right"></i
                    ></a>
                </div>
            </div>
        </section>

        <section>
            <div class="container">
                <div class="section-title">
                    <h1>PRODUTOS MAIS VENDIDOS</h1>
                    <h5>Veja o que está fazendo sucesso na nossa loja.</h5>
                </div>

                <el-row :gutter="20" class="products-container">
                    <el-col
                        :xs="12"
                        :sm="12"
                        :md="8"
                        :lg="6"
                        :xl="6"
                        v-for="(item, index) in bestselers"
                        :key="index"
                    >
                        <product-card
                            :image="item.image"
                            :title="item.title"
                            :value="item.value"
                            :discount="item.discount"
                        />
                    </el-col>
                </el-row>

                <div class="section-button">
                    <a class="see-more btn btn-round btn-primary">Ver mais</a>
                </div>
            </div>
        </section>

        <el-divider></el-divider>

        <section>
            <div class="container">
                <el-row :gutter="20" class="products-container">
                    <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="8">
                        <h5 class="mb-5 mt-5">Adionados recentemente</h5>

                        <horizontal-card
                            v-for="(item, index) in recents"
                            :key="index"
                            :title="item.title"
                            :image="item.image"
                            :value="item.value"
                        />
                    </el-col>
                    <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="8">
                        <h5 class="mb-5 mt-5">Mais propulares</h5>

                        <horizontal-card
                            v-for="(item, index) in bestselers.slice(0, 3)"
                            :key="index"
                            :title="item.title"
                            :image="item.image"
                            :value="item.value"
                        />
                    </el-col>
                    <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="8">
                        <h5 class="mb-5 mt-5">Em alta</h5>

                        <horizontal-card
                            v-for="(item, index) in inHigh"
                            :key="index"
                            :title="item.title"
                            :image="item.image"
                            :value="item.value"
                        />
                    </el-col>
                </el-row>
            </div>
        </section>
    </div>
</template>

<script>
import ProductCard from '@/components/ProductCard';
import HorizontalCard from '@/components/ProductHorizontalCard';
import CategoryCard from '@/components/CategoryCard';
import products from '@/database/products.js';
import categories from '@/database/categories.js';

export default {
    components: {
        ProductCard,
        CategoryCard,
        HorizontalCard,
    },
    data() {
        return {
            data: products,
            categories: categories,
            bestselers: products.slice(0, 4),
            inHigh: products.slice(0, 3),
            recents: products.slice(0, 3),
            form: {
                name: '',
                email: '',
                subject: '',
                message: '',
            },
            formRules: {
                name: [
                    {
                        required: true,
                        trigger: 'blur',
                        validator: (rule, value, callback) => {
                            const re = /^([a-zA-Z]{2,}\s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?)/;
                            if (value === '') {
                                callback(new Error('Digite um nome válido.'));
                            } else if (!re.test(value)) {
                                callback(
                                    new Error('Formato de nome inválido.')
                                );
                            } else {
                                callback();
                            }
                        },
                    },
                ],
                email: [
                    {
                        required: true,
                        trigger: 'blur',
                        validator: (rule, value, callback) => {
                            const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                            if (value === '') {
                                callback(new Error('Digite um email.'));
                            } else if (!re.test(value)) {
                                callback(new Error('Digite um e-mail válido.'));
                            } else {
                                callback();
                            }
                        },
                    },
                ],
                subject: [
                    {
                        required: true,
                        trigger: 'blur',
                        validator: (rule, value, callback) => {
                            const re = /^([a-zA-Z]{2,}\s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?)/;
                            if (value === '') {
                                return callback(
                                    new Error('Digite um assunto.')
                                );
                            }
                            return callback();
                        },
                    },
                ],
                message: [
                    {
                        required: true,
                        trigger: 'blur',
                        validator: (rule, value, callback) => {
                            const re = /^([a-zA-Z]{2,}\s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?)/;
                            if (value === '') {
                                return callback(
                                    new Error('Digite uma mensagem.')
                                );
                            }
                            return callback();
                        },
                    },
                ],
            },
        };
    },
    methods: {
        submitForm() {
            this.$refs.loginForm.validate(async (valid) => {
                if (valid) {
                    this.loading = true;

                    setTimeout(() => {
                        this.loading = false;
                    }, 5000);
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
    },
};
</script>