const menuBtn = document.querySelector(".menu");
const menu = document.querySelector("nav");
const navLink = document.querySelector(".nav-links");
// Navigation

const navList = document.querySelectorAll(".nav-item");

let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add("close");
    menu.classList.add("show");
    navLink.classList.add("show");
    navList.forEach((item) => {
      item.classList.add("show");
    });

    // Set menu state
    showMenu = true;
  } else {
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    navLink.classList.remove("show");
    navList.forEach((item) => {
      item.classList.remove("show");
    });

    // Set menu state
    showMenu = false;
  }
}

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
