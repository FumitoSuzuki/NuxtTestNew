<template>
  <div
    class="fixed-switch-color-box"
    :class="{ active: isActive }"
    :style="getStyle"
  >
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    color: { type: String, default: 'white' },
    root: { type: Boolean, default: false },
  },
  data() {
    return {
      collapse: 'nav-collapse',
      active: false,
      showed: false,
    }
  },
  computed: {
    isActive() {
      if (this.showed) return this.active
      const windowScroll = this.$window.pageYOffset
      const parentScroll = this.$parent.scroll
      let isJustShown = false
      if (windowScroll || parentScroll) isJustShown = true
      this.setActive(isJustShown)
      return this.active
    },
    getStyle() {
      const style = {}
      if (this.color) style['--color'] = this.color
      return style
    },
  },
  mounted() {
    this.$root.$on('bv::collapse::state', (collapseId, isJustShown) => {
      if (collapseId === this.collapse) {
        this.setActive(isJustShown)
        this.setShowed(isJustShown)
      }
    })
  },
  methods: {
    setActive(isJustShown) {
      this.active = isJustShown
    },
    setShowed(isJustShown) {
      this.showed = isJustShown
    },
  },
}
</script>

<style scoped>
.fixed-switch-color-box {
  background-color: none;
  transition: background-color 0.2s linear;
  width: 100vw;
  z-index: 1030;
  position: fixed;
  top: 0;
  left: 0;
}
.fixed-switch-color-box.active {
  --color: white;
  background-color: var(--color);
  transition: background-color 0.2s linear;
}
</style>
