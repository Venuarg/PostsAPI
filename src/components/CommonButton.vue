<template>
  <button :class="computedClass">
    <slot></slot>
  </button>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
    name: "CommonButton",
    props: {
        type: String
    },
    computed: {
        computedClass () {
            return {
                btn: true,
                button__open: this.type === 'open',
                button__danger: this.type === 'danger'
            }
        }
    }
})
</script>

<style scoped>
button {
    align-self: flex-end;
    padding: 10px 15px;
    margin-top: 5px;
    background: none;
    border: 0.5px solid #949EA4FF;
    border-radius: 15px;
    cursor: pointer;
    color: #F7E2DEFF;

    transition: background .3s;
}

.button__open:hover {
    background: seagreen;
}

.button__danger:hover {
    background: indianred;
}
</style>