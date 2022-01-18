<template>
  <div id="nav">
    <component :is="layout">

      <router-view />

    </component>    
  </div>
</template>

<script>
  import MainLayout from '@/layouts/MainLayout'
  import EmptyLayout from '@/layouts/EmptyLayout'
  export default {
    name: 'App',
    props: {},
    computed: {
      layout() {
        return (this.$route.meta.layout || 'main') + '-layout'
      }
    },
    components: {
      MainLayout, EmptyLayout
    }
  }
</script>