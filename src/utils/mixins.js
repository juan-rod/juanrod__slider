import { mapGetters, mapMutations, mapActions} from 'vuex'
import store from '../store/store';

export const vuex_mixin = {
  computed: {
    ...mapGetters([
      'slideTransition'
    ]),
  },
  methods: {
    ...mapActions([
      'getSlideTransition'
    ])
  }
};