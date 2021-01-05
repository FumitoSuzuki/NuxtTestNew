<template>
  <b-container class="header-bottom-img">
    <b-row align-v="center" class="title" :style="getTitleHeight">
      <b-col class="text-center">
        <slot name="title" />
      </b-col>
    </b-row>
    <b-row align-v="end" align-h="center" class="image" :style="getImageHeight">
      <b-col v-bind="columns" class="imgColumn">
        <slot name="image" />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  props: {
    cols: { type: String, default: '12' },
    sm: { type: String, default: '' },
    md: { type: String, default: '' },
    lg: { type: String, default: '' },
    xl: { type: String, default: '' },
    height: { type: String, default: '50%' },
  },
  computed: {
    columns() {
      const columns = { cols: this.cols }
      if (this.sm) columns.sm = this.sm
      if (this.md) columns.md = this.md
      if (this.lg) columns.lg = this.lg
      if (this.xl) columns.xl = this.xl
      return columns
    },
    resetHeight() {
      const ih = parseInt(this.height)
      const th = 100 - ih
      return { title: th, image: ih }
    },
    getTitleHeight() {
      return { '--height': `${this.resetHeight.title}%` }
    },
    getImageHeight() {
      return { '--height': `${this.resetHeight.image}%` }
    },
  },
}
</script>

<style scoped>
.header-bottom-img >>> img {
  max-width: 100%;
  height: inherit;
}
.title {
  --height: 50%;
  min-height: var(--height);
}
.image {
  --height: 50%;
  min-height: var(--height);
}
</style>
