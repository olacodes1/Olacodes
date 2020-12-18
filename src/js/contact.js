// Contact form

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyClfC6BeqQ6L7FhnQ0zjEjo_MEDGN8M4ek",
  authDomain: "portfolio-contact-form-7b1b5.firebaseapp.com",
  projectId: "portfolio-contact-form-7b1b5",
  storageBucket: "portfolio-contact-form-7b1b5.appspot.com",
  messagingSenderId: "1011574241530",
  appId: "1:1011574241530:web:b84b3cca334246bc87b143",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Referen6ce messages collection
let messagesRef = firebase.database().ref("messages");

// Contact Form
document.getElementById("contact-form").addEventListener("submit", submitForm);

// Submit Form
function submitForm(e) {
  e.preventDefault();

  // Get values
  var name = getInputVal("name");
  var email = getInputVal("email");
  var message = getInputVal("message");

  // Save Message
  saveMessages(name, email, message);

  // Show alert
  document.querySelector(".alert").style.display = "block";

  // Hide alert after 3 sec
  setTimeout(function () {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  // Clear form
  document.getElementById("contact-form").reset();
}

// Function to get form  value
function getInputVal(id) {
  return document.getElementById(id).value;
}

// Save Messages
function saveMessages(name, email, message) {
  var newmessagesRef = messagesRef.push();
  newmessagesRef.set({
    name: name,
    email: email,
    message: message,
  });
}
