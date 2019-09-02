
import { mapMutations, mapActions } from 'vuex'

export default {
  ...mapActions(['getCategoryList']),
  ...mapMutations(['SET_ACTIVE_INDEX'])
}
