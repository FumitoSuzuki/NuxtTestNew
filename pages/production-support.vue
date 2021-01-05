<template>
  <div id="main">
    <TheScrollContainer>
      <section id="introduction" class="bg-primary overflow-hidden">
        <!-- introduction header section -->
        <OrganismColumnCenterT1 style="height: 25vh">
          <h1 class="text-center">Production Support</h1>
        </OrganismColumnCenterT1>
        <!-- introduction header section -->
        <!-- introduction body & footer section -->
        <OrganismHeaderBottomImgT1 md="4">
          <template #title>
            <NuxtContent :document="leadcopy" />
          </template>
          <template #image>
            <b-img
              src="/image/img_pcsp.svg"
              style="position: relative; left: 15%"
            />
          </template>
        </OrganismHeaderBottomImgT1>
        <!-- introduction body & footer section -->
      </section>

      <section id="layout-sample" class="py-5">
        <!-- layout-sample header section -->
        <OrganismColumnCenterT1 class="text-center mb-5">
          <h2>Layout Sample</h2>
          <p>
            <TheResponsiveBreak>
              お客様の目的と目標を達成するためにじっくりとヒアリングをおこない、
              <br />
              おひとりおひとりのスタイルに合わせたご提案をします。
            </TheResponsiveBreak>
          </p>
        </OrganismColumnCenterT1>
        <!-- layout-sample header section -->
        <!-- layout-sample item section -->
        <OrganismColumnItemT1 :items="layoutSample.body">
          <template #default="item">
            <b-card
              overlay
              :img-src="item.props.src"
              :img-alt="item.props.alt"
              style="height: 50vh; overflow: hidden"
            />
          </template>
        </OrganismColumnItemT1>
        <!-- layout-sample item section -->
      </section>

      <TemplateInformation v-bind="{ procedure }" />

      <!-- this is header nav area -->
      <!-- Be sure to write it in "<TheScrollContainer>" -->
      <TheFixedSwitchColorBox color="var(--primary)">
        <b-breadcrumb class="bg-transparent m-3 p-0">
          <li><b-icon icon="chevron-left" font-scale="１" />&nbsp;</li>
          <b-breadcrumb-item to="/">Top</b-breadcrumb-item>
        </b-breadcrumb>
      </TheFixedSwitchColorBox>
      <!-- this is header nav area -->
    </TheScrollContainer>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const leadcopy = await $content('production-support/leadcopy').fetch()
    const layoutSample = await $content(
      'production-support/layout-sample'
    ).fetch()
    const procedure = await $content('index/procedure').fetch()
    return { leadcopy, layoutSample, procedure }
  },
  layout: 'contents',
}
</script>

<style scoped>
#introduction,
#layout-sample,
#information {
  scroll-snap-align: start;
}
.fixed-switch-color-box >>> .breadcrumb,
.fixed-switch-color-box >>> .breadcrumb a {
  color: white;
  font-size: 1rem;
}
.header-bottom-img >>> .title {
  min-height: 50vh;
}
</style>
