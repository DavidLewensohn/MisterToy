<template>
  <section class="app-container container">
    <app-header />
    <router-view />
  </section>
</template>

<script>
import appHeader from './components/app-header.vue'

export default {
  name: 'app',
  created() {
    console.log('hi')
    this.$store.dispatch({ type: 'loadToys' })
  },
  methods: {

  },
  components: {
    appHeader,
  },
}
</script>