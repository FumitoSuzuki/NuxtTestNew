<template>
  <TheResponsiveBreak class="format">
    <slot />
  </TheResponsiveBreak>
</template>

<style scoped>
.format >>> h1,
.format >>> h2,
.format >>> h3,
.format >>> h4,
.format >>> h5,
.format >>> h6 {
  color: var(--primary);
  margin-bottom: 3rem;
}
.format >>> strong {
  color: var(--primary);
}
.format >>> p:last-child {
  margin-bottom: 0;
}
</style>
