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
            <TheResponsiveBreak class="text-left text-md-center">
              <NuxtContent :document="leadcopy" />
            </TheResponsiveBreak>
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
        <OrganismColumnCenterT1 class="mb-5">
          <h2 class="text-center">Layout Sample</h2>
          <p>
            <TheResponsiveBreak class="text-left text-md-center">
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
              @click="$bvModal.show(`sample-${item.props.id}`)"
            />
            <!-- <b-link :to="`/templates/${item.props.directry}/`">
            </b-link> -->
            <b-modal
              :id="`sample-${item.props.id}`"
              :title="`Layout sample #${item.props.id}`"
              ok-only
              ok-title="Close"
              size="xl"
            >
              <div style="height: 60vh">
                <iframe
                  :src="`/templates/${item.props.directry}/`"
                  width="160%"
                  height="160%"
                  style="transform: scale(0.625); transform-origin: 0 0"
                />
              </div>
            </b-modal>
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
#layout-sample >>> .modal-dialog {
  max-width: 1200px;
}
</style>
