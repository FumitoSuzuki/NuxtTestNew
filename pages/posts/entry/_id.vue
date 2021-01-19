<template>
  <div id="main">
    <TheScrollContainer>
      <header class="bg-primary text-center py-5">
        <OrganismColumnCenterT1>
          <h1 class="m-5">{{ entry.title }}</h1>
        </OrganismColumnCenterT1>
        <OrganismColumnCenterT1>
          <b-badge
            v-for="(tag, key) in entry.tags"
            :key="key"
            variant="light"
            class="m-1 px-2"
          >
            # {{ tag }}
          </b-badge>
        </OrganismColumnCenterT1>
      </header>

      <section id="eyecatch" class="py-5">
        <OrganismColumnCenterT1>
          <b-img
            :src="entry.introduct.file.url"
            :alt="entry.introduct.title"
            fluid-grow
          />
        </OrganismColumnCenterT1>
      </section>

      <section id="content" class="pb-5">
        <OrganismColumnCenterT1>
          <div>
            <div class="mb-3">
              UpdatedAt: <AtomUtcToDate :utc="entry.updatedAt" />
            </div>
            <TheMarkdown :md="entry.markup" />
          </div>
        </OrganismColumnCenterT1>
      </section>

      <section id="relation" class="py-5" style="background: #eee">
        <OrganismColumnCenterT1 class="text-center mb-5">
          <h2>Related articles</h2>
        </OrganismColumnCenterT1>
        <OrganismColumnItemT1 :items="relation">
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
          <b-breadcrumb-item :to="`/posts/${pageNumber}`">
            Blog Posts
          </b-breadcrumb-item>
        </b-breadcrumb>
      </TheFixedSwitchColorBox>
      <!-- this is header nav area -->
    </TheScrollContainer>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  async asyncData({ store, params, $content }) {
    // Get various parameters.
    const id = await params.id
    const entry = await store.getters['contentful/entry']
    const tags = await entry(id).tags
    const procedure = await $content('index/procedure').fetch()
    // Commit defaults to store.
    await store.commit('relation/setLimit', 3)
    await store.commit('relation/setRelationSlugs', tags)
    return { entry: entry(id), procedure }
  },
  computed: {
    ...mapGetters('contentful', { getEntry: 'entry' }),
    ...mapGetters('relation', { relation: 'getRelationItemsFromSlugs' }),
    pageNumber() {
      return this.$store.state.contentful.pageNumber
    },
  },
}
</script>

<style scoped>
.breadcrumb,
.breadcrumb a {
  color: white;
  font-size: 1rem;
}
</style>
