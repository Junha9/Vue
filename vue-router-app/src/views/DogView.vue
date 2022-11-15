<template>
  <div>
    <p v-if="!imgSrc"> {{ message }} </p>
    <img v-if="imgSrc" :src="imgSrc" alt=""> <br>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'DogView',
  data() {
    return {
      imgSrc: null,
      message : "Loading...",
    }
  },
  methods: {
    getDogImage() {
      const breed = this.$route.params.breed
      const dogImageSerachURL=`https://dog.ceo/api/breed/${breed}/images/random`
      axios ({
        method: 'get',
        url: dogImageSerachURL
      })
      .then((response) => {
        const imgSrc = response.data.message
        this.imgSrc = imgSrc
      })
      .catch((error) => {
        // this.message = `${this.$route.params.breed} is not valid breed`
        this.$router.push('/404')
        console.log(error)
      })
      }
  },
  created() {
    this.getDogImage()
  }
}
</script>