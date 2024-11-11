function checkEmail() {
  let elMsg = document.getElementById("check-email");

  if (
    elEmail.value.indexOf("@") < 5 ||
    !(elEmail.value.endsWith("@gmail.com") ||
    elEmail.value.endsWith("@gmail.vn")
  )) {
    elMsg.textContent = "⚠️Check your email again,bro!";
    elMsg.classList.remove("passed");
    elMsg.classList.add("error");
    return false;
  } else {
    elMsg.textContent = "Passed ✓";
    elMsg.classList.remove("error");
    elMsg.classList.add("passed");
    return true;
  }
}

var elEmail = document.getElementById("email");
elEmail.onblur = checkEmail;

function checkPass() {
  let elMsg = document.getElementById("check-pas");

  if (this.value.length < 5) {
    elMsg.textContent = "⚠️Check your password agian!";
    elMsg.classList.remove("passed");
    elMsg.classList.add("error");
    return false;
  } else {
    elMsg.textContent = "Passed ✓";
    elMsg.classList.remove("error");
    elMsg.classList.add("passed");
    return true;
  }
}
var elPass = document.getElementById("password");
elPass.onblur = checkPass;

document.getElementById("login-link").addEventListener("click", function (e) {
  let email = checkEmail.call(elEmail);
  let pas = checkPass.call(elPass);

  if (!email || !pas) {
    e.preventDefault();
    alert("Please check your log-in again!");
  }
});


let togglePas = document.getElementById("togglePassword");
let pasinput = document.getElementById("password");
togglePas.addEventListener("click",function(){
  let type = pasinput.getAttribute("type") === "password" ? "text" : "password"; 
  pasinput.setAttribute("type",type);
  
}
)
