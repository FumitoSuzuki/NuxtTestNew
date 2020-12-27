<template>
  <section class="character">
    <div class="leadcopy">
      <OrganismColumnMd1CenterT1>
        <template #leadcopy>
          <slot name="leadcopy" />
        </template>
      </OrganismColumnMd1CenterT1>
    </div>
    <div class="characters">
      <slot name="characters" />
    </div>
  </section>
</template>

<style scoped>
.leadcopy {
  background-color: #e9ecef;
}
.leadcopy .container {
  min-height: 60vh;
}
.characters .container {
  min-height: 40vh;
}
</style>
