<template>
  <div id="main">
    <TheScrollContainer>
      <header class="bg-light p-2">
        <TheFullsizeBox vh="33.3">
          <OrganismColumnCenterT1 class="text-center text-white h-100 py-5">
            <h1>Le menu</h1>
          </OrganismColumnCenterT1>
        </TheFullsizeBox>
      </header>

      <section id="favorit" class="py-5" style="min-height: 66.7vh">
        <OrganismColumnCenterT1>
          <h2 class="text-center mb-5">
            だから、MOLNODA。<br />
            100種のBOWLで「見つける。」
          </h2>
        </OrganismColumnCenterT1>
        <OrganismColumnItemT1 :items="menu" class="text-center">
          <template v-slot="item">
            <div class="thambnail">
              <b-img fluid :src="item.props.image" />
            </div>
            <h3 class="title">
              {{ item.props.name }} <span>{{ item.props.category }}</span>
            </h3>
            <p class="text">{{ item.props.title }}</p>
          </template>
        </OrganismColumnItemT1>
      </section>

      <footer class="text-center bg-light py-5">
        <OrganismColumnCenterT1>
          <div class="mb-5">
            <b-button variant="outline-secondary" href="">
              <b-icon icon="facebook" font-scale="1" />
            </b-button>
            <b-button variant="outline-secondary" href="">
              <b-icon icon="instagram" font-scale="1" />
            </b-button>
          </div>
          <p>Vue.js Web Design © 2020</p>
        </OrganismColumnCenterT1>
      </footer>

      <TheFixedSwitchColorBox color="gainsboro">
        <MoleculeNavGlobalT1
          brand="Transpigeon café"
          root="/templates/style001/"
          :items="[
            { name: 'Information', link: '/templates/style001/news/' },
            { name: 'Le menu', link: '/templates/style001/menu/' },
            { name: 'Le service', link: '/templates/style001/service/' },
            { name: 'Articles de blog', link: '/templates/style001/posts/' },
          ]"
        />
      </TheFixedSwitchColorBox>
    </TheScrollContainer>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const directry = 'production-support/style001'
    const menu = await $content(`${directry}/menulists`)
      .sortBy('slug')
      .limit(6)
      .fetch()
    return { menu }
  },
}
</script>

<style scoped>
.fullsize-box {
  background: url('/image/sample/dung-trieu-DVA6kQNdUWs-unsplash.jpg');
  background-size: cover;
}
#favorit .thambnail {
  height: 180px;
  overflow: hidden;
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
}
</style>
