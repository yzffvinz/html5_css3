const TravelList = {
  template: `
  <div class="il-bl">
    <h4>Travels</h4>
    <div class="travels">
      <div class="travel-item btn"
           v-for="(travel, index) in $store.state.travels"
           @click="spaceTravel(index)">
        {{ index + 1 > 9 ? index + 1 : '0' + (index + 1) }}: {{ travel.selectorName }}
      </div>
    </div>
  </div>
  `,
  methods: {
    spaceTravel(index) {
      this.$store.commit('travel', index)
    }
  }
}


export default TravelList