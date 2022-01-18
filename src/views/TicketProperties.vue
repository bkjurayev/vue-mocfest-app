<template>
	<div class="page__quantity-product product-quantity _close">
		<div class="product-quantity__column">
			<div class="product-quantity__top top-quantity">
				<div class="top-quantity__left">
					<a href=" class=" class="top-quantity__title">Гроза</a>
					<p class="top-quantity__text">12 марта</p>
				</div>
				<div class="top-quantity__right">
					<img src="../assets/img/icons/icon-1.png" alt="" class="top-quantity__icon">
				</div>
			</div>									
			<div class="product-quantity__content content-quantity">
				<div class="content-quantity__quantity quantity">
					<div class="quantity__dec">
						<img src="../assets/img/icons/icon-dec.png" alt="">
					</div>
					<div class="quantity__center">{{ticket.title}}
						<h1 class="quantity__title">количество</h1>
						<div class="quantity__number">3</div>
					</div>
					<div class="quantity__inc">
						<img src="../assets/img/icons/icon-inc.png" alt="">
					</div>
				</div>
				<div class="content-quantity__info info-quantity">
					<div class="info-quantity__item">
						<div class="info-quantity__label">Дата события</div>
						<div class="info-quantity__date">9 апр.</div>
					</div>
					<div class="info-quantity__item">
						<div class="info-quantity__label">Начало</div>
						<div class="info-quantity__date">18:00</div>
					</div>
				</div>
			</div>
			<a href="index.html" class="_close-btn"></a>
		</div>
	</div>
</template>

<script>


export default {	
	// props: ['title'],
	data: () => ({	
	}),
	created: function(){	
		console.log(ticket);
	},
	computed: {
		ticket() {
			return  this.$route.query; 

		}
	} 
}
</script>
