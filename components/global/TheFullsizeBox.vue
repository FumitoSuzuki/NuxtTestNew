<template>
  <div class="fullsize-box" v-bind="boxHeight">
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    vh: {
      type: String,
      default: '100',
    },
  },
  data() {
    return {
      message: 'Hello Vue!',
      screenWidth: 0,
      screenHeight: 0,
      innerHeight: 0,
      elementHeight: 0,
      childHeight: 0,
      childOffset: 0,
      overflow: false,
    }
  },
  computed: {
    vhRatio() {
      const sh = this.screenHeight
      const ih = this.innerHeight
      return ih / sh
    },
    adjustment() {
      return (this.screenHeight * this.vhRatio * this.vh) / 100
    },
    boxHeight() {
      const style = {}
      style['--boxHeight'] = this.overflow
        ? 'auto'
        : String(this.adjustment) + 'px'
      return { style }
    },
  },
  mounted() {
    this.setHeight()
    this.setOffset() // Execute only when loading for the first time.
    this.controlFlow()
    window.addEventListener('resize', this.setHeight)
    window.addEventListener('resize', this.controlFlow)
  },
  destroyed() {
    window.removeEventListener('resize', this.setHeight)
    window.removeEventListener('resize', this.controlFlow)
  },
  methods: {
    isNotAmplifier() {
      const oldX = this.screenWidth
      const newX = window.innerWidth
      this.screenWidth = newX
      return Boolean(oldX === newX)
    },
    setScreenHeight() {
      this.screenHeight = window.parent.screen.height
    },
    setInnerHeight() {
      this.innerHeight = window.innerHeight
    },
    setElementHeight() {
      this.elementHeight = this.$el.clientHeight
    },
    setChildHeight() {
      const elems = this.$el.children
      this.childHeight = 0
      for (let i = 0; i < elems.length; i++) {
        this.childHeight += elems[i].clientHeight
      }
    },
    setHeight() {
      if (this.isNotAmplifier()) return
      this.setScreenHeight()
      this.setInnerHeight()
      this.setElementHeight()
      this.setChildHeight()
    },
    setOffset() {
      const eh = this.elementHeight
      const ch = this.childHeight
      this.childOffset = eh - ch
    },
    controlFlow() {
      const co = this.childOffset
      const ch = this.childHeight
      const ah = this.adjustment
      this.overflow = Boolean(co + ch >= ah)
    },
  },
}
</script>

<style scoped>
.fullsize-box {
  --boxHeight: auto;
  height: var(--boxHeight);
}
</style>
