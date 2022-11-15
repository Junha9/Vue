<template>
  <div @click="goDetail(article.id)">
    <p> Article No.{{ article.id }} </p>
    <p> Title : {{ article.title }} </p>
    <hr>
  </div>
</template>

<script>
export default {
  name: 'ArticleItem',
  props: {
    article: Object,
  },
  methods: {
    goDetail(id) {
      this.$router.push({ name:'detail', params: {id} })
    },
  },
}

</script>