<template>
  <b-container class="header-bottom-img">
    <b-row align-v="center" class="title">
      <b-col class="text-center">
        <slot name="title" />
      </b-col>
    </b-row>
    <b-row align-v="end" align-h="center" class="image">
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
  },
}
</script>

<style scoped>
.header-bottom-img >>> img {
  max-width: 100%;
  height: inherit;
}
.title {
  min-height: 25vh;
}
.image {
  min-height: 25vh;
}
</style>
