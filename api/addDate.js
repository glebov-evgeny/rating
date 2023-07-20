import { getFirestore, setDoc, doc } from 'firebase/firestore';

export default async function addCard(fieldsData) {
  const db = getFirestore();
  await setDoc(doc(db, 'date', 'date'), fieldsData);
}
