<template>
  <div class="container">
    <h1>{{ post.title }}</h1>
    <div class="tags">
      <span v-for="tag in post.tags" :key="tag.id">{{ tag.name }}</span>
    </div>
    <h3>{{ post.category.name }}</h3>
    <p>{{ post.content }}</p>
  </div>
</template>

<script>

import {apiUrl} from '../../data/config'

export default {
  name: 'PostDetail',
  data(){
    return{
      post: {
        title: '',
        content: '',
        category: '',
        tags: []
      },
      apiUrl
    }
  },
  mounted(){
    this.getApi()
  },
  methods:{
    getApi(){
      //console.log(this.$route.params.slug);
      axios.get(this.apiUrl + '/' + this.$route.params.slug)
      .then(res => {
        this.post = res.data

      })
    }
  }
}
</script>

<style lang="scss" scoped>
h1{
  margin-bottom: 10px;
}
h3{
  margin-bottom: 10px;
}
.tags{
  margin-bottom: 10px;
  span{
    background-color: cyan;
    border-radius: 10px;
    padding: 8px;
  }
}
</style>