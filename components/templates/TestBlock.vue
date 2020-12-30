<template>
  <b-container fluid class="test-block py-5">
    <b-row align-h="center">
      <b-col>
        <div class="inner-block"><slot /></div>
      </b-col>
    </b-row>
  </b-container>
</template>

<style scoped>
.test-block {
  min-height: 100vh;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  background: gray;
  scroll-snap-align: start;
}
.inner-block > * {
  background: white;
}
</style>
