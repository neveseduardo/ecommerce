<template>
    <div class="card card-body">
        <div class="card-title">
            <h3 class="float-left">Cadastrar produto</h3>
            <el-button
                @click.prevent="redirect('AdminDashboardProducts')"
                type="primary"
                class="float-right btn-round"
                ><i class="fa fa-arrow-left"></i> Produtos
            </el-button>
        </div>

        <el-form
            ref="Form"
            :model="form"
            :rules="rules"
            class="login-form"
            auto-complete="off"
            label-position="top"
            @submit.native.prevent="submitForm"
        >
            <el-row :gutter="20">
                <el-col :span="24" :md="12">
                    <el-form-item label="Título" prop="title">
                        <el-input
                            placeholder="Título"
                            type="text"
                            v-model="form.title"
                            maxlength="191"
                            autocomplete="off"
                        ></el-input>
                    </el-form-item>
                </el-col>

                <el-col :span="24" :md="6">
                    <el-form-item label="Valor" prop="value">
                        <el-input type="number" placeholder="R$" v-model="form.value" step="0.01"/>
                    </el-form-item>
                </el-col>

                <el-col :span="24" :md="6">
                    <el-form-item label="Quantidade" prop="quantity">
                        <el-input
                            placeholder="Quantidade"
                            type="number"
                            v-model="form.quantity"
                            :max="9999999"
                            autocomplete="off"
                        ></el-input>
                    </el-form-item>
                </el-col>

                <el-col :span="24" :md="6">
                    <el-form-item label="Desconto" prop="discount">
                        <el-input
                            placeholder="Desconto %"
                            type="number"
                            v-model="form.discount"
                            :max="100"
                            autocomplete="off"
                        ></el-input>
                    </el-form-item>
                </el-col>

                <el-col :span="24" :md="6">
                    <el-form-item label="Margem" prop="margin">
                        <el-input
                            placeholder="Margem %"
                            type="number"
                            v-model="form.margin"
                            :max="100"
                            autocomplete="off"
                        ></el-input>
                    </el-form-item>
                </el-col>

                <el-col :span="24" :md="6">
                    <el-form-item label="Categoria" prop="category_id">
                        <el-select
                            size="large"
                            v-model="form.category_id"
                            placeholder="Selecione uma categoria"
                            filterable
                            clearable
                        >
                            <el-option
                                v-for="(v, i) in select.categories"
                                :key="i"
                                :label="v.title"
                                :value="v.id"
                            >
                            </el-option>
                        </el-select>
                    </el-form-item>
                </el-col>

                <el-col :span="24" :md="6">
                    <el-form-item label="Código de barras" prop="cod_bar">
                        <el-input
                            placeholder="Código de barras"
                            type="number"
                            v-model="form.cod_bar"
                            maxlength="13"
                            autocomplete="off"
                            onkeyup="this.value=this.value.replace(/[^\d]/,'')"
                            oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
                        ></el-input>
                    </el-form-item>
                </el-col>

                <el-col :span="24" :md="18">
                    <el-form-item label="Descrição" prop="description">
                        <el-input
                            placeholder="Descrição"
                            type="textarea"
                            :rows="4"
                            v-model="form.description"
                            :maxlength="65000"
                            autocomplete="off"
                        ></el-input>
                    </el-form-item>
                </el-col>

                <el-col :span="24" :md="6">
                    <el-form-item label="Imagem" prop="image">
                        <file-picker
                            v-model="form.image"
                            :accept="['image/*']"
                            :disabled="loading"
                        />
                    </el-form-item>
                </el-col>
            </el-row>

            <el-row>
                <el-col :span="24">
                    <p>
                        <span class="text-danger">*</span> Campos obrigatórios
                    </p>
                </el-col>
            </el-row>

            <el-row>
                <button
                    :disabled="loading"
                    v-if="product === null"
                    class="btn btn-primary btn-round float-right"
                >
                    <i
                        class="mr-2 fa"
                        :class="loading ? 'fa-spin fa-spinner' : 'fa-save'"
                    ></i>
                    Salvar
                </button>
                <button
                    :disabled="loading"
                    v-else
                    class="btn btn-primary btn-round float-right"
                >
                    <i
                        class="mr-2 fa"
                        :class="loading ? 'fa-spin fa-spinner' : 'fa-undo'"
                    ></i>
                    Atualizar
                </button>
                <button
                    v-if="product === null"
                    @click.prevent="resetForm"
                    class="btn btn-default btn-round float-right mr-2"
                >
                    Limpar
                </button>
            </el-row>
        </el-form>
    </div>
</template>

<script>
import Money from '@/components/MoneyComponent';
import FilePicker from '@/components/FilePicker';
import { makeRule } from 'src/utils/validator';
import NProgress from 'nprogress';
import http from 'src/http';
import messages from 'src/utils/messages'
import { mapActions, mapGetters } from 'vuex';

export default {
    name: 'ProductForm',
    components: { Money, FilePicker },
    data() {
        return {
            loading: false,
            form: {
                image: '',
                title: '',
                value: '',
                quantity: '',
                discount: '',
                margin: '',
                category_id: '',
                cod_bar: '',
                description: '',
            },
            select: {
                categories: [],
            },
            rules: makeRule({
                title: ['required'],
                value: ['required'],
                quantity: ['required'],
                discount: ['minValue:0', 'maxValue:100'],
                margin: ['minValue:0', 'maxValue:100'],
                category_id: ['required'],
                image: ['maxFileSize:2MB'],
            }),
        };
    },
    computed: {
        ...mapGetters({ product: 'product/product' }),
    },
    methods: {
        ...mapActions({ setProduct: 'product/setProduct' }),
        treatData() {
            let fd = new FormData();
            Object.entries(this.form).map(([k, v], i) => {
                if (k !== 'image') fd.append(k, v);
            });
            if (this.form.image.length > 0) {
                fd.append('image', this.form.image[0]);
            }
            return fd;
        },
        submitForm() {
            this.$refs.Form.validate((valid) => {
                if (valid && !this.loading) {
                    return this.product === null
                        ? this.create()
                        : this.update();
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        async create() {
            NProgress.start();
            this.loading = true;

            const data = this.treatData();
            const { storeProducts } = http.products;

            try {
                await storeProducts(data);
                this.resetForm();
                this.$notify({
                    type: 'success',
                    title: 'Sucesso!',
                    message: messages.create,
                });
            } catch (error) {
                console.log(error);
            }

            NProgress.done();
            this.loading = false;
        },
        async update() {
            NProgress.start();
            this.loading = true;

            const data = this.treatData();
            const { updateProducts } = http.products;
            const { id } = this.product;

            try {
                const req = await updateProducts(id, data);
                
                this.$notify({
                    type: 'success',
                    title: 'Sucesso!',
                    message: messages.update,
                });
				this.redirect('AdminDashboardProducts');
            } catch (error) {
                console.log(error);
            }

            NProgress.done();
            this.loading = false;
        },
        resetForm() {
            Object.entries(this.form).map(([k, v], i) => (this.form[k] = ''));
        },
        upProduct() {
            const { product: p } = this;
            if (!this.isEmpty(p)) {
                let fields = [];
                Object.entries(this.form).map(([k, v], i) => fields.push(k));
                Object.entries(p).map(([k, v], i) => {
                    if (fields.includes(k)) {
                        this.form[k] = v;
                    }
                });
				console.log(this.form)
            }
        },
        formatOutput(money) {
            let [n, x] = String(money).split(',');
            n = n.replace(/[^0-9]/g, '');
            return [n, x].join('.');
        },
        async fetchData() {
            NProgress.start();
            this.loading = true;

            const { getData } = http.products;

            try {
                const req = await getData();
                const { categories } = req.object;
                this.select.categories = categories;
                this.upProduct();
            } catch (error) {
                console.log(error);
            }

            NProgress.done();
            this.loading = false;
        },
    },
    mounted() {
        this.fetchData();
    },
};
</script>

<style>
</style>
