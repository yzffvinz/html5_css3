const OperateBar = {
  template: `
  <div>
    <h4>Operate Bar</h4>
    <input class="input-selector" v-model="selectorName" type="text"/>
    <button @click="highlightSelected">show</button>
    <button @click="resetStyle">reset</button>
  </div>`,
  data () {
    return {
      selectorName: ''
    }
  },
  methods: {
    highlightSelected () {
      this.$store.commit('mark', this.selectorName)
      this.selectorName = ''
    },
    spaceTravel (index) {
      this.$store.commit('travel', index)
    },
    resetStyle () {
      this.selectorName = ''
      this.$store.commit('clear')
    }
  },
  created () {
    document.onkeypress = (e) => {
      e.key === 'Enter' && this.highlightSelected()
    }
  }
}

export default OperateBar