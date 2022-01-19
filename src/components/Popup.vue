<template>
	<div class="popup popup_callback">
		<div class="popup__content">
			<div class="popup__body events">
				<div class="popup__close"></div>
				<form action="POST" class="events__content">
					<div class="events__logo">
						<img src="../assets/img/logo/logo-left.png" alt="" class="events__logo__left">
						<span class="events__logo__vector"></span>
						<img src="../assets/img/logo/logo-right.png" alt="" class="events__logo__right">
					</div>
					<div class="events__body event">
						<div class="event__column">
							
							<div class="event__item item">
								<input type="email" placeholder="Email" class="item__input">
							</div>
							<div class="event__item item">
								<input type="text" placeholder="Номер телефона" class="item__input">
							</div>
							
							<div class="event__item item">
								<div class="item__left">
									<a href=" class=" class="item__title">Способ оплаты</a>
									<p class="item__text">Payme</p>
								</div>
								<div class="item__right">
									<img src="../assets/img/icons/icon-1.png" alt="" class="item__icon">
								</div>
							</div>
											
							<div class="event__item info">
								<div class="info__item">
									<div class="info__label">Событие</div>
									<div class="info__date">New Matters</div>
								</div>
								<div class="info__item">
									<div class="info__label">Кол-во</div>
									<div class="info__date">3 шт.</div>
								</div>
								<div class="info__item">
									<div class="info__label">Итого</div>
									<div class="info__date">18:00</div>
								</div>
							</div>						
						</div>
					</div>				
					<div class="events__btn _btn">
						<a href="#">продолжить</a>
					</div>
				</form>
				<div class="events__footer footer">
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
	</div>
</template>