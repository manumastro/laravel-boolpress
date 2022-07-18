<template>
  <div>
    <div class="list">
      <h3>categorie</h3>
      <ul>
        <li 
          v-for="category in categories" 
          :key="`cat${category.id}`" 
          @click="$emit('searchPostsByCategory', category.slug)">
            {{category.name}}
        </li>
      </ul>
    </div>
    
    <div class="list">
      <h3>tag</h3>
      <ul>
        <li 
          v-for="tag in tags" 
          :key="`tag${tag.id}`" 
          @click="$emit('searchPostsByTag', tag.slug)">
            {{tag.name}}
        </li>
      </ul>
    </div>

    <div>
      <h4
      @click="$emit('showAllPosts')"
      >Vedi tutti i post</h4>
    </div>

  </div>
</template>

<script>
export default {
  name: 'SideBarComp',
  props: {
    categories: Array,
    tags: Array
  }
}
</script>

<style lang="scss" scoped>
.list{
  margin-bottom: 20px;
  h3{
    margin-bottom: 5px;
  }
  ul{
    list-style: none;
    li{
      cursor: pointer;
    }
  }
}
  h4{
    cursor: pointer;
    text-decoration: underline;
  }
</style>