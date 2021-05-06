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
                <el-col :span="24" :md="13">
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
                <el-col :span="24" :md="5">
                    <el-form-item label="Valor" prop="value">
                        <money v-model="form.value" />
                    </el-form-item>
                </el-col>
                <el-col :span="24" :md="3">
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
                <el-col :span="24" :md="3">
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
                <el-col :span="24" :md="16">
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
                <el-col :span="24" :md="8">
                    <el-form-item label="Imagem" prop="image">
                        <file-picker
                            v-model="form.image"
                            :accept="['image/*']"
                        />
                    </el-form-item>
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

export default {
    name: 'ProductForm',
    components: { Money, FilePicker },
    data() {
        return {
            loading: false,
            form: {
                image: '',
                title: 'Título qualquer',
                value: '',
                discount: 0,
                margin: 30,
                description: 'Descrição qualquer',
            },
            rules: makeRule({
                image: ['required'],
                title: ['required'],
                value: ['required'],
                discount: ['minValue:0', 'maxValue:100'],
                margin: ['minValue:0', 'maxValue:100'],
            }),
        };
    },
    methods: {
        submitForm() {
            this.$refs.Form.validate(async (valid) => {
                if (valid && !this.loading) {
                    NProgress.start();
                    this.loading = true;

                    console.log('submeti o formulário', this.form);

                    NProgress.done();
                    this.loading = false;
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
    },
    mounted() {
        console.log(this.rules);
    },
};
</script>

<style>
</style>
