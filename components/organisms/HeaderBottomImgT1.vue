<template>
  <b-container class="plan-table-header">
    <b-row align-v="center" class="title">
      <b-col class="text-center">
        <slot name="title" />
      </b-col>
    </b-row>
    <b-row align-v="end" align-h="center" class="bottom-img">
      <b-col cols="8" md="5">
        <slot name="bottomImg" />
      </b-col>
    </b-row>
  </b-container>
</template>
