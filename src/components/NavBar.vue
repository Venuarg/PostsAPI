<template>
  <div class="navbar">
    <div @click="$router.push('/')" style="cursor:pointer; color: #F7E2DEFF">MTR</div>
    <div class="navbar__buttons">
      <common-button @click="$router.push('/client')" style="margin-right: 15px">All Posts</common-button>
      <common-button @click="$router.push('/about')" style="margin-right: 15px">About Us</common-button>
      <common-button @click="$router.push('/composition') ">composition</common-button>
    </div>
  </div>
</template>

<script>
import CommonButton from "@/components/CommonButton";
export default {
  name: "NavBar.vue",
  components: { CommonButton }
}
</script>

<style scoped>
.navbar {
    height: 50px;
    display: flex;
    align-items: center;
    padding: 0 15px;
}

.navbar__buttons {
    margin-left: auto;
}
</style>