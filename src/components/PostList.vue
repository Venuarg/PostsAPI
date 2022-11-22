<template>
  <div v-if="posts.length > 0">
    <transition-group name="post-list">
      <PostItem
          v-for="post in posts"
          :post="post"
          :key="post.id"
          @remove="$emit('remove', post)"
      />
    </transition-group>
  </div>
  <div v-else>
    <h2 style="color: red">Post list is empty.</h2>
  </div>
</template>

<script lang="ts">
import PostItem from "@/components/PostItem.vue";
import {defineComponent, PropType} from "vue";
import {Post} from "@/types";

export default defineComponent({
    components: {PostItem},
    props: {
    posts: {
      type: Array as PropType<Post[]>,
      required: true,
    }
  }
})
</script>

<style scoped>

.post-list-enter-active,
.post-list-leave-active {
    transition: all 0.4s ease;
}
.post-list-enter-from,
.post-list-leave-to {
    opacity: 0;
    transform: translateX(130px);
}

</style>