import selectors from '../data/cssSelectors.js'

const SelectorBasket = {
  template: `
      <div class="il-bl">
        <h4>Selectors Basket：
        CSS
        <select v-model="css">
          <option value="">全部</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        </h4>
        
          
        <span class="il-bl" style="width: 200px; font-weight: bold;">选择器</span>
        <span class="il-bl" style="width: 200px; font-weight: bold;">例子</span>
        <div v-for="(selector, index) in selectors">
          <li :title="selector.displayText" style="display: inline;">
            <span class="il-bl" style="width: 200px;">{{ selector.formula }}</span>
            <span class="il-bl" style="width: 180px;">{{ selector.sample }}</span>
            <button @click="markSelected(selector.sample)">></button>
          </li>
        </div>
      </div>
    `,
  data () {
    return {
      css: ''
    }
  },
  methods: {
    markSelected (selectorName) {
      this.$store.commit('mark', selectorName)
    }
  },
  computed: {
    selectors () {
      return selectors.filter(selector => !this.css || selector.gen === this.css)
    }
  }
}

export default SelectorBasket