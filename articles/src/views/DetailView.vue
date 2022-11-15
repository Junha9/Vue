<template>
  <div>
    <h1>Detail</h1>
    <p>Article No.{{article?.id}}</p>
    <p>Title : {{article?.title}}</p>
    <p>Content : {{article?.content}}</p>
    <p>created : {{ articleCreatedAt }}</p>
    <button @click="deleteArticle">Delete</button><br>
    <router-link :to="{ name: 'index' }">Back</router-link>
  </div>
</template>

<script>
export default {
  name: 'DetailView',
  data () {
    return {
      article: null
    }
  },
  computed: {
    articles() {
      return this.$store.state.articles
    },
    articleCreatedAt() {
      const article = this.article
      const createdAt = new Date(article?.createdAt).toLocaleString()
      return createdAt
    }
  },
  methods : {
    getArticleById(id) {
      for (const article of this.articles) {
        if (article.id === Number(id)) {
          this.article = article
          break
        }
      }
      if (!this.article){
        this.$router.push({name: 'NotFound404'})
      }
    },
    deleteArticle() {
      this.$store.commit('DELETE_ARTICLE', this.article.id)
      this.$router.push({name:'index'})
    },
  },
  created() {
    this.getArticleById(this.$route.params.id)
  }
}

</script>