<template>
  <select v-model="modelValue" @change="changeOption">
    <option disabled value="">Select Post</option>
    <option
        v-for="option in options"
        :key="option.value"
        :value="option.value"
    >
      {{ option.name }}
    </option>
  </select>
</template>

<script>
import {defineComponent} from "vue";

export default defineComponent({
    name: "CommonSelected.vue",

  props: {
    options: {
      type: Array,
      default: () => []
    }
  },

    data(){
      return {
        modelValue: {
          type: String
        }
      }
    },

    methods: {
        changeOption (event) {
            this.$emit('update: modelValue', event.target.value)
        }
    }
})
</script>

<style scoped>

</style>