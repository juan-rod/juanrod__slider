<template>
  <div class="nav__direction">
    <div class="nav__direction--left" @click="panelClick('l')"><p>{{prevPage}}</p></div>
    <div class="nav__direction--right" @click="panelClick('r')"><p>{{nextPage}}</p></div>
   <!-- <div class="nav__direction--palm">
      <img src="../../assets/images/palm_png_fronds.png" alt="palm">
    </div> -->
  
  </div>
</template>
<script>
import {vuex_mixin} from '../../utils/mixins.js'
export default {
  name:'NavDirection',
  mixins: [vuex_mixin],
  data () {
    return {
      step: 0,
      paths: ['/','/about','/now','/projects','/timeline'],
      nextpage: 'about'
    }
  },
  computed:{
    nextPage(){
      return {
        '0': 'about',
        '1': 'now',
        '2': 'projects',
        '3': 'timeline',
        '4': ''
      }[this.step]
    },
    prevPage(){
      return {
        '0': '',
        '1': 'about',
        '2': 'now',
        '3': 'projects',
        '4': 'timeline'
      }[this.step]
    }
  },
  methods:{
    panelClick (side) {
      let constant = this.step
      if(side === 'l') this.step--
      if(side === 'r') this.step++
      this.routerTransition(side)
      this.changePath(constant)
    },
    changePath (constant) {
      if (this.step > (this.paths.length - 1)) {
        this.startOfPath()
      } else if (this.step < 0 ) {
        this.endOfPath()
      } else {
        this.$router.push(this.paths[this.step])
      }
    },
    startOfPath () { 
      this.$router.push(this.paths[0]) 
      this.step = 0
    },
    endOfPath () { 
      this.step = (this.paths.length - 1)
      this.$router.push(this.paths[this.step])
    },
    routerTransition(side){
      console.log('routerTransition:', side)
      if(side === 'l') this.$store.state.slideTransition = 'left'
      if(side === 'r') this.$store.state.slideTransition = 'right'
      console.log('this.slideTransition:',this.$store.state.slideTransition)
    }
  }
}
</script>

