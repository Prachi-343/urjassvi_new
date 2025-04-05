import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { collection, getDocs, doc, getDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBI5AioIYhcKzQpBaQKsxP3dcv1V6nnvAI",
  authDomain: "four-ea12b.firebaseapp.com",
  projectId: "four-ea12b",
  storageBucket: "four-ea12b.appspot.com",
  messagingSenderId: "781851642439",
  appId: "1:781851642439:web:da4ef9a8cced8247d27f62"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

// Function to fetch all products
export const fetchAllProducts = async () => {
  const productsCollection = collection(db, 'products');
  const productsSnapshot = await getDocs(productsCollection);
  const productsList = productsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  return productsList;
};

// Function to fetch a single product by ID
export const fetchProductById = async (id) => {
  const productDoc = doc(db, 'products', id);
  const productSnapshot = await getDoc(productDoc);
  if (productSnapshot.exists()) {
    return { id: productSnapshot.id, ...productSnapshot.data() };
  } else {
    throw new Error('Product not found');
  }
};

export { db, auth, storage };