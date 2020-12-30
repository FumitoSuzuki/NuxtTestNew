<template>
  <div class="character">
    <div class="icon mb-3 text-center">
      <b-icon :icon="item.icon" font-scale="3" />
    </div>
    <div class="title mb-3 text-center">
      <h3 class="title">{{ item.title }}</h3>
    </div>
    <div class="body">
      <nuxt-content :document="item" class="text-left" />
    </div>
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
.title {
  font-size: 1rem;
  font-weight: 700;
  color: var(--primary);
}
.character >>> .nuxt-content p {
  margin-bottom: auto;
}
</style>
