<template>
  <div>
  <router-view></router-view>
   <nav class="bar bar-tab" style="background: #323542;">
     <router-link class="tab-item external" :to="{ path: '/routerview'}" exact>
       <span class="icon icon-home"></span>
       <span class="tab-label">市场</span>
     </router-link>
       <router-link class="tab-item external" :to="{ path: '/routerview/tool'}">
       <span class="icon icon-settings"></span>
       <span class="tab-label">工具</span>
     </router-link>
         <router-link class="tab-item external" :to="{ path: '/routerview/viewing'}">
       <span class="icon icon-browser"></span>
       <span class="tab-label">视角</span>
     </router-link>
     <router-link class="tab-item external" :to="{ path: '/routerview/center'}">
       <span class="icon icon-me"></span>
       <span class="tab-label">中心</span>
       <span class="badge">1</span>
     </router-link>
   </nav>
  </div>
</template>
<style lang="scss">
  .bar-tab {
    height: 2.6rem;
  }
  .bar-tab .tab-item.active, .bar-tab .tab-item:active {
    color: #0bd38a;
  }
</style>
<script charset="UTF-8">
  export default{
     computed:{

      },
    mounted () {

    },
    data () {
      return {

      }
    },
    components: {

    },
    methods: {

    }
  }
</script>
