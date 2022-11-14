<template>
  <div>
    <h1> Hello, motherfucking {{ userName}} </h1>
  </div>
</template>

<script>
  export default {
    name: 'HelloView',
    data () {
      return {
        userName: this.$route.params.userName
      }
    },
  }

</script>

<style>

</style>