import selectors from '../data/cssSelectors.js'

const SelectorBasket = {
  template: `
      <div>
        <h4>Selectors Basket</h4>
        <div v-for="(selectorName, index) in selectors">
          <button @click="markSelected(selectorName)">choose</button>
          <li style="display: inline;">{{ selectorName }}</li>
        </div>
      </div>
    `,
  data() {
    return {
      selectors
    }
  },
  methods: {
    markSelected (selectorName) {
      console.log(selectorName)
      this.$store.commit('mark', selectorName)
    }
  }
}

export default SelectorBasket