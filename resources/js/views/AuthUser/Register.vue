<template>
    <div class="auth-content">
        <div class="card card-body">
            <i class="fa fa-user auth-icon"></i>
            <h1>Cadastro</h1>

            <el-form
                ref="loginForm"
                :model="form"
                :rules="rules"
                class="login-form"
                auto-complete="off"
                label-position="top"
                @submit.native.prevent="submitForm"
            >
                <el-row :gutter="20">
                    <el-col :span="24">
                        <el-form-item label="Nome" prop="name">
                            <el-input
                                placeholder="Nome completo"
                                type="text"
                                v-model="form.name"
                                autocomplete="off"
                            ></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="24">
                        <el-form-item label="E-mail" prop="email">
                            <el-input
                                placeholder="E-mail"
                                type="text"
                                v-model="form.email"
                                autocomplete="off"
                            ></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="24">
                        <el-form-item label="Senha" prop="password">
                            <el-input
                                placeholder="Senha"
                                type="password"
                                v-model="form.password"
                                autocomplete="off"
                            ></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="24">
                        <el-form-item
                            label="Confirmar"
                            prop="password_confirmation"
                        >
                            <el-input
                                placeholder="Senha"
                                type="password"
                                v-model="form.password_confirmation"
                                autocomplete="off"
                            ></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>

                <el-form-item>
                    <button class="btn btn-primary btn-round btn-block">
                        <i
                            class="fa"
                            :class="loading ? 'fa-spin fa-spinner' : 'fa-lock'"
                        ></i>
                        Cadastrar
                    </button>
                </el-form-item>
            </el-form>

            <div class="auth-button-group">
                <a href="#" @click.prevent="redirect('UserForgotPassword')"
                    >Esqueceu a senha ?</a
                >
                <a href="#" @click.prevent="redirect('UserLogin')"
                    >Fazer login</a
                >
            </div>
        </div>
    </div>
</template>

<script>
import Nprogress from 'nprogress';
import http from '@/http';
import { logInUser } from '@/services/authentication';

export default {
    data() {
        return {
            loading: false,
            form: {
                name: 'Edigard Alan Poul',
                email: 'user@example.com',
                password: 'password',
                password_confirmation: 'password',
            },
            rules: {
                name: [
                    {
                        required: true,
                        trigger: 'blur',
                        validator: (rule, value, callback) => {
                            if (value === '') {
                                return callback(
                                    new Error('Digite o seu nome.')
                                );
                            }
                            return callback();
                        },
                    },
                ],
                email: [
                    {
                        required: true,
                        trigger: 'blur',
                        validator: (rule, value, callback) => {
                            if (value === '') {
                                return callback(new Error('Digite um email.'));
                            }
                            if (this.validate('email', value)) {
                                return callback(
                                    new Error('Digite um e-mail válido.')
                                );
                            }
                            return callback();
                        },
                    },
                ],
                password: [
                    {
                        required: true,
                        trigger: 'blur',
                        validator: (rule, value, callback) => {
                            if (this.validate('empty', value)) {
                                return callback(new Error('Digite uma senha.'));
                            }
                            if (this.validate('password', value)) {
                                return callback(
                                    new Error(
                                        'O campo senha deve conter pelo menos 6 caracteres.'
                                    )
                                );
                            }
                            return callback();
                        },
                    },
                ],
                password_confirmation: [
                    {
                        required: true,
                        trigger: 'blur',
                        validator: (rule, value, callback) => {
                            if (this.validate('empty', value)) {
                                return callback(new Error('Confirme a senha.'));
                            }
                            if (this.validate('password', value)) {
                                return callback(
                                    new Error(
                                        'O campo confirmar deve conter pelo menos 6 caracteres.'
                                    )
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
                    Nprogress.start();
                    this.loading = true;
                    const { userLogin } = http.authentication;

                    try {
                        const req = await userLogin(this.form);
                        const user = req.object;
                        logInUser(user);
                        this.redirect('UserDashboard');
                    } catch (error) {
                        console.log(error);
                    }
                    Nprogress.done();
                    this.loading = false;
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
    },
};
</script>

<style lang="scss" scoped>
</style>

