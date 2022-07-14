<template>
  <div class="container post-container"> 
    <h1>I miei post</h1>
    <PostItem
      v-for="post in posts" :key="post.id"
      :post="post" 
    />
    <button 
      @click="getApi(pagination.current - 1)"
      :disabled ="pagination.current === 1">
        <<
    </button>

    <button
      v-for="i in pagination.last" :key="i"
      @click="getApi(i)"
      :disabled="pagination.current === i"
    >
      {{ i }}
    </button>

    <button 
      @click="getApi(pagination.current + 1)"
      :disabled ="pagination.current === pagination.last">
        >>
    </button>
    
    
  </div>
</template>

<script>

import PostItem from '../partials/PostItem.vue';

export default {
  name: 'BlogComponent',
  components: {
    PostItem
  },
  data(){
    return{
      apiUrl: '/api/posts',
      posts: null,
      pagination: {
        current:null,
        last:null,
      }
    }
  },
  mounted(){
    this.getApi(1);
  },
  methods:{
    getApi(page){
      axios.get(this.apiUrl + '?page=' + page)
      .then(res => {
        this.posts = res.data.data;
        this.pagination = {
          current: res.data.current_page,
          last: res.data.last_page
        }
        console.log(this.pagination);
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.post-container{
  h1{
    margin-bottom: 20px;
  }
  button{
    padding: 6px;
    margin-right: 3px;
  }
}
</style>