<template>
  <b-container>
    <b-row
      v-for="(item, key) in items"
      :key="key"
      align-v="center"
      class="mb-5"
    >
      <b-col class="body" v-bind="getAttr(item, 'body')">
        <slot name="body" :props="item">
          <h3>{{ item.title }}</h3>
          <NuxtContent :document="item" />
        </slot>
      </b-col>
      <b-col class="image" v-bind="getAttr(item, 'image')">
        <slot name="image" :props="item">
          <b-carousel fade>
            <b-carousel-slide
              v-for="(img, imgKey) in item.image"
              :key="imgKey"
              :img-alt="img.alt"
              :img-src="img.src"
            >
            </b-carousel-slide>
          </b-carousel>
        </slot>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default: () => [],
    },
    cols: { type: String, default: 'md' },
    column: {
      type: Object,
      default: () => ({
        body: { type: String, default: '7' },
        image: { type: String, default: '5' },
      }),
    },
    order: {
      type: Object,
      default: () => ({
        body: { type: String, default: '1' },
        image: { type: String, default: '2' },
      }),
    },
  },
  methods: {
    getAttr(item, target) {
      const isImage = Boolean(item.image)
      const isThumb = Boolean(item.thumbnail)
      const attr = {}
      if (isImage || isThumb) {
        attr[this.cols] = this.column[target].default
        attr[`order-${this.cols}`] = this.order[target].default
        if ('order' in item) {
          attr[`order-${this.cols}`] = item.order[target]
        }
      } else {
        attr[this.cols] = 'auto'
        if (target === 'image') attr.class = 'd-none'
      }
      return attr
    },
  },
}
</script>

<style scoped>
.row:last-child {
  margin-bottom: 0 !important;
}
.body >>> h1,
.body >>> h2,
.body >>> h3,
.body >>> h4,
.body >>> h5,
.body >>> h6 {
  margin-bottom: 1rem;
}
.body >>> .nuxt-content img {
  max-width: 100%;
}
</style>
