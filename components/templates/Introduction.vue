<template>
  <TheFullsizeBox id="introduction">
    <b-container fluid :style="containerStyle">
      <b-row align-v="center" class="header" :style="getHeaderHeight">
        <b-col>
          <slot name="header">
            {{ content.header }}
          </slot>
        </b-col>
      </b-row>

      <b-row align-v="center" class="body" :style="getBodyHeight">
        <b-col>
          <slot>
            <NuxtContent :document="content" />
          </slot>
        </b-col>
      </b-row>

      <b-row align-v="center" class="footer" :style="getfooterHeight">
        <b-col>
          <slot name="footer">
            {{ content.footer }}
          </slot>
        </b-col>
      </b-row>
    </b-container>
  </TheFullsizeBox>
</template>

<script>
export default {
  props: {
    content: {
      type: Object,
      default: () => ({
        header: '',
        footer: '',
      }),
    },
    height: { type: String, default: '50%' },
    headerHeight: { type: String, default: '25%' } /* option */,
    footerHeight: { type: String, default: '25%' } /* option */,
    bgImage: { type: String, default: '' },
    bgColor: { type: String, default: '' },
  },
  computed: {
    containerStyle() {
      const style = {}
      if (this.bgImage) style['--bgimage'] = `url(${this.bgImage})`
      if (this.bgColor) style['--bgcolor'] = this.bgColor
      return style
    },
    resetHeight() {
      const bh = parseInt(this.height)
      let hh = parseInt(this.headerHeight)
      let fh = parseInt(this.footerHeight)
      let remainingRate = 1
      if (bh + hh + fh > 100) {
        remainingRate = (100 - bh) / (hh + fh)
        hh = remainingRate * hh
        fh = remainingRate * fh
      }
      const height = 100 / (bh + hh + fh)
      return {
        body: height * bh,
        header: height * hh,
        footer: height * fh,
      }
    },
    getBodyHeight() {
      return { '--height': `${this.resetHeight.body}%` }
    },
    getHeaderHeight() {
      return { '--height': `${this.resetHeight.header}%` }
    },
    getfooterHeight() {
      return { '--height': `${this.resetHeight.footer}%` }
    },
  },
}
</script>

<style scoped>
.container-fluid {
  --bgimage: url('');
  --bgcolor: gainsboro;
  background-image: var(--bgimage);
  background-color: var(--bgcolor);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100%;
}
.header {
  --height: 25%;
  min-height: var(--height);
}
.footer {
  --height: 25%;
  min-height: var(--height);
}
.body {
  --height: 50%;
  min-height: var(--height);
}
</style>
