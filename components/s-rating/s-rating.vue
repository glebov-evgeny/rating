<template>
  <section class="s-rating">
    <div class="s-rating__container l-wide">
      <h1 class="s-rating__title">Рейтинг сотрудников коммерческих подразделений</h1>
      <div class="s-rating__top">
        <p class="s-rating__subtitle">
          Даты: <b>{{ datesFromDb.dateStart }}</b> - <b>{{ datesFromDb.dateEnd }}</b>
        </p>
        <p class="s-rating__update">
          Обновлено: <b>{{ datesFromDb.dateCurrent }}</b>
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { getFirestore, collection, onSnapshot, query } from 'firebase/firestore';

let datesFromDb = ref('');

const getUserInfo = () => {
  const db = getFirestore();
  const getDates = query(collection(db, 'date'));
  onSnapshot(getDates, (querySnapshot) => {
    const response = [];
    querySnapshot.forEach((docitem) => {
      response.push(docitem.data());
    });
    if (response.length) {
      datesFromDb.value = response[0];
    } else {
      console.log('no data');
    }
  });
};
onMounted(() => {
  getUserInfo();
});
</script>

<style lang="scss">
@import './s-rating.scss';
</style>
