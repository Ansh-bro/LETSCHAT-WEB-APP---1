
const firebaseConfig = {
      apiKey: "AIzaSyBnkboDyta6OAeqzMYN09GNan8OCVZfSvQ",
      authDomain: "kwitter-e19d9.firebaseapp.com",
      projectId: "kwitter-e19d9",
      storageBucket: "kwitter-e19d9.appspot.com",
      messagingSenderId: "497759659121",
      appId: "1:497759659121:web:ed0baa53de20e1b94967d0"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

    user_name=localStorage.getItem("user_name");

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
