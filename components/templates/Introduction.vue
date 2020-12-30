<template>
  <TheFullsizeBox class="introduction scroll-snap-start">
    <b-container fluid class="block h-100">
      <b-row align-v="center" class="header">
        <b-col>
          <slot name="header" />
        </b-col>
      </b-row>

      <b-row align-v="center" class="body">
        <b-col>
          <slot name="body">
            <h1>Hello VUE JS</h1>
          </slot>
        </b-col>
      </b-row>

      <b-row align-v="center" class="footer">
        <b-col>
          <slot name="footer">
            <Logo :width="60" :height="60" />
          </slot>
        </b-col>
      </b-row>
    </b-container>
  </TheFullsizeBox>
</template>

<style scoped>
.block {
  background-image: url('/image/bg_star.svg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-color: var(--secondary);
  text-align: center;
  color: white;
}
.header,
.footer {
  min-height: 25%;
}
.body {
  min-height: 50%;
}
</style>
