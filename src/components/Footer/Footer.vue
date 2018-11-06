<template>
<footer id="footer">
  <footer-header></footer-header>
  <footer-content></footer-content>
  <footer-bottom></footer-bottom>
</footer>
</template>

<script>
import FooterHeader from '@/components/Footer/FooterHeader.vue'
import FooterContent from '@/components/Footer/FooterContent.vue'
import FooterBottom from '@/components/Footer/FooterBottom.vue'
export default {
  components: {
    FooterHeader,
    FooterContent,
    FooterBottom
  }
}
</script>

<style lang="less" scoped>
#footer {
}
</style>
