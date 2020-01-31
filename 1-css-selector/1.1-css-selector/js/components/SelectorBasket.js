import { markSelected } from '../util/selector.js'

const SelectorBasket = {
  props: ['selectors'],
  template: `
      <div>
        <div v-for="(selector, index) in selectors">
          <button @click="markSelected(selector)">choose</button>
          <li style="display: inline;">{{ selector }}</li>
        </div>
      </div>
    `,
  methods: {
    markSelected (selector) {
      markSelected(selector)
    }
  }
}

export default SelectorBasket