
<template>
    <div class="card card-body">
        <div class="card-title">
            <h3 class="float-left">Produtos</h3>
            <el-button
                @click.prevent="redirect('AdminDashboardProductsForm')"
                type="primary"
                class="float-right btn-round"
                ><i class="fa fa-plus"></i> Novo
            </el-button>
        </div>

        <div class="row mb-3">
            <div class="col-12 col-sm-9">
                <div class="row mb-2">
                    <div class="col-6 col-md-3">
                        <el-select
                            class="select-primary"
                            v-model="pagination.perPage"
                            placeholder="Por página"
                        >
                            <el-option
                                class="select-primary"
                                v-for="item in pagination.perPageOptions"
                                :key="item"
                                :label="item"
                                :value="item"
                            ></el-option>
                        </el-select>
                    </div>

                    <div class="col-6 col-md-5 d-flex align-items-center">
                        <span class="text-default"
                            >Número de resultados por página</span
                        >
                    </div>
                </div>
            </div>
            <div class="col-12 col-sm-3">
                <el-input placeholder="Pesquisar" v-model="searchQuery">
                    <i slot="suffix" class="el-input__icon el-icon-search"></i>
                </el-input>
            </div>
        </div>

        <el-table class="table striped" :data="queriedData" border>
            <el-table-column label="#" type="index" width="70" />

            <el-table-column
                sortable
                v-for="column in tableColumns"
                :key="column.label"
                :min-width="column.minWidth"
                :prop="column.prop"
                :label="column.label"
            ></el-table-column>

            <!-- fixed="right" -->
            <el-table-column
                fixed="right"
                :min-width="150"
                class-name="td-actions"
                label="Ações"
            >
                <template slot-scope="props">
                    <el-button
                        size="small"
                        @click.prevent="openProduct(props.row)"
                        type="primary"
                        icon="el-icon-search"
                        circle
                    ></el-button>
                    <el-button
                        size="small"
                        @click.prevent="confirmDelete(props.row)"
                        type="danger"
                        icon="el-icon-delete"
                        circle
                    ></el-button>
                </template>
            </el-table-column>
        </el-table>

        <div class="row">
            <div class="col-12 col-md-3">
                <p class="category">
                    Mostrando {{ from + 1 }} até {{ to }} de {{ total }}
                </p>
            </div>
            <div class="col-md-9">
                <p-pagination
                    type="primary"
                    class="pull-right"
                    v-model="pagination.currentPage"
                    :per-page="pagination.perPage"
                    :total="pagination.total"
                ></p-pagination>
            </div>
        </div>
    </div>
</template>

<script>
import NavigationPath from 'src/components/NavigationPath';
import PPagination from 'src/components/Pagination.vue';
import { computed, data } from 'src/utils/tableProcess';
import NProgress from 'nprogress';
import http from '@/http';

export default {
    name: 'Product',
    components: {
        NavigationPath,
        PPagination,
    },
    data() {
        return {
            ...data,
            propsToSearch: ['title', 'created_at'],
            tableColumns: [
                { prop: 'title', label: 'Título', minWidth: 250 },
                { prop: 'value', label: 'R$ Valor', minWidth: 140 },
                { prop: 'discount', label: 'Desconto', minWidth: 140 },
                { prop: 'created', label: 'Criação', minWidth: 130 },
            ],
            tableData: [],
            loading: false,
        };
    },
    computed: { ...computed },
    methods: {
        confirmDelete(row) {
            console.log('clicou no confirm delete', row);
        },
        openProduct(row) {
            console.log('clicou no open product', row);
        },
        treatDataTable(data) {
            data.map((x) => {
                this.treatNullFor(x);
                let value = x.value.replace(/[^0-9\.]+/g, '').replace('.', ',');
                x.value = `R$ ${value}`;
                x.created = this.$moment(x.created_at).format('DD/MM/YYYY');
            });
        },
        async fetchData() {
            NProgress.start();
            this.loading = true;
            const { getProducts: getData } = http.products;

            try {
                const req = await getData();
                const data = req?.object ?? [];
                this.treatDataTable(data);
                this.tableData = data;
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