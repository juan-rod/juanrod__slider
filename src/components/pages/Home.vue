<template>
  <div class="home">
    <under-construction></under-construction>
    <transition :name="routerSlide">
        <router-view class="home__router"></router-view>
    </transition>
    <!-- <nav-bar></nav-bar> -->
    <nav-direction></nav-direction>
  </div>
</template>
<script>
import NavBar from '../layout/Nav.vue'
import NavDirection from '../layout/NavDirection.vue'
import UnderConstruction from '../components/UnderConstruction.vue'
export default {
  name: 'Home',
  components: { NavBar, NavDirection, UnderConstruction },
  computed:{
    routerSlide (){
      return {
        'left': 'router-slide-l',
        'right': 'router-slide-r'
      }[this.$store.state.slideTransition]
    }
  }
}
</script>

