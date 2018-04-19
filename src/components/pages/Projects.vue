<template>
  <div class="projects">
    <div v-for="project in projects" :key="project.id">
      <a :href="project.link" target="_blank">
        <p class="link-box">{{project.name}} </p>
      <!-- <div class="project-img">
        <img :src="project.img">
      </div> -->
      </a>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Projects',
  data () {
      return {
          projects: [
        {
          name: 'juanrod_v3',
          link: 'http://juanrod.co',
          img:'/../../src/assets/britney_email.gif'
        },
        {
          name: 'lovelyfaceuglycity',
          link: 'http://lovelyfaceuglycity.com'
        },
        {
          name: 'mediasciencenyc',
          link: 'http://mediasciencenyc.com'
        },
        {
          name: 'mediasciencepanel',
          link: 'http://mediasciencepanel.com'
        },
        {
          name: 'rReports',
          link: 'http://rreports.juanrod.co'
        },
        {
          name: 'uPick',
          link: 'https://upick-88.firebaseapp.com/#/oh'
        },
        {
          name: 'War',
          link: 'http://war.juanrod.co'
        },
        {
          name: 'MultiVision',
          link: 'https://sleepy-island-45336.herokuapp.com/'
        }
      ]
      }
  }
}
</script>