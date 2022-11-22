<template>
  <nav-bar></nav-bar>
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar"
export default {
  components: { NavBar }
}
</script>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.app {
    font-family: 'Inter', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin-top: 60px;
}
body {
    background: rgb(25,58,135);
    background: linear-gradient(90deg, hsl(241, 1%, 33%) 0%, hsl(198, 75%, 14%) 100%) fixed;
}

h1 {
    color: hsl(8, 60%, 92%);
    font-size: 100px;
    font-weight: 300;
}
</style>
