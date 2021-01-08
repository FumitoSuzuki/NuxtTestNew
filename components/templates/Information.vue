<template>
  <section id="information" class="bg-secondary text-white py-5">
    <OrganismColumnCenterT1 class="header mb-5">
      <h2>Contact</h2>
      <p>How to use external resources?</p>
    </OrganismColumnCenterT1>

    <OrganismColumnCenterT1 class="body mb-5">
      <nuxt-content :document="procedure" />
    </OrganismColumnCenterT1>

    <OrganismFormInformationT1 class="form mb-5" />

    <OrganismColumnCenterT1 class="profile mb-5">
      <Logo width="200" height="200" />
    </OrganismColumnCenterT1>

    <OrganismColumnCenterT1 class="footer">
      <p>Vue.js Web Design © 2020</p>
    </OrganismColumnCenterT1>
  </section>
</template>

<script>
export default {
  props: {
    procedure: { type: Object, default: () => {} },
  },
}
</script>

<style scoped>
#information {
  min-height: 100vh;
}
.header,
.profile,
.footer {
  text-align: center;
}
.body >>> .nuxt-content ol {
  padding-left: 20px;
}
</style>
