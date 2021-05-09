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
                        <money v-model="form.value" />
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
                <button class="btn btn-primary btn-round float-right">
                    <i
                        class="mr-2 fa"
                        :class="loading ? 'fa-spin fa-spinner' : 'fa-save'"
                    ></i>
                    Salvar
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

export default {
    name: 'ProductForm',
    components: { Money, FilePicker },
    data() {
        return {
            loading: false,
            form: {
                image: '',
                title: '',
                value: 0,
                quantity: 0,
                discount: 0,
                margin: 0,
                category_id: 1,
                cod_bar: '',
                description: '',
            },
            select: {
                categories: [],
            },
            rules: makeRule({
                title: ['required'],
                value: ['required'],
                discount: ['minValue:0', 'maxValue:100'],
                margin: ['minValue:0', 'maxValue:100'],
                category_id: ['required'],
                image: ['required', 'maxFileSize:2MB'],
            }),
        };
    },
    methods: {
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
            this.$refs.Form.validate(async (valid) => {
                if (valid && !this.loading) {
                    NProgress.start();
                    this.loading = true;

                    const data = this.treatData();
                    const { storeProducts } = http.products;

                    try {
                        await storeProducts(data);
                        this.resetForm();
                        this.$notify({
                            type: 'success',
                            title: 'Sucesso',
                            message: 'Registrado com sucesso',
                        });
                    } catch (error) {
                        console.log(error);
                    }

                    NProgress.done();
                    this.loading = false;
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        resetForm() {
            let n = ['value', 'quantity', 'discount', 'margin'];
            Object.entries(this.form).map(([k, v], i) => {
                this.form[k] = n.includes(this.form[k]) ? 0 : '';
            });
            this.form.category_id = 1;
        },
        async fetchData() {
            NProgress.start();
            this.loading = true;

            const { getData } = http.products;

            try {
                const req = await getData();

                const { categories } = req.object;

                this.select.categories = categories;
            } catch (error) {
                console.log(error);
            }

            NProgress.done();
            this.loading = false;
        },
    },
    mounted() {
        this.fetchData();
        // console.log(this.rules);
    },
};
</script>

<style>
</style>
