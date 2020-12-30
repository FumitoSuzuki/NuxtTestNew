<template>
  <div class="comparison">
    <h3 class="title">
      <b-badge pill variant="primary">{{ item.title }}</b-badge>
    </h3>
    <p class="price">
      <span>{{ item.price }}</span>
      point
    </p>
    <NuxtContent :document="item" />
  </div>
</template>

<script>
export default {
  props: {
    item: { type: Object, default: () => {} },
  },
}
</script>

<style scoped>
.comparison .title > * {
  font-size: 1rem;
}
.comparison >>> .price {
  font-size: 1.5rem;
  font-weight: 700;
}
.comparison >>> .price span {
  font-size: 2.5rem;
}
.comparison >>> .nuxt-content ul {
  padding-left: 0;
  list-style: none;
}
.comparison >>> .nuxt-content li {
  border-bottom: 1px solid;
}
.comparison >>> .nuxt-content p {
  text-align: left;
}
.comparison >>> .nuxt-content blockquote {
  display: flex;
}
.comparison >>> .nuxt-content blockquote::before {
  content: '※';
  margin-right: 0.5em;
}
.comparison >>> .nuxt-content *:last-child {
  margin-bottom: 0;
}
</style>
