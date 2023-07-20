<template>
  <main class="s-main">
    <s-rating :dates="contentInformation" />
    <s-list :content="contentInformation.fileImport" />
  </main>
</template>
<script setup>
import { getFirestore, collection, onSnapshot, query } from 'firebase/firestore';

let contentInformation = ref({});

const getInformation = () => {
  const db = getFirestore();
  const getDates = query(collection(db, 'date'));
  onSnapshot(getDates, (querySnapshot) => {
    const response = [];
    querySnapshot.forEach((docitem) => {
      response.push(docitem.data());
    });
    if (response.length) {
      contentInformation.value = response[0];
    } else {
      console.log('no data');
    }
  });
};

onMounted(() => {
  getInformation();
});
</script>
