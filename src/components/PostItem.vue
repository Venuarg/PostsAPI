<template>
  <div class="post">
    <h3 style="color: lightblue; margin: 0 auto">Post #{{post.id}}</h3>
    <div style="color: lightskyblue"><strong>Name: </strong> {{post.title}}</div>
    <div><strong>Description: </strong>{{post.body}}</div>
    <CommonButton type='open' @click="$router.push(`/client/${post.id}`)">Open</CommonButton>
    <CommonButton type="danger" @click="$emit('remove', post)">Remove</CommonButton>
  </div>

</template>

<script lang="ts">
import CommonButton from "@/components/CommonButton.vue";
import {defineComponent, PropType} from "vue";
import {Post} from "@/types";

export default defineComponent({
    components: { CommonButton },
    props: {
        post: {
            type: Object as PropType<Post>,
            required: true
        }
    }
})
</script>

<style scoped>
.post {
    padding: 15px;
    border: 1px solid #949EA4FF;
    border-radius: 25px;
    margin-top: 15px;
    display: flex;
    flex-direction: column;
}
</style>