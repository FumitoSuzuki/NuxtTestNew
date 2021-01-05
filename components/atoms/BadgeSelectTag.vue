<template>
  <span class="atom">
    <b-badge
      v-for="(item, key) in selectTags"
      :key="key"
      variant="light"
      class="m-1 px-2"
      @click="delTag(item.slug)"
    >
      # {{ item.name }}
    </b-badge>
  </span>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
  computed: {
    ...mapGetters('contentful', ['selectTags']),
  },
  methods: {
    ...mapMutations('contentful', ['delTag']),
  },
}
</script>

<style scoped>
.badge {
  cursor: pointer;
}
</style>
