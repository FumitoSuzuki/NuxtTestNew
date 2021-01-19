<template>
  <span>
    <div
      ref="sticky"
      class="sticky-top"
      :class="isActive"
      :style="`--color: ${bgColor}`"
    >
      <slot />
    </div>
  </span>
</template>

<script>
export default {
  props: {
    bgColor: { type: String, default: 'gainsboro' },
  },
  data() {
    return { defaultOffset: 0, activeOffset: 0 }
  },
  computed: {
    isActive() {
      const def = this.defaultOffset
      const act = this.activeOffset
      const classObj = { active: Boolean(def + 20 < act) }
      return classObj
    },
  },
  mounted() {
    this.defaultOffset = this.$el.offsetTop
    window.addEventListener('scroll', this.setStickyOffset)
    window.addEventListener('resize', this.setStickyOffset)
  },
  destroyed() {
    window.removeEventListener('scroll', this.setStickyOffset)
    window.removeEventListener('resize', this.setStickyOffset)
  },
  methods: {
    setStickyOffset() {
      this.defaultOffset = this.$el.offsetTop || 0
      this.activeOffset = this.$refs.sticky.offsetTop || 0
    },
  },
}
</script>

<style scoped>
.sticky-top {
  background-color: none;
  transition: background-color 0.2s linear;
}
.sticky-top.active {
  --color: none;
  background-color: var(--color);
  transition: background-color 0.2s linear;
}
</style>
