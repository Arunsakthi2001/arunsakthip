const header = document.getElementById('header')
const toggle = document.getElementById('toggle');
const navbar = document.getElementById('navbar');

document.onclick = function(e){
    if(e.target.id !== 'header' && e.target.id !== 'toggle' && e.target.id !== 'navbar'){
        toggle.classList.remove('active');
        navbar.classList.remove('active');
    }
}
toggle.onclick = function(){
toggle.classList.toggle('active');
navbar.classList.toggle('active');
}

// send email
function sendEmail(){
    Email.send({
        Host : "smtp.gmail.com",
        Username : "arunpalani219@gmail.com",
        Password : "Arun@12345",
        To : 'arunsakthi201@gmail.com',
        From : document.getElementById("email").value,
        Subject : "Website contact form",
        Body : "Name: " + document.getElementById("name").value +
        "<br> Email: " + document.getElementById("email").value +
        "<br> Phone No.: " + document.getElementById("phone").value +
        "<br> Location: " + document.getElementById("location").value +
        "<br> Message: " + document.getElementById("message").value 
    }).then(
      message => alert("your message was send successfully")
    );
}
