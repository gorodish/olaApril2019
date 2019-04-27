import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyAbk16-E4uqjjuJsVRG4tKq5Uo64LlHikc",
  authDomain: "oladb1-1e89d.firebaseapp.com",
  databaseURL: "https://oladb1-1e89d.firebaseio.com",
  projectId: "oladb1-1e89d",
  storageBucket: "oladb1-1e89d.appspot.com",
  messagingSenderId: "677524419931"
};

firebase.initializeApp(config);

const database = firebase.database();

database.ref('expenses')
  .once('value')
  .then((snapshot) => {
    const expenses = [];

    snapshot.forEach((childSnapshot) => {
      expenses.push({
        id: childSnapshot.key,
        ...childSnapshot.val()
      });
    });

    console.log(expenses);
  });

// database.ref('expenses').push({
//   description: 'Car parking',
//   note: 'nice car',
//   amount: 2.90,
//   createdAt: 25
// });

// database.ref('notes').push({
//   title: 'Course topics',
//   body: 'React native, Angular, Python'
// });

// database.ref().on('value', (snapshot) => {
//   const val = snapshot.val();
//   console.log(`${val.name} is a ${val.job.title} in ${val.location.city}`);
// });


// database.ref('location/city')
//   .once('value')
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch((e) => {
//     console.log('Error fetching data');
//   });
// database.ref().set({
//   name: 'Bob Smith',
//   age: 62,
//   stressLevel: 6,
//   job: {
//     title: 'Software developer',
//     company: 'Google'
//   },
//   location: {
//     city: 'Swindon',
//     country: 'Bobsville'
//   }
// }).then(() => {
//   console.log('Data is saved!');
// }).catch((e) => {
//   console.log('This failed', e);
// });

// database.ref().update({
//   stressLevel: 9,
//   'job/company': 'Amazon',
//   'location/city': Seattle
// });
// database.ref('isCool')
//   .remove()
//   .then(() => {
//     console.log('Data was removed')
//   }).catch((e) => {
//     console.log('Did not remove data', e)
//   });