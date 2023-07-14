<template>
  <footer class="s-footer">{{ getYear }}</footer>
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
