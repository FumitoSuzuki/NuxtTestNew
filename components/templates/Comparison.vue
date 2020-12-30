<template>
  <section class="comparison">
    <div class="header bg-primary">
      <OrganismHeaderBottomImgT1 cols="8" md="4">
        <template #title>
          <h2>Comparison with Other Frameworks</h2>
        </template>
        <template #image>
          <b-img
            src="/image/img_pcsp.svg"
            style="position: relative; left: 15%"
          />
        </template>
      </OrganismHeaderBottomImgT1>
    </div>
    <div class="comparison-items text-center">
      <OrganismColumnItemT1 :items="comparison">
        <template v-slot="item">
          <MoleculeComparisonT1 :item="item.props" />
        </template>
      </OrganismColumnItemT1>
      <OrganismColumnCenterT1 md="7">
        <b-button
          block
          to="/posts/"
          variant="primary"
          v-text="String('Lean More')"
        />
      </OrganismColumnCenterT1>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    comparison: { type: Array, default: () => [] },
  },
}
</script>

<style scoped>
.header {
  min-height: 50vh;
}
.header >>> .title,
.header >>> .bottom-img {
  min-height: 25vh;
}
.comparison-items {
  min-height: 50vh;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
}
</style>
