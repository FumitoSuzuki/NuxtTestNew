<template>
  <section class="plan-table">
    <div class="header bg-primary">
      <b-container>
        <b-row align-v="center" class="title">
          <b-col class="text-center">
            <slot name="headerTitle" />
          </b-col>
        </b-row>
        <b-row align-v="end" align-h="center" class="img">
          <b-col cols="8" md="5">
            <slot name="headerBottomImg" />
          </b-col>
        </b-row>
      </b-container>
    </div>
    <div class="table-body">
      <slot name="table" />
    </div>
  </section>
</template>

<style scoped>
.header {
  min-height: 50vh;
}
.header .title,
.header .img {
  min-height: 25vh;
}
.table-body .container {
  min-height: 50vh;
}
</style>
