<template>
  <section class="character">
    <div class="leadcopy">
      <b-container class="d-flex justify-content-center py-5">
        <b-row cols="1" align-v="center">
          <b-col>
            <slot name="leadcopy" />
          </b-col>
        </b-row>
      </b-container>
    </div>
    <div class="characters">
      <slot name="characters" />
    </div>
  </section>
</template>

<style scoped>
.leadcopy {
  background-color: #e9ecef;
}
.leadcopy .container {
  min-height: 60vh;
}
.characters .container {
  min-height: 40vh;
}
</style>
