import { getFirestore, collection, onSnapshot, query } from 'firebase/firestore';

export default async function getDate() {
  const db = getFirestore();
  const getDates = query(collection(db, 'date'));
  onSnapshot(getDates, (querySnapshot) => {
    const response = [];
    querySnapshot.forEach((docitem) => {
      response.push(docitem.data());
    });
    if (response.length) {
      datesFromDb.value = response;
    } else {
      console.log('no data');
    }
  });
}
