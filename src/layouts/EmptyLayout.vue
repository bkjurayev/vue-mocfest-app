<template>
	<div class="wrapper">			
      <Header />
		<main class="page">

      	<router-view/>

      </main>  
	</div>
</template>

<script>
import Header from '@/components/Header'

export default {
	name: 'empty-layout',
	components: {
		Header
	}
}
</script>


