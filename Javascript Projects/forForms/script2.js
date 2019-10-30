let userName = document.forms["signupForm"]["uName"].Value;
let password = document.getElementById("passWord");
let email = document.getElementById("Email");
let address = document.getElementById("Address");
let checkUserName = document.getElementById("checkLength");

document.getElementById("btnUN").addEventListener("click", authentication);

function authentication(){
    
    if (userName.length > 11){
        checkUserName.innerText = "Username must be less than 11 characters.";
    }
}

authentication();