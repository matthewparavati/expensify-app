import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGE_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };

// Demo / sample firebase code

//child_removed
// database.ref('expenses').on('child_removed', snapshot => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('value', snapshot => {
//   const expenses = [];
//   snapshot.forEach(childSnapshot => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val(),
//     });
//   });
//   console.log(expenses);
// });

// setTimeout(() => {
//   database.ref('expenses/-MR7BxOTsIXC10jjE6gD').update({
//     amount: 25,
//   });
// }, 3000);

// const expenses = [
//   {
//     description: 'Rent',
//     note: 'Jan. Rent',
//     amount: 1500,
//     createdAt: 1,
//   },
// {
//   description: 'Food',
//   note: 'grocery food',
//   amount: 100,
//   createdAt: 2,
// },
// {
//   description: 'Coffee',
//   note: 'lots of coffee',
//   amount: 15,
//   createdAt: 3,
// },
// ];

// expenses.forEach(expense => {
//   database.ref('expenses').push(expense);
// });

// database.ref('notes').push({
//   title: 'Course Topics',
//   body: 'React Native, Angular, Python',
// });

// database.ref().on('value', snapshot => {
//   const val = snapshot.val();
//   const description = `${val.name} is a ${val.job.job} at ${val.job.company}. Current stress level is ${val.stressLevel}`;
//   console.log(description);
// });

// setTimeout(() => {
//   database.ref('stressLevel').set(4);
// }, 3500);

// database
//   .ref()
//   .once('value')
//   .then(snapshot => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch(e => {
//     console.log('Error fetching data', e);
//   });

// database
//   .ref()
//   .set({
//     name: 'Matthew',
//     age: 29,
//     stressLevel: 6,
//     job: {
//       job: 'software developer',
//       company: 'Google',
//     },
//     location: {
//       city: 'Atlanta',
//       country: 'United States',
//     },
//   })
//   .then(() => {
//     console.log('Data is saved');
//   })
//   .catch(e => {
//     console.log('This failed: ', e);
//   });

// database.ref().update({
//   stressLevel: 9,
//   'job/company': 'Amazon',
//   'location/city': 'Seattle',
// });

// database
//   .ref('isSingle')
//   .remove()
//   .then(() => {
//     console.log('Remove Succeeded!');
//   })
//   .catch(e => {
//     console.log('Remove failed :(');
//   });
