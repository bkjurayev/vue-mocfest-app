export default {
	state () {
		return {
		  tickets: {
			  title: 'Sasha',
			  text: 'bigsoft master'
		  }
		}
	},
	mutations: {
		increment (state) {
		  state.count++
		}
	},
	actions: {
	},	
	getters: {
		allTickets(state) {
			return state.tickets
		}
	}
}