<template>
  <b-form-select v-model="selectFirst" :options="options" />
</template>

<script>
export default {
  data() {
    return {
      selected: 0,
      options: [
        { value: 0, text: 'Please select.' },
        { value: 'first', text: 'This is first item.' },
        { value: 'second', text: 'This is second item.' },
        { value: 'third', text: 'This is third item.' },
        { value: 'fourth', text: 'This is fourth item.' },
      ],
    }
  },
  computed: {
    selectFirst: {
      get() {
        return this.selected
      },
      set(newValue) {
        const selected = newValue
        this.selected = selected
        this.$emit('change', selected)
      },
    },
  },
}
</script>
