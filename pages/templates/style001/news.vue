<template>
  <div id="main">
    <TheScrollContainer>
      <header class="bg-light p-2">
        <TheFullsizeBox :vh="33.3">
          <OrganismColumnCenterT1 class="text-center text-white h-100 py-5">
            <h1>Information</h1>
          </OrganismColumnCenterT1>
        </TheFullsizeBox>
      </header>

      <section id="news" class="py-5">
        <OrganismColumnTextAndImg :items="news">
          <template #body="item">
            <div :id="`slug-${item.props.slug}`">
              <p>{{ item.props.date }}</p>
              <h3>{{ item.props.title }}</h3>
            </div>
            <NuxtContent :document="item.props" />
          </template>
          <template #image="item">
            <b-img :src="item.props.thumbnail" class="w-100" />
          </template>
        </OrganismColumnTextAndImg>
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
  async asyncData({ params, $content }) {
    const directry = 'production-support/style001'
    const news = await $content(`${directry}/news`)
      .sortBy('priority', 'desc')
      .sortBy('date', 'desc')
      .fetch()
    return { news }
  },
  mounted() {
    const hash = this.$route.hash
    this.$nextTick(() => {
      if (hash) {
        this.$scrollTo(document.querySelector(hash), 300, {
          container: '.scroll-container',
          offset: -96,
        })
      }
    })
  },
}
</script>

<style scoped>
.fullsize-box {
  background: url('/image/sample/dung-trieu-DVA6kQNdUWs-unsplash.jpg');
  background-size: cover;
}
#news >>> .row {
  padding-top: 3rem;
  padding-bottom: 3rem;
  margin-bottom: 0 !important;
  border-bottom: 1px solid lightgray;
}
#news >>> .row:first-child {
  padding-top: 0;
}
#news >>> .row:last-child {
  padding-bottom: 0;
  border-bottom: none;
}
</style>
