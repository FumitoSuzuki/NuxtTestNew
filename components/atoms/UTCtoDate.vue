<template>
  <span>{{ updatedAt }}</span>
</template>

<script>
export default {
  props: {
    utc: { type: String, default: '' },
  },
  computed: {
    updatedAt() {
      const inUTC = new Date(this.utc)
      return `${inUTC.getFullYear()}.${inUTC.getMonth()}.${inUTC.getDate()}`
    },
  },
}
</script>
