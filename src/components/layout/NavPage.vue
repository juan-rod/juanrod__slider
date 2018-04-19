<template>
  <div class="nav__page">
    <!-- <transition-group :name="navPageSlide"> -->
      <div class="nav__page--prev border2"><span>{{prevPage}}</span></div>
      <div class="nav__page--next border2"><span>{{nextPage}}</span></div>
    <!-- </transition-group> -->
  </div>
</template>
<script>
import {vuex_mixin} from '../../utils/mixins.js'
export default {
  name: 'NavPage',
  mixins: [vuex_mixin],
  data () {
    return {

    }
  },
  computed:{
    prevPage () {
      return this.$store.state.prevPage
    },
    nextPage () {
      return this.$store.state.nextPage
    }
  },
  methods:{

  }
}
</script>

