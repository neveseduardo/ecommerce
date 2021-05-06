<template>
	<div class="error-container">
		<div class="error-content">
			<h1>Erro de conexão http 404, página não encontrada.</h1>
			<p>A página que vc procura não foi encontrada. Clique <a href="" @click.prevent="handleToHome">aqui</a> para voltar para a página nicial.</p>
		</div>
		
	</div>
</template>

<script>
export default {
	name: 'Error404',
	methods: {
		handleToHome() {
			this.$router.push({ name: 'Home' })
		}
	}
}
</script>

<style>
.error-container{
	width: 100%;
	height: calc(100vh - 40px);
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: #fff;
}
.error-content{
	width: 80%;
	text-align: center;
}
.error-content h1 {
	text-transform: uppercase;
}
</style>