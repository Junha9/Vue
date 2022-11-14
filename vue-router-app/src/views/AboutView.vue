<template>
  <div class="about">
    <h1>This is an about page</h1>
    <input type="text"
    @keyup.enter="goToHell"
    v-model="inputData"
    >
  </div>
</template>


<script>

export default {
  name: 'AboutView',
  data() {
    return {
      inputData : null,
    }
  },
  methods : {
    goToHell() {
      this.$router.push({ name:'hello', params: { userName: this.inputData } })
    },
  },
}

</script>