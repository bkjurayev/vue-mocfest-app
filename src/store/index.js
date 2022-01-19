import { createApp } from 'vue'
import { createStore } from 'vuex'
import tickets from './modules/tickets'

// Create a new store instance.
const store = createStore({
  modules: {
    tickets
	}
})

const app = createApp({ /* your root component */ })
// Install the store instance as a plugin
export default app.use(store)