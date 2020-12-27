<template>
  <span>
    <slot></slot>
  </span>
</template>

<script>
export default {
  props: {
    target: {
      type: Array,
      default: () => [],
    },
    trigger: {
      type: Array,
      default: () => [],
    },
  },
  watch: {
    trigger: {
      handler(val) {
        this.resetHeight()
      },
      deep: true,
    },
  },
  mounted() {
    this.setStyleHeight()
    window.addEventListener('resize', this.resetHeight)
  },
  methods: {
    setStyleHeight() {
      const length = this.target.length
      for (let i = 0; i < length; i++) {
        const element = this.$el.getElementsByClassName(this.target[i])
        const array = []
        for (let j = 0; j < element.length; j++) {
          array.push(element[j].clientHeight)
        }
        const max = Math.max.apply(null, array)
        for (let j = 0; j < element.length; j++) {
          element[j].style.minHeight = max + 'px'
        }
      }
    },
    resetHeight() {
      const length = this.target.length
      for (let i = 0; i < length; i++) {
        const element = this.$el.getElementsByClassName(this.target[i])
        for (let j = 0; j < element.length; j++) {
          element[j].style.minHeight = 'auto'
        }
      }
      this.setStyleHeight()
    },
  },
}
</script>
