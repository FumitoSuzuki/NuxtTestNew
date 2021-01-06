<template>
  <article v-html="renderMd" />
</template>

<script>
import Prism from '~/plugins/prism'
export default {
  props: {
    md: { type: String, default: '' },
  },
  computed: {
    renderMd() {
      return this.$md.render(this.md)
    },
  },
  mounted() {
    Prism.highlightAll()
  },
}
</script>
