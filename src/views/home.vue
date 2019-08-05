<template>
  <div class="home" style="height: 500px">
    home
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Home',
  components: {
  },
  computed: {
    ...mapGetters('Home', ['getInfo'])
  },
  mounted () {
    console.log('home mounted', this.getInfo)
  }
}
</script>
