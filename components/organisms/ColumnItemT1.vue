<template>
  <b-container class="column-item">
    <TheAlignRowItems :target="align">
      <b-row align-v="center" v-bind="columns" :no-gutters="noGutters">
        <b-col
          v-for="(item, key) in items"
          :key="key"
          :class="marginClass(key)"
        >
          <slot :props="item">
            {{ item.title }}
          </slot>
        </b-col>
      </b-row>
    </TheAlignRowItems>
  </b-container>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default: () => [],
    },
    cols: { type: String, default: '1' },
    sm: { type: String, default: '' },
    md: { type: String, default: '3' },
    lg: { type: String, default: '' },
    xl: { type: String, default: '' },
    margin: { type: String, default: '3' },
    align: { type: Array, default: () => ['title', 'text'] },
    noGutters: { type: Boolean, default: false },
  },
  computed: {
    columns() {
      const columns = { cols: this.cols }
      if (this.sm) columns['cols-sm'] = this.sm
      if (this.md) columns['cols-md'] = this.md
      if (this.lg) columns['cols-lg'] = this.lg
      if (this.xl) columns['cols-xl'] = this.xl
      return columns
    },
  },
  methods: {
    marginClass(key) {
      const total = this.items.length
      const padding = []
      if (total - this.cols > key) padding.push(`mb-${this.margin}`)
      if (this.sm) padding.push(`mb-sm-${this.mkMargin(this.sm, total, key)}`)
      if (this.md) padding.push(`mb-md-${this.mkMargin(this.md, total, key)}`)
      if (this.lg) padding.push(`mb-lg-${this.mkMargin(this.lg, total, key)}`)
      if (this.xl) padding.push(`mb-xl-${this.mkMargin(this.xl, total, key)}`)
      return padding
    },
    mkMargin(cols, total, key) {
      return Math.ceil(total / cols) * cols - cols > key ? this.margin : '0'
    },
  },
}
</script>

<style scoped>
.column-item {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
