<template>
  <div id="main">
    <header>
      <TemplateIntroduction
        :content="introduction"
        bg-image="/image/sample/dung-trieu-DVA6kQNdUWs-unsplash.jpg"
        class="text-center text-white p-2"
      />
    </header>

    <TheStickyBox>
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
    </TheStickyBox>

    <section id="information" class="py-5">
      <OrganismColumnCenterT1>
        <div>
          <h2>Information</h2>
          <p v-for="(item, key) in news" :key="key">
            <span>{{ item.date }}</span>
            <b-link :to="{ path: './news', hash: `#slug-${item.slug}` }">
              {{ item.title }}
            </b-link>
          </p>
        </div>
      </OrganismColumnCenterT1>
    </section>

    <section id="favorit" class="pb-5">
      <OrganismColumnCenterT1>
        <h2 v-parallax="0.05" class="text-center mb-5">
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

    <section id="preview" class="py-5 bg-light">
      <OrganismColumnTextAndImg :items="preview">
        <template #image="item">
          <b-carousel v-parallax="0.1" fade>
            <b-carousel-slide
              v-for="(img, imgKey) in item.props.image"
              :key="imgKey"
              :img-alt="img.alt"
              :img-src="img.src"
            >
            </b-carousel-slide>
          </b-carousel>
        </template>
      </OrganismColumnTextAndImg>
    </section>

    <section id="blog-posts" class="pb-5">
      <OrganismColumnCenterT1>
        <h2 class="text-center my-5">Blog posts</h2>
      </OrganismColumnCenterT1>
      <OrganismColumnItemT1
        :items="posts"
        cols="2"
        md="4"
        margin="0"
        no-gutters
        class="mb-5"
      >
        <template v-slot="item">
          <b-img fluid :src="item.props.thambnail" :alt="item.props.title" />
        </template>
      </OrganismColumnItemT1>
      <OrganismColumnCenterT1 md="7" class="footer">
        <b-button
          block
          to="/production-support/"
          variant="secondary"
          v-text="String('Lean More')"
        />
      </OrganismColumnCenterT1>
    </section>

    <section id="store-guide" class="py-5">
      <OrganismColumnCenterT1>
        <h2 class="text-center my-5">Store info</h2>
      </OrganismColumnCenterT1>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3261.47384430763!2d136.89584158757296!3d35.169740676301025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x600376d61f565235%3A0xbf2512a2a21178a2!2z44CSNDYwLTAwMDMg5oSb55-l55yM5ZCN5Y-k5bGL5biC5Lit5Yy66Yym77yR5LiB55uu77yR77yR4oiS77yR77yRIOWQjeWPpOWxi-OCpOODs-OCv-ODvOOCt-ODhuOCow!5e0!3m2!1sja!2sjp!4v1610205635339!5m2!1sja!2sjp"
        width="100%"
        height="300"
        frameborder="0"
        style="
          border: 0;
          filter: hue-rotate(140deg);
          -webkit-filter: hue-rotate(140deg);
        "
        allowfullscreen="true"
        aria-hidden="false"
        tabindex="0"
      ></iframe>
      <OrganismColumnCenterT1>
        <div class="text-center my-3">
          <h3>Transpigeon cafe</h3>
          <p style="font-size: 0.75rem">
            (平日 10：00 ~ 22:00 休日 9:00 ~ 21:00 定休日 月曜日)
          </p>
        </div>
      </OrganismColumnCenterT1>
      <b-container>
        <b-row align-h="center" class="mb-3">
          <b-col cols="auto">
            <p>TEL:</p>
            <p>CONTACT:</p>
            <p>ADDRESS:</p>
          </b-col>
          <b-col cols="auto">
            <p>052-000-0000</p>
            <p>contact@transpigeon-cafe.com</p>
            <p>愛知県名古屋市中区錦1丁目11−11</p>
          </b-col>
        </b-row>
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
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const directry = 'production-support/style001'
    const introduction = await $content(`${directry}/introduction`).fetch()
    const news = await $content(`${directry}/news`)
      .sortBy('priority', 'desc')
      .sortBy('date', 'desc')
      .limit(3)
      .fetch()
    const menu = await $content(`${directry}/menulists`)
      .sortBy('slug')
      .limit(6)
      .fetch()
    const preview = await $content(`${directry}/preview`).sortBy('slug').fetch()
    const posts = await $content(`${directry}/posts`).sortBy('date').fetch()
    return { introduction, news, menu, preview, posts }
  },
  methods: {
    getRandomArbitrary(min, max) {
      return Math.random() * (max - min) + min
    },
  },
}
</script>

<style scoped>
#navigation {
  /* position: sticky;
  top: 0px;
  z-index: 100; */
}
#information >>> p {
  margin-bottom: auto;
}
#store-guide >>> p {
  margin-bottom: auto;
}
#favorit .thambnail {
  height: 180px;
  overflow: hidden;
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
}
#preview >>> .row {
  margin-bottom: 0 !important;
}
#preview >>> .image {
  height: 300px;
  overflow: hidden;
  display: flex;
  align-items: center;
}
</style>
