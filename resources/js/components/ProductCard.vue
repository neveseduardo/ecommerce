<template>
    <transition name="fade" mode="out-in">
        <div v-if="loading" class="spinner-loader"></div>
        <el-card
            v-else
            shadow="never"
            class="product-card"
            :body-style="{ padding: '0px' }"
        >
            <span v-if="discount !== undefined" class="discount">{{
                discount + '%'
            }}</span>
            <figure>
                <img :src="image" />
            </figure>
            <div>
                <h5>
                    <span :title="title">{{
                        title.split(' ').splice(0, 4).join(' ') + '...'
                    }}</span>
                    <a @click="toggleLiked"
                        ><i :class="liked ? 'fa fa-heart' : 'far fa-heart'"></i
                    ></a>
                </h5>
                <el-rate v-model="rate"></el-rate>
                <h2>
                    <span v-if="discount !== undefined">R$ {{ value }}</span
                    >R$ {{ valuated }}
                </h2>
            </div>
        </el-card>
    </transition>
</template>

<script>
export default {
    props: ['image', 'title', 'value', 'discount'],
    data() {
        return {
            loading: true,
            rate: null,
            liked: false,
        };
    },
    computed: {
        valuated() {
            let reducer = this.discount ?? 0;
            reducer = parseFloat(reducer);
            if (reducer === 0) return this.value;
            let price = parseFloat(this.value);
            price = price - price * parseFloat(`0.${reducer}`);
            return price.toFixed(2).replace('.', ',');
        },
        timeout() {
            let random = Math.floor(100000 + Math.random() * 900000).toString();
            return parseInt(random.slice(1, 4));
        },
    },
    methods: {
        toggleLiked() {
            this.liked = !this.liked;
        },
    },
    mounted() {
        setTimeout(() => {
            this.loading = false;
        }, this.timeout);
    },
};
</script>

<style>
.spinner-loader {
    margin: 0 auto 1rem;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: center;
}
.product-card {
    margin-bottom: 2rem;
    position: relative;
}
.product-card .discount {
    position: absolute;
    top: -10px;
    left: 10px;
    background-color: orangered;
    color: #fff;
    z-index: 900;
    padding: 15px;
    font-weight: bold;
}
.product-card figure {
    width: 100%;
    height: 150px;
    max-height: 150px;
    overflow: hidden;
}
@media screen and (min-width: 1200px) {
    .product-card figure {
        height: 250px !important;
        max-height: 250px;
    }
}
.product-card figure:hover img {
    transform: scale(1.1, 1.1);
    -webkit-transition: all 0.5s ease;
    -moz-transition: all 0.5s ease;
    transition: all 0.5s ease;
    -moz-transform: scale(1.5) rotate(-5deg);
    -webkit-transform: scale(1.5) rotate(-5deg);
    -o-transform: scale(1.5) rotate(-5deg);
    -ms-transform: scale(1.5) rotate(-5deg);
    transform: scale(1.5) rotate(-5deg);
}
.product-card img {
    max-width: 100%;
    object-fit: cover;
    -webkit-transition: all 0.8s cubic-bezier(0.19, 1, 0.22, 1);
    -moz-transition: all 0.8s cubic-bezier(0.19, 1, 0.22, 1);
    -ms-transition: all 0.8s cubic-bezier(0.19, 1, 0.22, 1);
    -o-transition: all 0.8s cubic-bezier(0.19, 1, 0.22, 1);
    transition: all 0.8s cubic-bezier(0.19, 1, 0.22, 1);
}
.product-card div h5 {
    font-size: 1.2rem;
    display: flex;
}
.product-card div h5 span {
    flex: 1;
    cursor: pointer;
}
.product-card div h5 a {
    cursor: pointer;
}
.product-card > div h2 {
    font-family: 'Secular One', sans-serif;
    padding: 1rem 0 0 0;
    font-size: 1.5rem;
}
.product-card > div h2 span {
    position: relative;
    font-size: 1rem;
    color: #ccc;
    margin-right: 10px;
    display: none;
}
@media screen and (min-width: 1200px) {
    .product-card > div h2 span {
        display: inline;
    }
}
.product-card > div h2 span:before {
    content: '';
    position: absolute;
    top: 40%;
    left: 0;
    height: 1px;
    width: 100%;
    background-color: #ccc;
}
.el-card {
    border: none !important;
    overflow: visible !important;
}
</style>