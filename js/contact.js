//connection string
const firebaseConfig = {
    apiKey: "AIzaSyCulrFiubr8f8ub9M4MdDflAA14ron1w88",
    authDomain: "portfolio-154e4.firebaseapp.com",
    databaseURL: "https://portfolio-154e4-default-rtdb.firebaseio.com",
    projectId: "portfolio-154e4",
    storageBucket: "portfolio-154e4.appspot.com",
    messagingSenderId: "750215396117",
    appId: "1:750215396117:web:0e91e3a505bc35a92d071c"
  };

//initialize
firebase.initializeApp(firebaseConfig);

//reference your Database
var contactFormDB = firebase.database().ref('contactForm')

document.getElementById('portfolio-contact-form').addEventListener('submit', submitForm)

function submitForm(event){
    event.preventDefault();

    var name = getElementVal('name');
    var email = getElementVal('email');
    var subject = getElementVal('subject');
    var msg = getElementVal('message');

    saveMessages(name,email,subject,msg);
    //enable alert
    document.querySelector('.contact-right .alert').style.display='block';

    //remove alert
    setTimeout(() => {
        document.querySelector('.contact-right .alert').style.display='none';
    }, 3000);

    //reset the form
    document.getElementById("portfolio-contact-form").reset();
}

const saveMessages = (name,email,subject,msg) => {
    var newContactForm = contactFormDB.push();

    newContactForm.set({
        name : name,
        email : email,
        subject : subject,
        message : msg,
    });
};

const getElementVal = (id) => {
    return document.getElementById(id).value;
};