export const tilt = {
  data(){
    return{
      width : null,
      height : null,
      left : null,
      top : null,
      settings: {
        reverse: false,
        max: 35,
        perspective: 1000,
        easing: "cubic-bezier(.03,.98,.52,.99)",
        scale: "1",
        speed: "300",
        transition: true,
        axis: null,
        glare: false,
        "max-glare": 1,
        "glare-prerender": false,
        reset: true
      }
    }
  },
  computed: {
    
  },
  methods: {
    mouseover (e) {
      let mouseX = e.pageX,
          mouseY = e.pageY
         console.log('mouseX:',mouseX)
         console.log('mouseY:',mouseY)
     },
     mouseenter (e) {
       let el = document.getElementById(e.target.id);
       console.log("hello from mouseEnter")
       // this.element.style.willChange = "transform"
       this.updateElementPosition(el)
       this.setTransition(el)
      },
      mouseleave (e) {
        console.log('leave:',e)
      },
      updateElementPosition (el) {
        var rect = el.getBoundingClientRect();
        //  console.log("rect:",rect)
         this.width = el.offsetWidth;
         this.height = el.offsetHeight;
         this.left = rect.left;
         this.top = rect.top;
      },
      setTransition (el) {
        console.log("*********hello from setTransition:",el )
        clearTimeout(this.transitionTimeout);
        el.style.transition = this.settings.speed + "ms " + this.settings.easing;

        this.transitionTimeout = setTimeout(function () {
          el.style.transition = "";
         
        }, this.settings.speed);

     }

  }
};