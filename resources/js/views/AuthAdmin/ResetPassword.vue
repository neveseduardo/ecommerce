<template>
    <div>
        <h1>Página inicial</h1>
    </div>
</template>

<script>
import Carousel from '@/components/Carousel';
import ProductCard from '@/components/ProductCard';
import HorizontalCard from '@/components/ProductHorizontalCard';
import CategoryCard from '@/components/CategoryCard';
import products from '@/database/products.js';
import categories from '@/database/categories.js';
import axios from 'axios';

export default {
    components: {
        Carousel,
        ProductCard,
        CategoryCard,
        HorizontalCard,
    },
    data: () => {
        return {
            data: products,
            categories: categories,
			bestselers: products.slice(0, 4),
			inHigh: products.slice(0,3),
			recents: products.slice(0,3),
            formData: {
                cityInput: '',
                city: '',
            },
            input3: '',
            select: [],
        };
    },
    methods: {
        onSubmit() {
            console.log('submeteu');
        },
        getCities(query, callback) {
            this.clearCity();
            axios
                .get('/cities', {
                    query: query,
                })
                .then((response) => {
                    callback(response.data);
                });
        },
        handleSelectCity(item) {
            this.formData.city = item.value;
        },
        clearCity() {
            this.formData.city = '';
        },
    },
};
</script>

<style lang="scss" scoped>
.section-title {
    text-align: center;
    margin: 3rem 0;
}
.section-title h1 {
    font-family: 'Secular One', sans-serif;
    font-size: 2.1rem !important;
}
.section-title h5{
	color: #666;
}
.section-button {
    padding: 2rem 0;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
}
.see-more {
    display: block;
    text-transform: uppercase;
    color: #fff;
    font-weight: bold;
    background-color: #333;
    padding: 1rem 3rem;
    cursor: pointer;
}
.paralax {
    width: 100%;
    min-height: 400px;
    padding: 2rem 0;
    background-color: #333;
    background-image: url('https://cdn.dooca.store/1671/files/background-jaime-shop-preto.png?v=1605121539&webp=0');
    background-position: center center;
    background-size: cover;
    background-attachment: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    text-align: center;
}
.paralax div a {
    display: inline-block;
    background-color: #fff;
    padding: 1rem 3rem;
    color: #333;
    text-transform: uppercase;
    font-weight: bold;
}
.paralax div a:hover {
    color: #333;
}
.paralax div h1 {
    font-size: 3.3rem !important;
    margin: 1rem 0 2rem;
    text-transform: uppercase;
    font-family: 'Secular One', sans-serif;
}
</style>

