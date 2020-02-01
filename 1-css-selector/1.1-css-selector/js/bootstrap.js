import OperateBar from './components/OperateBar.js'
import TravelList from './components/TravelsList.js'
import SelectorBasket from './components/SelectorBasket.js'
import store from './store/store.js'

window.vm = new Vue({
  el: '#app',
  components: { OperateBar, TravelList, SelectorBasket },
  store
})


