import { resetStyle, markSelected } from '../util/selector.js'

const store = new Vuex.Store({
  state: {
    index: -1,
    travels: []
  },
  mutations: {
    mark(state, selectorName) {
      try {
        if(selectorName.match(/^\s*$/)) {
          throw new Error()
        }
        if (state.index !== -1) {
          state.travels = state.travels.slice(0, state.index + 1)
        }
        markSelected(selectorName)
        state.travels.push({ selectorName })
        state.index = -1
      } catch(e) {
        alert('invalid selector')
        console.error(e)
      }
    },
    clear (state) {
      resetStyle()
      state.travels = []
    },
    travel (state, index) {
      resetStyle()
      state.travels.some((travel, i) => {
        markSelected(travel.selectorName)
        return i >= index
      })
      state.index = index
    }
  }
})

export default store