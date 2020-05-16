import OperateBar from './components/OperateBar.js'
import TravelList from './components/TravelsList.js'
import SelectorBasket from './components/SelectorBasket.js'
import store from './store/store.js'

window.vm = new Vue({
  el: '#app',
  components: { OperateBar, TravelList, SelectorBasket },
  store,
  data() {
    return {
      notice: '目前对于动态属性支持不理想，如a:hover等等。可自行编写<div class="display"></div>中的内容，用以展示全部选择器'
    }
  }
})


