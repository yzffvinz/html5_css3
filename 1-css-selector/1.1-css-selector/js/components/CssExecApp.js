import { resetStyle, markSelected } from '../util/selector.js'

const CssExecApp = {
  data () {
    return {
      selectorName: '',
      travels: [],
      travel: {
        selectorName: '',
        travels: []
      }
    }
  },
  methods: {
    highlightSelected () {
      try {
        if(this.selectorName.match(/^\s*$/)) {
          throw new Error()
        }
        const selectorName = this.selectorName
        markSelected(selectorName)
        this.travels.push({ selectorName })

        this.selectorName = ''
      } catch(e) {
        alert('invalid selector!')
      }
    },
    spaceTravel (index) {
      resetStyle()
      this.travels.some((travel, i) => {
        markSelected(travel.selectorName)
        return i >= index
      })
    },
    resetStyle () {
      this.selectorName = ''
      this.travels = []
      resetStyle()
    }
  },
  created () {
    document.onkeypress = (e) => {
      e.key === 'Enter' && this.highlightSelected()
    }
  },
  template: `
  <div>
    <h3>
      CSS Display Tool
      <img class="btn-reset btn" @click="resetStyle" src="1.1-css-selector/imgs/reset.png" width="14">
    </h3>
    <input class="input-selector" v-model="selectorName" type="text"/>
    <button @click="highlightSelected">show</button>
    <div class="travels">
      <div class="travel-item btn" v-for="(travel, index) in travels" @click="spaceTravel(index)">{{ index + 1 }}: {{
        travel.selectorName }}
      </div>
    </div>
  </div>
  `
}

export default CssExecApp