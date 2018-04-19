<template>
    <div class="nav">
        <!-- <router-link class="nav__home" to="/"></router-link> -->
        <router-link to="/about">about</router-link>
        <router-link to="/now">now</router-link>
        <router-link to="/projects">projects</router-link>
        <router-link to="/timeline">timeline</router-link>
    </div>
</template>
<script>
export default {
  name: 'NavBar',
  data () {
      return {
          
      }
  }
}
</script>