import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import {
  getDatabase,
  set,
  ref,
  child,
} from "https://www.gstatic.com/firebasejs/10.6.0/firebase-database.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js";

document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.querySelector("#login");
  const createAccountForm = document.querySelector("#createAccount");

  document
    .querySelector("#linkCreateAccount")
    .addEventListener("click", (e) => {
      e.preventDefault();
      loginForm.classList.add("form--hidden");
      createAccountForm.classList.remove("form--hidden");
    });

  document.querySelector("#linkLogin").addEventListener("click", (e) => {
    e.preventDefault();
    loginForm.classList.remove("form--hidden");
    createAccountForm.classList.add("form--hidden");
  });

  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    //Perform your AJAX/Fetch login

    handleSignInFirebase();
  });

  createAccountForm.addEventListener("submit", (e) => {
    e.preventDefault();

    //Perform your AJAX/Fetch login

    handleSignUpFirebase();
  });
});

function handleSignUpFirebase() {
  console.log("in handleSignUpFunction");
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCyJew-tAuXBWcgKNf3oQbKgfZdZ1R0Hsc",
    authDomain: "semester-project-se.firebaseapp.com",
    databaseURL: "https://semester-project-se-default-rtdb.firebaseio.com",
    projectId: "semester-project-se",
    storageBucket: "semester-project-se.appspot.com",
    messagingSenderId: "722924116281",
    appId: "1:722924116281:web:f9154aabffbfb400b9b0e8",
    measurementId: "G-DR7HZR2068",
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getDatabase();
  const auth = getAuth(app);

  //get all input fields
  let email = document.getElementById("email").value;
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  //validate input fields
  if (validateEmail(email) == false || validatePassword(password) == false) {
  }

  createUserWithEmailAndPassword(auth, email, password)
    .then(function (cred) {
      console.log("cred", cred);
      var userC = auth.currentUser;
      console.log("userC", userC);

      //user data
      var userData = {
        email: email,
        username: username,
      };
      console.log("userData", userData);

      alert("User Created!");
    })
    .catch(function (error) {
      //firebase will use this to alert errors
      var errorCode = error.code;
      var errorMessage = error.message;

      alert(errorMessage);
    });
}

function handleSignInFirebase() {
  console.log("in handleSignInFunction");
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCyJew-tAuXBWcgKNf3oQbKgfZdZ1R0Hsc",
    authDomain: "semester-project-se.firebaseapp.com",
    databaseURL: "https://semester-project-se-default-rtdb.firebaseio.com",
    projectId: "semester-project-se",
    storageBucket: "semester-project-se.appspot.com",
    messagingSenderId: "722924116281",
    appId: "1:722924116281:web:f9154aabffbfb400b9b0e8",
    measurementId: "G-DR7HZR2068",
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getDatabase();
  const auth = getAuth(app);
  const dbref = ref(db);

  //get all input fields
  let logEmail = document.getElementById("logEmail").value;
  let logPass = document.getElementById("logPass").value;

  //validate input fields
  if (validateEmail(email) == false || validatePassword(password) == false) {
  }

  signInWithEmailAndPassword(auth, logEmail, logPass)
    .then(function (cred) {
      console.log("cred", cred);
      var userC = auth.currentUser;
      console.log("userC", userC);

      //user data
      var userData = {
        email: email,
        username: username,
      };
      console.log("userData", userData);

      alert("Log In Successful!");
    })
    .catch(function (error) {
      //firebase will use this to alert errors
      var errorCode = error.code;
      var errorMessage = error.message;

      alert(errorMessage);
    });
}

//validate fields
function validateEmail(email) {
  let expression = /^[^@]+@\w+(\.\w+)+\w$/;
  if (expression.test(email) == true) {
    //true = email is valid
    return true;
  } else {
    // email is not valid
    return false;
  }
}

function validatePassword(password) {
  //firebase only accepts password with more that 6 characters
  if (password < 6) {
    return false;
  } else {
    return true;
  }
}

function validateFields(field) {
  if (field == null) {
    return false;
  }

  if (field.length <= 0) {
    return false;
  } else {
    return true;
  }
}
