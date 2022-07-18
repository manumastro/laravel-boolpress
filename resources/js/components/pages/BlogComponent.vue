<template>
  <div class="container"> 
    <LoaderComp v-if="!posts"/>

    <div class="post-container" v-else>
      <h1>I miei post</h1>
    <PostItem
      v-for="post in posts" :key="post.id + post"
      :post="post" 
    />
    <button 
      @click="getApi(pagination.current - 1)"
      :disabled ="pagination.current === 1">
        <<
    </button>

    <button
      v-for="i in pagination.last" :key="i + pagination.last"
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
    

    <SideBarComp 
      :categories="categories"
      :tags="tags" 
      @searchPostsByCategory="searchPostsByCategory"
      @searchPostsByTag="searchPostsByTag"
      @showAllPosts="getApi(1)"
    />

  </div>
</template>

<script>
import LoaderComp from '../partials/LoaderComp.vue';
import PostItem from '../partials/PostItem.vue';
import SideBarComp from '../partials/SideBarComp.vue'
import {apiUrl} from '../../data/config'

export default {
  name: 'BlogComponent',
  components: {
    PostItem,
    LoaderComp,
    SideBarComp
  },
  data(){
    return{
      apiUrl,
      posts: null,
      pagination: {
        current:null,
        last:null,
      },
      categories: [],
      tags: []
    }
  },
  mounted(){
    this.getApi(1);
  },
  methods:{
    getApi(page){
      this.posts = null;
      axios.get(this.apiUrl + '?page=' + page)
      .then(res => {
        this.posts = res.data.posts.data;
        this.pagination = {
          current: res.data.posts.current_page,
          last: res.data.posts.last_page
        }
        this.categories = res.data.categories;
        this.tags = res.data.tags;
      })
    },
    searchPostsByCategory(slug_category){
      //console.log(slug_category);
      axios.get(this.apiUrl + '/post-category/' + slug_category)
      .then(res => {
        this.posts = res.data.posts;
      })
    },
    searchPostsByTag(slug_tag){
      //console.log(slug_tag);
      axios.get(this.apiUrl + '/post-tag/' + slug_tag)
      .then(res => {
        this.posts = res.data.posts;
      })
    },
  }
}
</script>

<style lang="scss" scoped>
.container{
  display: flex;
}
.post-container{
  flex-basis: 70%;
  h1{
    margin-bottom: 20px;
  }
  button{
    padding: 6px;
    margin-right: 3px;
  }
}
</style>