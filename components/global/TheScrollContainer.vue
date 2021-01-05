<template>
  <div class="scroll-container" :style="getStyle" @scroll="setScroll">
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    padding: { type: String, default: '' },
  },
  data() {
    return { scroll: 0 }
  },
  computed: {
    getStyle() {
      const style = {}
      if (this.padding) style['--padding'] = this.padding
      return style
    },
  },
  methods: {
    setScroll(e) {
      this.scroll = e.target.scrollTop
    },
  },
}
</script>

<style scoped>
.scroll-container {
  --padding: 3rem;
  height: 100vh;
  overflow: scroll;
  scroll-snap-type: y proximity;
  scroll-padding-top: var(--padding);
}
</style>
