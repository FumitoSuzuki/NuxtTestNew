<template>
  <div id="main">
    <TheScrollContainer>
      <header class="bg-light p-2">
        <TheFullsizeBox :vh="33.3">
          <OrganismColumnCenterT1 class="text-center text-white h-100 py-5">
            <h1>Le menu</h1>
          </OrganismColumnCenterT1>
        </TheFullsizeBox>
      </header>

      <section class="my-5">
        <b-container>
          <b-row class="mb-5 text-center border-bottom">
            <b-col>
              <h3>おすすめメニュー</h3>
            </b-col>
          </b-row>
          <b-card-group columns>
            <b-card v-for="(item, key) in menu.body" :key="key">
              <div class="text-center">
                <b-card-img :src="item.image" :alt="item.alt" />
              </div>
              <b-card-title class="my-3">
                {{ item.name }}
              </b-card-title>
              <b-card-text>
                <p>{{ item.description }}</p>
                <p>{{ item.price }}円(税別)</p>
              </b-card-text>
            </b-card>
          </b-card-group>
        </b-container>
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
    const directry = 'template/foodmenu'
    const menu = await $content(`${directry}/menu`).fetch()
    return { menu }
  },
}
</script>

<style lang="scss" scoped>
@import "node_modules/bootstrap/scss/functions";
@import "node_modules/bootstrap/scss/variables";
@import "node_modules/bootstrap/scss/mixins/_breakpoints";
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

.card-columns {
  @include media-breakpoint-only(sm) {
    column-count: 2;
  }
  @include media-breakpoint-only(xl) {
    column-count: 3;
  }
}
.card-columns .card {
  border: 1px solid whitesmoke;
  margin-bottom: 1.5rem;
  // background-color: whitesmoke;
}
.card-columns .card:last-child {
  margin-bottom: 0;
}
.card-body {
  // padding: 0;
}
.card-img {
  width: 80%;
}
</style>
