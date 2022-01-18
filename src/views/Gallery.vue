<template>
  <div class="page__container _container">
    <div class="page__gallery gallery">
      <div class="gallery__content content-gallery">
        
        <router-link to="/" class="content-gallery__link-home">
          <img src="../assets/img/icons/icon-1.png" alt="">
          <span>на главную</span>
        </router-link>        

        <h1 class="content-gallery__title">МЫКОСМОС</h1>
        <div class="content-gallery__subtitle">
          <span>открытие: <strong>19 марта, 18:00</strong></span>
          <span>локация: <strong>бывш. завод УзБум</strong></span>
          <span>лайнап: <strong>Bad sector, Flyin Up, Gio, Lee Lu Lien.</strong></span>								
          <span>иммерсивные инсталляции: <strong>Данил Лашманов, Азиза Пулатова, Фалончи Писмадончиев, Джон Доу, Олег Газманов</strong></span>
        </div>
        <div class="content-gallery__description">
          <div>фестиваль мультимедийного искусства, главная цель которого — показать человека в составе бесконечной Вселенной, позволить людям отвлечься от обыденности и посмотреть на наше существование со стороны</div>
          <div>проект предоставляет возможность стать частью одного общего пространства, растворившись в интерактивной выставке, связывающей искусство с технологиями, в сопровождении музыки экспериментального формата</div>
        </div>
        <div class="content-gallery__btn">
          
          <router-link to="/" class="content-gallery__link-home">Купить билеты</router-link>
          
        </div>
      </div>
      <div class="gallery__body _gallery">							
        <div class="gallery__item">
          <a href="../assets/img/gallery/1.jpg">
            <img src="../assets/img/gallery/1.jpg" alt="">
          </a>
          <a href="../assets/img/gallery/3.jpg">
            <img src="../assets/img/gallery/3.jpg" alt="">
          </a>
          <a href="../assets/img/gallery/5.jpg">
            <img src="../assets/img/gallery/5.jpg" alt="">
          </a>
        </div>
        <div class="gallery__item">
          <a href="../assets/img/gallery/2.jpg">
            <img src="../assets/img/gallery/2.jpg" alt="">
          </a>
          <a href="../assets/img/gallery/4.jpg">
            <img src="../assets/img/gallery/4.jpg" alt="">
          </a>
          <a href="../assets/img/gallery/6.jpg">
            <img src="../assets/img/gallery/6.jpg" alt="">
          </a>
        </div>
        <div class="gallery__item">
          <a href="../assets/img/gallery/1.jpg">
            <img src="../assets/img/gallery/1.jpg" alt="">
          </a>
          <a href="../assets/img/gallery/3.jpg">
            <img src="../assets/img/gallery/3.jpg" alt="">
          </a>
          <a href="../assets/img/gallery/5.jpg">
            <img src="../assets/img/gallery/5.jpg" alt="">
          </a>
        </div>							
      </div>						
    </div>
  </div>				
</template>


<script>

export default {
  name: 'gallery',
  components: {}
}
</script>
  