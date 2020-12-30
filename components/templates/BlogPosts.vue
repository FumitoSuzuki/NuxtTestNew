<template>
  <section class="blog-posts">
    <div class="header">
      <OrganismColumnCenterT1>
        <h2>Comparison with Other Frameworks</h2>
      </OrganismColumnCenterT1>
    </div>
    <div class="posts">
      <OrganismColumnItemT1 :items="posts" :md="3">
        <template v-slot="item">
          <MoleculeArticleCardT1 :item="item.props" />
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
    posts: { type: Array, default: () => [] },
  },
}
</script>

<style scoped>
.blog-posts {
  background-color: #eee;
  /* min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center; */
}
.header >>> .container {
  text-align: center;
  /* min-height: 25vh; */
}
.body >>> .container {
  /* min-height: 75vh; */
}
</style>
