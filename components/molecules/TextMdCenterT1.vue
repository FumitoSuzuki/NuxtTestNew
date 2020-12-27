<template>
  <div class="text-md-center">
    <TheResponsiveBreak>
      <nuxt-content :document="content" />
    </TheResponsiveBreak>
  </div>
</template>

<script>
export default {
  props: {
    content: {
      type: Object,
      default: () => {},
    },
  },
}
</script>

<style scoped>
.text-md-center >>> h1,
.text-md-center >>> h2,
.text-md-center >>> h3,
.text-md-center >>> h4,
.text-md-center >>> h5,
.text-md-center >>> h6 {
  color: var(--primary);
  margin-bottom: 3rem;
}
.text-md-center >>> strong {
  color: var(--primary);
}
</style>
