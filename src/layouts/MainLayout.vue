<template>
	<div class="wrapper">			
      <Header />
		<main class="page">
      	<div class="page__container">
				<div class="page__body">
					<div class="page__content">
					<div class="page__logo">
						<img src="../assets/img/logo/logo-left.png" alt="" class="page__logo__left">
						<span class="page__logo__vector"></span>
						<img src="../assets/img/logo/logo-right.png" alt="" class="page__logo__right">
					</div>
					 
						<router-view />

					<div class="page__btn _btn">
						<a href="page-2.html">Купить билет</a>
					</div>
					</div>
					<div class="page__footer footer">
					<div class="footer__socials">
						<div class="footer__item">
							<a href="" class="footer__link footer_facebook">Facebook <span class="footer__vector"></span></a>
							<a href="" class="footer__link footer_instagram">Instagram <span class="footer__vector"></span></a>
							<a href="" class="footer__link footer_email">Email <span class="footer__vector"></span></a>								
						</div>
						<div class="footer__item">
							<a href="" class="footer__link footer_telegram">Telegram <span class="footer__vector"></span></a>
							<a href="" class="footer__link footer_telegram-bot">Telegram Bot <span class="footer__vector"></span></a>
						</div>
					</div>
					<a href="tel: +998 94 603 60 85" class="footer__link footer_phone">+998 94 603 60 85</a>
					</div>
				</div>
			</div>  
      </main>  
	</div>
	<Popup />
</template>

<script>
import Header from '@/components/Header'
import Popup from '@/components/Popup'

export default {
	name: 'main-layout',	
	components: {
		Header, Popup
	}
}
</script>


