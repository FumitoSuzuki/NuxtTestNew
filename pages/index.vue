<template>
  <div id="main">
    <TemplateIntroduction
      :content="introduction"
      bg-image="/image/bg_star.svg"
      bg-color="var(--secondary)"
      class="p-2 text-center text-white"
    >
      <template #footer>
        <Logo :width="60" :height="60" />
      </template>
    </TemplateIntroduction>

    <section id="characters">
      <!-- characters leadcopy section -->
      <div class="leadcopy py-5">
        <OrganismColumnCenterT1>
          <MoleculeStyleFormatT1 class="text-md-center">
            <NuxtContent :document="leadcopy" />
          </MoleculeStyleFormatT1>
        </OrganismColumnCenterT1>
      </div>
      <!-- characters leadcopy section -->
      <!-- characters items section -->
      <OrganismColumnItemT1 :items="characters" class="items py-5">
        <template v-slot="item">
          <MoleculeCharacterT1 :item="item.props" />
        </template>
      </OrganismColumnItemT1>
      <!-- characters items section -->
    </section>

    <section id="comparison">
      <!-- comparison header section -->
      <div class="header bg-primary">
        <OrganismHeaderBottomImgT1 cols="8" md="4">
          <template #title>
            <div class="py-5">
              <h2>Comparison with Other Frameworks</h2>
            </div>
          </template>
          <template #image>
            <b-img
              src="/image/img_pcsp.svg"
              style="position: relative; left: 15%"
            />
          </template>
        </OrganismHeaderBottomImgT1>
      </div>
      <!-- comparison header section -->
      <!-- comparison items section -->
      <div class="items text-center py-5">
        <!-- comparison items-body section -->
        <OrganismColumnItemT1 :items="comparison" class="body mb-5">
          <template v-slot="item">
            <MoleculeComparisonT1 :item="item.props" />
          </template>
        </OrganismColumnItemT1>
        <!-- comparison items-body section -->
        <!-- comparison items-footer section -->
        <OrganismColumnCenterT1 md="7" class="footer">
          <b-button
            block
            to="/production-support/"
            variant="primary"
            v-text="String('Lean More')"
          />
        </OrganismColumnCenterT1>
        <!-- comparison items-footer section -->
      </div>
      <!-- comparison items section -->
    </section>

    <section id="blog-posts" class="py-5">
      <!-- blog-posts header section -->
      <OrganismColumnCenterT1 class="header mb-5">
        <h2>Blog posts</h2>
      </OrganismColumnCenterT1>
      <!-- blog-posts header section -->
      <!-- blog-posts body section -->
      <OrganismColumnItemT1 :items="onThisPage(3)" md="3" class="body mb-5">
        <template v-slot="item">
          <MoleculeCardArticleT1 :item="item.props" />
        </template>
      </OrganismColumnItemT1>
      <!-- blog-posts body section -->
      <!-- blog-posts footer section -->
      <OrganismColumnCenterT1 md="7" class="footer">
        <b-button block to="/posts/" variant="primary">Lean More</b-button>
      </OrganismColumnCenterT1>
      <!-- blog-posts footer section -->
    </section>

    <TemplateInformation v-bind="{ procedure }" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  async asyncData({ $content, store }) {
    const introduction = await $content('index/introduction').fetch()
    const leadcopy = await $content('index/leadcopy').fetch()
    const characters = await $content('index/characters').sortBy('slug').fetch()
    const comparison = await $content('index/comparison').sortBy('slug').fetch()
    const procedure = await $content('index/procedure').fetch()
    await store.commit('contentful/pageNumber', 1)
    return { introduction, leadcopy, characters, comparison, procedure }
  },
  computed: {
    ...mapGetters('contentful', ['onThisPage']),
  },
}
</script>

<style scoped>
#introduction,
#characters,
#comparison,
#blog-posts,
#information {
  scroll-snap-align: start;
}
/*
 * characters section style from here
 */
#characters .leadcopy {
  background-color: #e9ecef;
}
#characters .leadcopy {
  min-height: 60vh;
}
#characters .items {
  min-height: 40vh;
}
#characters .leadcopy,
#characters .items {
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
}
/*
 * comparison section style from here
 */
#comparison .header >>> .title,
#comparison .header >>> .image {
  min-height: 25vh;
}
#comparison .items {
  min-height: 50vh;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
}
/*
 * blog-posts section style from here
 */
#blog-posts {
  background-color: #eee;
}
#blog-posts .header {
  text-align: center;
}
</style>
