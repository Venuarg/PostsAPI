<template>
  <div class="app">
    <h1>Page with Posts</h1>
    <hr>
    <common-button @click="showDialog">Create new Post</common-button>

    <common-selected v-model="selectedSort" :options="sortOption"/>

    <common-dialog v-model:show="dialogVisible">
      <post-form @create="createPost"/>
    </common-dialog>

    <post-list @remove="removePost" :posts="computedPosts" v-if="!isPostsLoading"/>

    <div v-else>loader</div>

    <div class="page__wrapper">
      <div
          class="page"
          :class="{'current-page': page === pageNumber}"
          v-for="pageNumber in totalPage"
          :key="pageNumber"
          @click="changePage(pageNumber)"
      >{{pageNumber}}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import PostForm from "@/components/PostForm.vue";
import PostList from "@/components/PostList.vue";
import {Options, Post, RawPost} from '@/types'
import {defineComponent} from "vue";
import CommonDialog from "@/components/CommonDialog.vue";
import CommonButton from "@/components/CommonButton.vue";
import CommonSelected from "@/components/CommonSelected.vue"

interface Data {
    dialogVisible: boolean
    isPostsLoading: boolean
    selectedSort: 'title' | 'body' | ''
    sortOption: Options[]
}

export default defineComponent({
    name: 'App',
    components: {
        CommonSelected,
        CommonButton,
        CommonDialog,
        PostForm,
        PostList
    },

    data(): Data {
        return {
            dialogVisible: false,
            isPostsLoading: false,
            selectedSort: '',
            sortOption: [
                {value: 'title', name: 'by the name'},
                {value: 'body', name: 'by the description'}
            ]
        }
    },

    methods: {
        createPost (post: RawPost) {
            this.$store.state.posts.push({
                id: this.$store.state.posts.length + 1,
                ...post
            })
            this.dialogVisible = false
        },

        removePost (post: Post) {
            this.$store.state.posts = this.$store.state.posts.filter(p => p.id !== post.id)
        },

        showDialog () {
            this.dialogVisible = true
        },

        changePage (pageNumber: number) {
            this.$store.state.page = pageNumber
        },
    },

    computed: {
        computedPosts (): Post[]  {
            let arr = this.$store.state.posts

            if (this.selectedSort !== '') {
                const selectedSort = this.selectedSort
                arr.sort((a, b) => {
                    if (a[selectedSort] === b[selectedSort]) {
                        return 0
                    } else if (a[selectedSort] < b[selectedSort]) {
                        return -1
                    } else {
                        return 1
                    }
                })
            }
            return arr
        }
    },

    watch: {
        page () {
            this.$store.dispatch('fetchPosts')
        }
    },

    mounted() {
        this.$store.dispatch('fetchPosts')
    }
})
</script>

<style>
.app {
    color: #F7E2DEFF;
    max-width: 800px;
    margin: 0 auto;
}

.page__wrapper {
    display: flex;
    margin-top: 15px;
}
.page {
    border: 1px solid black;
    padding: 10px;
    cursor: pointer;
}

.current-page {
    border: 2px solid lightsalmon
}
</style>
