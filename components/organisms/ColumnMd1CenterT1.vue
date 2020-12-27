<template>
  <b-container class="column-md1">
    <b-row cols="1" align-v="center">
      <b-col>
        <slot name="leadcopy" />
      </b-col>
    </b-row>
  </b-container>
</template>

<style scoped>
.column-md1 {
  display: flex;
  justify-content: center;
}
</style>
