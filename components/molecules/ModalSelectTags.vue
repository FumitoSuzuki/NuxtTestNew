<template>
  <b-modal
    id="select-tags"
    button-size="sm"
    hide-header
    ok-only
    class="molecule"
    @ok="okSelectTag"
  >
    <b-button
      v-for="(item, key) in allTags"
      :key="key"
      :class="{ active: isSelected(item.slug) }"
      class="m-1"
      size="sm"
      variant="outline-primary"
      @click="switchTag(item.slug)"
    >
      # {{ item.name }}
    </b-button>
  </b-modal>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
  computed: {
    ...mapGetters('contentful', ['selectTags', 'allTags']),
  },
  methods: {
    ...mapMutations('contentful', ['delTag', 'addTag']),
    isSelected(slug) {
      return this.selectTags.some((item) => item.slug === slug)
    },
    switchTag(slug) {
      this.isSelected(slug) ? this.delTag(slug) : this.addTag(slug)
    },
    okSelectTag() {
      this.$nuxt.refresh()
      this.$nextTick(() => {
        this.$bvModal.hide('select-tags')
      })
    },
  },
}
</script>
