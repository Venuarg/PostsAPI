<template>
  <form @submit.prevent>
    <h4 style="color: #2c3e50">Create post</h4>

    <CommonInput
        v-model="post.title"
        type="text"
        placeholder="Name"/>

    <CommonInput
        v-model="post.body"
        type="text"
        placeholder="Body" />

    <CommonButton style="color: #2c3e50"  @click="createPost">Create</CommonButton>
  </form>
</template>

<script lang="ts">
import CommonInput from "@/components/CommonInput.vue";
import CommonButton from "@/components/CommonButton.vue";
import {defineComponent} from "vue";
import {RawPost} from "@/types";

interface Data {
    post: RawPost
}

export default defineComponent({
    components: {CommonButton, CommonInput},

    data(): Data {
    return {
      post: {
        title: '',
        body: ''
      }
    }
  },

  methods: {
    createPost () {
      this.$emit('create', this.post)
      this.post = {
        title: '',
        body: ''
      }
    }
  }
})
</script>

<style scoped>
form {
    display: flex;
    flex-direction: column;
}
</style>