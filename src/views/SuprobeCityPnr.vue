<template>
<div id="city-pnr">
  <partner-head></partner-head>
  <partner-desc></partner-desc>
  <partner-spot></partner-spot>
  <partner-apply></partner-apply>
  <partner-footer></partner-footer>
</div>
</template>

<script>
import PartnerHead from '@/components/CityPnr/PartnerHead.vue'
import PartnerFooter from '@/components/CityPnr/PartnerFooter.vue'
import PartnerDesc from '@/components/CityPnr/PartnerDesc.vue'
import PartnerSpot from '@/components/CityPnr/PartnerSpot.vue'
import PartnerApply from '@/components/CityPnr/PartnerApply.vue'
import classmix from '@/mixin/mixin-wow.js'
export default {
  components: {
    PartnerHead,
    PartnerFooter,
    PartnerDesc,
    PartnerSpot,
    PartnerApply
  },
  mixins: [classmix]
}
</script>

<style lang="less" scoped>
#city-pnr {
}
</style>
