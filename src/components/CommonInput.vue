<template>
  <input :value='modelValue' @input="updateInput" class="input" type="text">
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
    name: "CommonInput",

    props: {
        modelValue : [String, Number]
    },

    methods: {
        updateInput (event: Event) {
            if(event.target instanceof HTMLInputElement) {
                this.$emit('update:modelValue', event.target.value)
            }
        }
    }
})
</script>

<style scoped>
.input {
    width: 100%;
    border: 1px solid teal;
    padding: 10px;
    margin-top: 15px;
    color: #2c3e50;
}
</style>