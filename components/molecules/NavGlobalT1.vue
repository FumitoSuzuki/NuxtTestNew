<template>
  <b-navbar class="navi-global" toggleable="lg">
    <b-navbar-brand :href="root">
      <slot name="brand">
        <p class="m-0">{{ brand }}</p>
      </slot>
    </b-navbar-brand>
    <b-navbar-toggle target="nav-collapse" />
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item
          v-for="(item, key) in items"
          :key="key"
          :to="`${item.link}`"
        >
          {{ item.name }}
        </b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  props: {
    root: { type: String, default: '/' },
    brand: { type: String, default: 'Transpigeon' },
    items: {
      type: Array,
      default: () => [
        { name: 'Blog posts', link: '/posts/' },
        { name: 'Production', link: '/production-support/' },
      ],
    },
  },
}
</script>

<style scoped>
.navbar-toggler {
  font-size: 1rem;
}
</style>
