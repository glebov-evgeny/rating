<template>
  <main class="s-main">
    <s-admin :dates="datesFromDb" />
  </main>
</template>

<script setup>
import { getFirestore, collection, onSnapshot, query } from 'firebase/firestore';

definePageMeta({
  middleware: ['auth'],
});

let datesFromDb = ref({});

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
