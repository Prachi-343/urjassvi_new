import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { collection, getDocs, doc, getDoc, addDoc, query, limit } from 'firebase/firestore';

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

// Function to fetch all reviews
export const fetchAllReviews = async () => {
  const reviewsCollection = collection(db, 'reviews');
  const reviewsSnapshot = await getDocs(reviewsCollection);
  const reviewsList = reviewsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  return reviewsList;
};

// Function to add a new review
export const addReview = async (reviewData) => {
  const reviewsCollection = collection(db, 'reviews');
  await addDoc(reviewsCollection, reviewData);
};

// Function to fetch availability status
export const fetchAvailabilityStatus = async () => {
  const availabilityCollection = collection(db, 'availability');
  const availabilityQuery = query(availabilityCollection, limit(1)); // Fetch the first document
  const availabilitySnapshot = await getDocs(availabilityQuery);
  if (!availabilitySnapshot.empty) {
    const availabilityDoc = availabilitySnapshot.docs[0];
    return availabilityDoc.data().status; // Return the status field
  } else {
    throw new Error("No availability data found");
  }
};

// Function to test Firebase connection
export const testFirebaseConnection = async () => {
  try {
    const testCollection = collection(db, 'products'); // Replace 'products' with any collection name in your Firestore
    const testSnapshot = await getDocs(testCollection);
    console.log('Firebase is connected. Total listings:', testSnapshot.size);
    return testSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error('Error connecting to Firebase:', error);
    throw error;
  }
};

export { db, auth, storage };