// Function to turn vertical navigation bar into horizontal dropdown
function dropDown() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// Function called when button clicked at end of contact page; results console-logged and message alerted
function thankYou() {
  event.preventDefault();
  let name = $('#name').val();
  let email = $("#email").val();
  let phone = $("#phone").val();
  let message = $("#message").val();
  let reason = $("#reason").val();

  let myArr = [name, email, phone, message, reason]
  console.log(myArr);


  alert("Thank you. We have received your inquiry and will respond shortly.");
}
