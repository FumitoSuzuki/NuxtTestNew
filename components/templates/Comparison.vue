<template>
  <section class="comparison">
    <div class="header bg-primary">
      <OrganismHeaderBottomImgT1>
        <template #title>
          <slot name="headerTitle" />
        </template>
        <template #bottomImg>
          <slot name="headerBottomImg" />
        </template>
      </OrganismHeaderBottomImgT1>
      <slot name="header" />
    </div>
    <div class="comparison-body">
      <slot name="comparison" />
    </div>
  </section>
</template>

<style scoped>
.header {
  min-height: 50vh;
}
.header >>> .title,
.header >>> .bottom-img {
  min-height: 25vh;
}
.comparison-body >>> .container {
  min-height: 50vh;
}
</style>
