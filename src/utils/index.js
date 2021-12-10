import { collection, getDocs } from "firebase/firestore/lite";

import db from "../firebase";

async function getAllLinks() {
  const coll = collection(db, "links");
  const snapshot = await getDocs(coll);
  const list = snapshot.docs.map((doc) => doc.data());
  return list;
}

async function getAllCategories() {
  const coll = collection(db, "categories");
  const snapshot = await getDocs(coll);
  const list = snapshot.docs.map((doc) => doc.data());
  return list;
}

export { getAllLinks, getAllCategories };
