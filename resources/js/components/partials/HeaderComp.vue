<template>
  <div>
    <header>
      <nav>
        <ul>
          <li>
            <router-link :to="{name: 'home'}">Home</router-link>
          </li>
          <li>
            <router-link :to="{name: 'blog'}">Blog</router-link>
          </li>
          <li>
            <router-link :to="{name: 'about'}">About</router-link>
          </li>
          <li>
            <router-link :to="{name: 'contacts'}">Contatti</router-link>
          </li>
        </ul>
      </nav>
    </header>
  </div>
</template>

<script>
export default {
  name: 'HeaderComp'
}
</script>

<style lang="scss" scoped>
header{
  background-color: brown;
  height: 60px;
  padding: 20px;
  //margin-bottom: 20px;
  ul{
    list-style: none;
    text-align: center;
    li{
      display: inline-block;
      a{
        color: white;
        text-decoration: none;
        margin: 0 10px;
        &:hover{
          text-decoration: underline;
        }
        &.active{
          color: yellow;
        }
      }
    }
  }
}
</style>