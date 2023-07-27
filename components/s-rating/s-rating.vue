<template>
  <section class="s-rating">
    <div class="s-rating__container l-wide">
      <h1 class="s-rating__title">Рейтинг сотрудников коммерческих подразделений</h1>
      <div class="s-rating__top">
        <div class="s-rating__top-row">
          <p class="s-rating__subtitle">Даты:</p>
          <p class="s-rating__date">{{ dates.dateStart }}</p>
          <span class="s-rating__date-line">-</span>
          <p class="s-rating__date">{{ dates.dateEnd }}</p>
        </div>
        <div class="s-rating__top-row">
          <p class="s-rating__subtitle">Обновлено:</p>
          <p class="s-rating__date">{{ dates.dateCurrent }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = defineProps({
  dates: {
    type: Object,
    default() {
      return {};
    },
  },
});
</script>

<style lang="scss">
@import './s-rating.scss';
</style>
