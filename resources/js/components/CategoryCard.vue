<template>
    <el-card
        shadow="hover"
        class="category-card"
        :body-style="{ padding: '0px' }"
    >
        <figure>
            <img :src="image" />
        </figure>
        <div style="padding: 14px">
            <a>{{ title }}<i class="fa fa-arrow-right"></i></a>
        </div>
    </el-card>
</template>

<script>
export default {
    props: ['image', 'title', 'value'],
    data: () => {
        return {
            rate: null,
        };
    },
};
</script>

<style>
.category-card {
    margin-bottom: 2rem;
}
.category-card figure {
	width: 100%;
	height: 200px;
    max-height: 200px;
    overflow: hidden;
}
.category-card figure:hover img {
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
.category-card img {
    max-width: 100%;
    -webkit-transition: all 0.8s cubic-bezier(0.19, 1, 0.22, 1);
    -moz-transition: all 0.8s cubic-bezier(0.19, 1, 0.22, 1);
    -ms-transition: all 0.8s cubic-bezier(0.19, 1, 0.22, 1);
    -o-transition: all 0.8s cubic-bezier(0.19, 1, 0.22, 1);
    transition: all 0.8s cubic-bezier(0.19, 1, 0.22, 1);
}
.category-card div h5 {
    display: flex;
    padding: 1rem 0;
}
.category-card div h5 span {
    flex: 1;
    cursor: pointer;
}
.category-card div a {
	background-color: #ccc;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	padding: 1rem;
	cursor: pointer;
	font-weight: bold;
	text-transform: uppercase;
}
.category-card div a i{
	padding: 0 1rem;
}
.el-card {
    border: none !important;
}
</style>