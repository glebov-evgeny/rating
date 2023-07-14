<template>
  <footer class="s-footer">
    <div class="s-footer__container l-wide">{{ getYear }}. И точка.</div>
  </footer>
</template>

<script setup>
const getYear = computed(() => {
  const currentYear = new Date();
  return currentYear.getFullYear();
});
</script>

<style lang="scss">
@import './s-footer.scss';
</style>
