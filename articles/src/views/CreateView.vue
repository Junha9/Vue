<template>
  <div>
    <h1> Wrtie a new article </h1>
    <form @submit.prevent="createArticle">
      <label for="title">Title : </label>
      <input type="text" id="title" v-model.trim="title"><br>
      <label for="content">content : </label>
      <textarea 
       id="content" cols="30" rows="10"
       v-model.trim="content"
       ></textarea><br>
       <input type="submit">
    </form>
    <router-link :to="{ name: 'index'}">Back</router-link>
  </div>
</template>

<script>
export default {
  name: 'CreateView',
  data() {
    return {
      title: null,
      content: null,
    }
  },
  methods: {
    createArticle() {
      const title = this.title
      const content = this.content
      if (!title) {
        alert('Write a Title!!')
      } else if (!content) {
        alert('Write a content!!')
      } else {
      const payload = {
        title, content
      }
      this.$store.dispatch('createArticle', payload)
      this.$router.push({name:'index'})
      }
    }
  }
}

</script>