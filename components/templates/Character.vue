<template>
  <section class="character">
    <div class="leadcopy">
      <OrganismColumnCenterT1>
        <MoleculeStyleFormatT1 class="text-md-center">
          <NuxtContent :document="leadcopy" class="" />
        </MoleculeStyleFormatT1>
      </OrganismColumnCenterT1>
    </div>
    <div class="characters">
      <OrganismColumnItemT1 :items="characters">
        <template v-slot="item">
          <MoleculeCharacterT1 :item="item.props" />
        </template>
      </OrganismColumnItemT1>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    leadcopy: { type: Object, default: () => {} },
    characters: { type: Array, default: () => [] },
  },
}
</script>

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
