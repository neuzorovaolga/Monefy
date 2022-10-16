import {
  addDoc,
  collection,
  doc,
  getFirestore,
  setDoc,
  query,
  where,
  updateDoc,
  getDocs,
  deleteDoc,
  onSnapshot,
} from "firebase/firestore";
import { app } from "./auth";

export const db = getFirestore(app);

export const firebaseAddUserDoc = (userId) => {
  setDoc(doc(db, "users", userId), {
    id: userId,
  });
};

export const firebaseAddCostDoc = (userId, costData) => {
  const userCostsCollection = collection(db, `users/${userId}/costs`);
  addDoc(userCostsCollection, costData);
};

export const firebaseGetDataCostDoc = async (userId) => {
  const q = query(collection(db, `users/${userId}/costs`));
  const querySnapshot = await getDocs(q);

  return querySnapshot.docs.map((doc) => {
    return {
      ...doc.data(),
      id: doc.id,
      date: new Date(doc.data()?.date?.seconds),
    };
  });
};

export const firebaseOnSnapshotCosts = (userId, setCosts, filteredDate) => {
  const startDay = new Date(new Date(filteredDate).setHours(0, 0, 0, 0));
  const endDay = new Date(new Date(filteredDate).setHours(23, 59, 59, 999));
  console.log(startDay, endDay);
  const q = query(
    collection(db, `users/${userId}/costs`),
    where("date", ">=", startDay),
    where("date", "<=", endDay)
  );
  const unsubscribe = onSnapshot(q, (querySnapshot) => {
    const result = querySnapshot.docs.map((doc) => {
      return {
        ...doc.data(),
        id: doc.id,
        date: doc.data()?.date?.toDate(),
      };
    });

    setCosts(result);
  });

  return unsubscribe;
};

export const firebaseDeleteCostDoc = async (userId, id) => {
  await deleteDoc(doc(db, `users/${userId}/costs`, id));
};

export const firebaseUpdateCost = async (userId, id, costData) => {
  const card = doc(db, `users/${userId}/costs`, id);
  await updateDoc(card, costData);
};
