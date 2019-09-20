
export default {
  methods: {
    changeNav (index, flag) {
      console.log(this.$route.name)
      if (this.$route.name == 'wonder') {
        if (index == 0) {
          this.hideBgColor = true
        } else {
          this.hideBgColor = false
        }
      }
      if (typeof flag != 'undefined') {
        if (this.$route.query.actIndex == index) {
          return
        }
        this.$router.push({
          name: this.$route.name,
          query: {
            actIndex: index
          }
        })
      }
      this.actIndex = index
    }
  }
}
