<template>
	<div class="page__payment payment-product _close">
		<div class="payment-product__column">									
			<form accept="POST" class="payment-product__content content-payment">
				<div class="content-payment__email">
					<input type="email" placeholder="Email" class="content-payment__input">
				</div>
				<div class="content-payment__phone">
					<input type="text" placeholder="Номер телефона" class="content-payment__input">
				</div>
				<div class="content-payment__btn btn-payment">											
					<div class="btn-payment__left">
						<h1 class="btn-payment__title">Способ оплаты</h1>
						<div class="btn-payment__text">Payme</div>
					</div>
					<div class="btn-payment__right">
						<img src="../assets/img/icons/icon-1.png" alt="" class="btn-payment__icon">
					</div>
				</div>
				<div class="content-payment__info info-payment">
					<div class="info-payment__item">
						<div class="info-payment__label">Событие</div>
						<div class="info-payment__date">New Matters</div>
					</div>
					<div class="info-payment__item">
						<div class="info-payment__label">Кол-во</div>
						<div class="info-payment__date">3 шт.</div>
					</div>
					<div class="info-payment__item">
						<div class="info-payment__label">Итого</div>
						<div class="info-payment__date">250 000 сум.</div>
					</div>
				</div>
			</form>
			<a href="index.html" class="_close-btn"></a>
		</div>
	</div>
</template>