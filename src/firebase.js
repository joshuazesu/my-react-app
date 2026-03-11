// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
console.log('Firebase Config - Environment Variables Check:');
console.log('REACT_APP_API_KEY exists:', !!process.env.REACT_APP_API_KEY);
console.log('REACT_APP_AUTH_DOMAIN exists:', !!process.env.REACT_APP_AUTH_DOMAIN);
console.log('REACT_APP_PROJECT_ID exists:', !!process.env.REACT_APP_PROJECT_ID);
console.log('REACT_APP_STORAGE_BUCKET exists:', !!process.env.REACT_APP_STORAGE_BUCKET);
console.log('REACT_APP_MESSAGING_SENDER_ID exists:', !!process.env.REACT_APP_MESSAGING_SENDER_ID);
console.log('REACT_APP_ID exists:', !!process.env.REACT_APP_ID);
console.log('REACT_APP_MEASUREMENT_ID exists:', !!process.env.REACT_APP_MEASUREMENT_ID);

// Optional: Log partial values for verification (be careful not to log full sensitive data)
console.log('API Key (first 5 chars):', process.env.REACT_APP_API_KEY?.substring(0, 5) + '...');
console.log('Project ID:', process.env.REACT_APP_PROJECT_ID);
console.log('Auth Domain:', process.env.REACT_APP_AUTH_DOMAIN);

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID
};

console.log('Firebase Config Object Created:', {
  ...firebaseConfig,
  apiKey: firebaseConfig.apiKey ? '***' : undefined // Hide full API key in logs
});

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);