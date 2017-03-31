<template>
  <div id="app">
    <router-view></router-view>
    <loading v-show="this.$store.state.global.ajax_loading"></loading>
  </div>
</template>

<script>
  import loading from  './components/Spinner'
export default {
  name: 'app',
  components: {
    loading
  }
}
</script>
<style lang="scss">
@import './assets/css/base.scss';
</style>
