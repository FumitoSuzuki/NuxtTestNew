<template>
  <div id="#main">
    <TheScrollContainer>
      <header class="bg-primary text-center py-5">
        <OrganismColumnCenterT1>
          <h1 class="m-5">Blog Posts</h1>
        </OrganismColumnCenterT1>
        <OrganismColumnCenterT1>
          <AtomBadgeSelectTag />
          <b-badge
            v-b-modal.select-tags
            variant="light"
            class="m-1 px-2"
            v-text="'+'"
          />
          <MoleculeModalSelectTags />
        </OrganismColumnCenterT1>
      </header>

      <section id="posts" class="py-5">
        <OrganismColumnItemT1 :items="onThisPage()">
          <template v-slot="item">
            <MoleculeCardArticleT1 :item="item.props" />
          </template>
        </OrganismColumnItemT1>
      </section>

      <TemplateInformation v-bind="{ procedure }" />

      <!-- this is header nav area -->
      <!-- Be sure to write it in "<TheScrollContainer>" -->
      <TheFixedSwitchColorBox color="var(--primary)">
        <b-breadcrumb class="bg-transparent m-3 p-0">
          <li><b-icon icon="chevron-left" font-scale="１" />&nbsp;</li>
          <b-breadcrumb-item to="/">Top</b-breadcrumb-item>
        </b-breadcrumb>
      </TheFixedSwitchColorBox>
      <!-- this is header nav area -->
    </TheScrollContainer>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
  async asyncData({ $content, store, params }) {
    const pageNum = params.number || 1
    await store.commit('contentful/pageNumber', pageNum)
    const procedure = await $content('index/procedure').fetch()
    return { procedure }
  },
  computed: {
    ...mapGetters('contentful', ['selectTags', 'onThisPage']),
  },
  methods: {
    ...mapMutations('contentful', ['delTag', 'addTag']),
  },
}
</script>

<style scoped>
header,
#information {
  scroll-snap-align: start;
}
.breadcrumb,
.breadcrumb a {
  color: white;
  font-size: 1rem;
}
</style>
