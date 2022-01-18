<template>
  <div class="page__buy-ticket buy-ticket">
		<div class="buy-ticket__column">
		
			<div v-for="ticket in tickets" :key="ticket.index" class="buy-ticket__row">
				<router-link :to="{name: 'ticketproperties', query: {'title': ticket.title, 'date': ticket.date, 'time': ticket.time}}" class="buy-ticket__title">{{ticket.title}}</router-link>              			
				<p class="buy-ticket__text">{{ticket.date}}</p>
			</div>
		
		</div>
	</div>
</template>


<script>

export default {
  name: 'home',
  data: () => ({
    tickets: [
      {title: 'Гроза', date: '12 марта', time: '10:00'},
      {title: 'Stand-Up Dvizh', date: '13 марта', time: '10:00'},
      {title: 'МЫКОСМОС', date: '19 марта (событие) 25 марта-10 апреля (выставка)', time: '10:00'},
      {title: 'New Matters', date: '8-24 апреля', time: '10:00'},
      {title: 'Cinema Love', date: '15-17 апреля, 22-24 апреля', time: '10:00'},
    ]
  })
}
</script>
  