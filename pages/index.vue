<template>
  <div id="main">
    <TemplateIntroduction class="scroll-snap-start">
      <template #body>
        <h1>Hello VUE JS</h1>
      </template>

      <template #footer>
        <Logo :width="60" :height="60" />
      </template>
    </TemplateIntroduction>

    <TemplateCharacter class="scroll-snap-start">
      <template #leadcopy>
        <MoleculeTextMdCenterT1 :content="leadcopy" />
      </template>

      <template #characters>
        <OrganismColumnMd3T1 :items="characters" class="py-5" />
      </template>
    </TemplateCharacter>

    <TemplateComparison class="scroll-snap-start">
      <template #headerTitle>
        <h2 class="py-5">Comparison with Other Frameworks</h2>
      </template>

      <template #headerBottomImg>
        <b-img
          src="/image/img_pcsp.svg"
          class="w-100"
          style="position: relative; left: 15%"
        />
      </template>

      <template #comparison>
        <OrganismComparisonColumnMd3T1 :items="plantable" class="py-5" />
      </template>
    </TemplateComparison>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const leadcopy = await $content('index/leadcopy').fetch()
    const characters = await $content('index/characters').sortBy('slug').fetch()
    const plantable = await $content('index/plantable').sortBy('slug').fetch()
    return {
      leadcopy,
      characters,
      plantable,
    }
  },
}
</script>
