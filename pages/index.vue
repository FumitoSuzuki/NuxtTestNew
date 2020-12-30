<template>
  <div id="main">
    <TemplateIntroduction />

    <TemplateCharacter v-bind="{ leadcopy, characters }" />

    <TemplateComparison v-bind="{ comparison }" />

    <TemplateBlogPosts v-bind="{ posts: onThisPage(3) }" />

    <TemplateInformation v-bind="{ procedure }" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  async asyncData({ $content, store }) {
    const leadcopy = await $content('index/leadcopy').fetch()
    const characters = await $content('index/characters').sortBy('slug').fetch()
    const comparison = await $content('index/comparison').sortBy('slug').fetch()
    const procedure = await $content('index/procedure').fetch()
    // const onThisPage = await store.getters['contentful/onThisPage']
    return { leadcopy, characters, comparison, procedure }
  },
  computed: {
    ...mapGetters('contentful', ['onThisPage']),
  },
}
</script>
