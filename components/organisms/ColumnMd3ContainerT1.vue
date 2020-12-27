<template>
  <b-container class="column-md3-container">
    <TheAlignRowItems :target="alignTarget">
      <b-row align-v="center" cols="1" cols-md="3">
        <b-col v-for="(item, key) in items" :key="key">
          <div class="icon mb-3">
            <b-icon :icon="item.icon" font-scale="3" />
          </div>
          <div class="title mb-3">
            <h3 class="title">{{ item.title }}</h3>
          </div>
          <div class="body">
            <nuxt-content :document="item" class="text-left" />
          </div>
        </b-col>
      </b-row>
    </TheAlignRowItems>
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
  data() {
    return {
      alignTarget: ['icon', 'title', 'body'],
    }
  },
}
</script>

<style scoped>
.column-md3-container {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
}
.column-md3-container {
  text-align: center;
}
.title {
  font-size: 1rem;
  font-weight: 700;
  color: var(--primary);
}
.body >>> .nuxt-content p {
  margin-bottom: auto;
}
</style>
