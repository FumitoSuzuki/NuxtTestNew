<template>
  <section class="information bg-secondary text-white">
    <OrganismColumnCenterT1 class="header">
      <h2>Contact</h2>
      <p>How to use external resources?</p>
    </OrganismColumnCenterT1>

    <OrganismColumnCenterT1 class="body">
      <nuxt-content :document="procedure" />
    </OrganismColumnCenterT1>

    <OrganismFormInformationT1 class="form" />

    <OrganismColumnCenterT1 class="profile">
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
.information .header,
.information .profile,
.information .footer {
  text-align: center;
}
.information .body >>> .nuxt-content ol {
  padding-left: 20px;
}
</style>
