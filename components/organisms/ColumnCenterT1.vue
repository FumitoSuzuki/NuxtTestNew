<template>
  <b-container class="column-center">
    <b-row align-v="center" align-h="center">
      <b-col v-bind="columns">
        <slot />
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
.column-center {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
