<template>
  <b-form-select v-model="selectSecond" :options="selectOptions" />
</template>

<script>
export default {
  props: {
    firstSelected: {
      default: '',
    },
  },
  data() {
    return {
      selected: 0,
      options: [
        {
          selecter: 'first',
          options: [
            { value: 0, text: 'Please select.' },
            { value: 'first', text: 'This is first-first item.' },
            { value: 'second', text: 'This is first-second item.' },
            { value: 'third', text: 'This is first-third item.' },
            { value: 'fourth', text: 'This is first-fourth item.' },
          ],
        },
        {
          selecter: 'second',
          options: [
            { value: 0, text: 'Please select.' },
            { value: 'first', text: 'This is second-first item.' },
            { value: 'second', text: 'This is second-second item.' },
            { value: 'third', text: 'This is second-third item.' },
            { value: 'fourth', text: 'This is second-fourth item.' },
          ],
        },
        {
          selecter: 'third',
          options: [
            { value: 0, text: 'Please select.' },
            { value: 'first', text: 'This is third-first item.' },
            { value: 'second', text: 'This is third-second item.' },
            { value: 'third', text: 'This is third-third item.' },
            { value: 'fourth', text: 'This is third-fourth item.' },
          ],
        },
        {
          selecter: 'fourth',
          options: [
            { value: 0, text: 'Please select.' },
            { value: 'first', text: 'This is fourth-first item.' },
            { value: 'second', text: 'This is fourth-second item.' },
            { value: 'third', text: 'This is fourth-third item.' },
            { value: 'fourth', text: 'This is fourth-fourth item.' },
          ],
        },
      ],
    }
  },
  computed: {
    selectSecond: {
      get() {
        return this.selected
      },
      set(newValue) {
        const selected = newValue
        this.selected = selected
        this.$emit('change', selected)
      },
    },
    selectOptions() {
      const selected = this.firstSelected
      if (!selected) {
        return [{ value: 0, text: 'Please select the item above.' }]
      }
      const options = this.options.find(
        (option) => option.selecter === selected
      )
      return options.options
    },
  },
  watch: {
    firstSelected: {
      handler() {
        this.selectSecond = 0
      },
    },
  },
}
</script>
