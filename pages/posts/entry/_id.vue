<template>
  <div id="main">
    <TheScrollContainer>
      <header class="bg-primary text-center py-5">
        <OrganismColumnCenterT1>
          <h1 class="m-5">{{ entry(id).title }}</h1>
        </OrganismColumnCenterT1>
        <OrganismColumnCenterT1>
          <b-badge
            v-for="(tag, key) in entry(id).tags"
            :key="key"
            variant="light"
            class="m-1 px-2"
          >
            # {{ tag }}
          </b-badge>
        </OrganismColumnCenterT1>
      </header>

      <section id="content" class="py-5">
        <OrganismColumnCenterT1>
          <TheMarkdown :md="entry(id).markup" />
        </OrganismColumnCenterT1>
      </section>

      <!-- this is header nav area -->
      <!-- Be sure to write it in "<TheScrollContainer>" -->
      <TheFixedSwitchColorBox color="var(--primary)">
        <b-breadcrumb class="bg-transparent m-3 p-0">
          <li><b-icon icon="chevron-left" font-scale="１" />&nbsp;</li>
          <b-breadcrumb-item to="/">Top</b-breadcrumb-item>
          <b-breadcrumb-item to="/posts/">Blog Posts</b-breadcrumb-item>
        </b-breadcrumb>
      </TheFixedSwitchColorBox>
      <!-- this is header nav area -->
    </TheScrollContainer>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  async asyncData({ store, params }) {
    const id = await params.id
    return { id }
  },
  computed: {
    ...mapGetters('contentful', ['entry']),
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
