<template>
  <div class="post">
    <h3>
      <router-link :to="{name: 'detail', params:{slug: post.slug} }">{{post.title}}</router-link>
    </h3>
    <h3>{{ formatDate }}</h3>
    <p>{{ shortContent }}</p>
  </div>
</template>

<script>
export default {
  name: 'PostItem',
  props: {
    post: Object 
  },
  computed:{
    shortContent(){
      return this.post.content.substr(0,50) + "..."
    },
    formatDate(){

      const d = new Date(this.post.updated_at);
      let day = d.getDay();
      let month = d.getMonth() + 1;
      const year = d.getFullYear();
      if(day < 10) day = '0' + day;
      if(month < 10) month = '0' + month;
      return `${day}/${month}/${year}`

    }
  }
}
</script>

<style lang="scss" scoped>
.post{
  margin-bottom: 20px;
}
</style>