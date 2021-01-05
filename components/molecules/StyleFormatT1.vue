<template>
  <TheResponsiveBreak class="style-format">
    <slot />
  </TheResponsiveBreak>
</template>

<style scoped>
.style-format >>> h1,
.style-format >>> h2,
.style-format >>> h3,
.style-format >>> h4,
.style-format >>> h5,
.style-format >>> h6 {
  color: var(--primary);
  margin-bottom: 3rem;
}
.style-format >>> strong {
  color: var(--primary);
}
.style-format >>> p:last-child {
  margin-bottom: 0;
}
</style>
