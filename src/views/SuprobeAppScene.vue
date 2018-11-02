<template>
<app-scene></app-scene>
</template>

<script>
import AppScene from '@/components/AppScene/AppScene.vue'
import classmix from '@/mixin/mixin-wow.js'
export default {
  components: {
    AppScene
  },
  mixins: [classmix]
}
</script>

<style>

</style>
