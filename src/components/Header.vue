<template>
  <header class="header">
    <div class="header__container _container">
      <div class="header__body">
        <nav class="header__navbar">
          <ul class="header__menu menu-header">            
            
            <li 
              v-for="link in links" 
              :key="link.url" 
              class="menu-header__item"
            >
              <router-link class="menu-header__link" :to="link.url" :exact="link.exact">
                {{link.title}}
              </router-link>                        
            </li>

          </ul>
        </nav>
        <div class="header__menu-icon">
          <div class="icon-menu">
            <span></span>					
            <span></span>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data: () => ({
    links: [
      { title: 'Команда', url: '/comand' },
      { title: 'Галерея', url: '/gallery' },
      { title: 'Карта', url: '/map' },
      { title: 'Манифест', url: '/manifesto', exact: true},
      { title: 'Партнеры', url: '/partners' },
    ]
  })
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
