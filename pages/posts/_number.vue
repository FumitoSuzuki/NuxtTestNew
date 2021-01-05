<template>
  <OrganismColumnItemT1 :items="onThisPage()">
    <template v-slot="item">
      <MoleculeCardArticleT1 :item="item.props" />
    </template>
  </OrganismColumnItemT1>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  async asyncData({ store, params }) {
    const pageNum = params.number || 1
    await store.commit('contentful/pageNumber', pageNum)
  },
  computed: {
    ...mapGetters('contentful', ['onThisPage']),
  },
}
</script>
