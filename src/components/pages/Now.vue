<template>
  <div class="now">
    <div class="now__backdrop">
      <div class="now__img-mask now__img--cactus-short " data-tilt-scale="1.1" @mouseover="mouseover($event)" data-tilt>
          <img class="now__cactus--short" src="../../assets/images/cactus_short.png" alt="cactus--short"> 
      </div>
      <div class="now__img-mask now__img--cactus-tall " data-tilt-speed="400" data-tilt-perspective="500" @mouseover="mouseover($event)" data-tilt>
          <img class="now__cactus--tall" src="../../assets/images/cactus_tall.png" alt="cactus--tall">
      </div>
    </div>
    <!-- <div class="now__blog">
      <p>Working on various personal projects</p>
      <p>Side biz, Pride Austin Newsletter, PrideInTexas</p>
      <a href="http://lovelyfaceuglycity.com" target="_blank">
      <p class="link-box"> <span>Lovelyfaceuglycity.com</span></p>
      </a>
      <p>Joined the Austin Pride Board of Directors | Director of Technology &#x1F308</p>
      <p>Currently &#x1F4D6 | The Fall of Hyperion x Dan Simmons</p>
      <p>Currently &#x1F3A7 | What Happened x Hillary Clinton</p>
      <br>
      <br>
      <p>Updated Sept 16, 2017</p>
    </div> -->
  </div>
</template>
<script>
import {tilt} from '../../utils/tilt.mixin.js'
import VanillaTilt from '../../utils/tilt.js'
export default {
  name: 'Now',
  mixins: [tilt],
  data () {
      return {
          
      }
  },
  computed:{

  },
  mounted(){
// const element = document.querySelector(".js-tilt");
// VanillaTilt.init(element);
  },
  methods:{
    mouseover (e) {
     let className = e.target.parentElement.classList[1]
     const element = document.querySelector('.'+className);
        VanillaTilt.init(element);
    },
    // mouseenter(e){
    //   // this.updateElementPosition();
    //   // this.element.style.willChange = "transform";
    //   // this.setTransition();
    //   console.log('enter:',e);
    // },
    // mouseleave(e){
    //   console.log('leave:',e);
    // },
    // updateElementPosition(){
      //update the element where mouse enter position
    //    var rect = this.element.getBoundingClientRect();

    // this.width = this.element.offsetWidth;
    // this.height = this.element.offsetHeight;
    // this.left = rect.left;
    // this.top = rect.top;
    // }

  }
}
</script>