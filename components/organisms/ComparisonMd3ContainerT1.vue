<template>
  <b-container class="comparison">
    <b-row align-v="center">
      <b-col
        v-for="(item, key) in items"
        :key="key"
        cols="12"
        md="4"
        class="body text-center"
      >
        <h3 class="title">
          <b-badge pill variant="primary">{{ item.title }}</b-badge>
        </h3>
        <p class="price">
          <span>{{ item.price }}</span>
          point
        </p>
        <nuxt-content :document="item" />
      </b-col>
    </b-row>
    <b-row align-h="center">
      <b-col md="7">
        <b-button block to="/production-support" variant="primary">
          Learn more
        </b-button>
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
  },
}
</script>

<style scoped>
.comparison {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
}

.body .title > * {
  font-size: 1rem;
}
.body >>> .price {
  font-size: 1.5rem;
  font-weight: 700;
}
.body >>> .price span {
  font-size: 2.5rem;
}
.body >>> .nuxt-content ul {
  padding-left: 0;
  list-style: none;
}
.body >>> .nuxt-content li {
  border-bottom: 1px solid;
}
.body >>> .nuxt-content p {
  text-align: left;
}
.body >>> .nuxt-content blockquote {
  display: flex;
}
.body >>> .nuxt-content blockquote::before {
  content: '※';
  margin-right: 0.5em;
}
</style>
