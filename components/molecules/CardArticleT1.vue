<template>
  <b-card no-body class="h-100">
    <client-only placeholder="Loading...">
      <b-card-img top :src="item.introduct.file.url" />
    </client-only>
    <b-card-body>
      <nuxt-link :to="`/posts/entry/${item.id}`" class="text-primary">
        <b-card-title class="title">{{ item.title }}</b-card-title>
      </nuxt-link>
      <b-card-text class="text text-secondary">
        {{ item.discription }}
      </b-card-text>
    </b-card-body>
  </b-card>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: () => ({
        introduct: { file: { url: '' } },
        id: '',
        title: '',
        discription: '',
      }),
    },
  },
}
</script>
