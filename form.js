const div = document.createElement("div");
div.innerHTML = ` <div class="container">
       
<form class="form" id="form">
    <div class="header">
        <h2>Create Account</h2>
    </div>
    <div class="form-control">
        <label>Username</label>
        <input type="text" name="" id="username" placeholder="Enter Your Name" autocomplete="off">
        <i class="fas fa-check-circle"></i>
        <i class="fas fa-exclamation-circle"></i>
        <small>Error Msg</small>
    </div>
    <div class="form-control">
        <label>Email</label>
        <input type="Email" name="" id="email" placeholder="Enter Your Email" autocomplete="off">
        <i class="fas fa-check-circle"></i>
        <i class="fas fa-exclamation-circle"></i>
        <small>Error Msg</small>
    </div>
    <div class="form-control">
        <label>Phone Number</label>
        <input type="Number" name="" id="phone" placeholder="Enter Your Number" autocomplete="off">
        <i class="fas fa-check-circle"></i>
        <i class="fas fa-exclamation-circle"></i>
        <small>Error Msg</small>
    </div>
    <div class="form-control">
        <label>Password</label>
        <input type="Password" name="" id="password" placeholder="Enter Your Password" autocomplete="off">
        <i class="fas fa-check-circle"></i>
        <i class="fas fa-exclamation-circle"></i>
        <small>Error Msg</small>
    </div> 
    <div class="form-control">
        <label>Confirm Password</label>
        <input type="password" name="" id="Cpassword" placeholder="Enter Your Again Password" autocomplete="off">
        <i class="fas fa-check-circle"></i>
        <i class="fas fa-exclamation-circle"></i>
        <small>Error Msg</small>
    </div>
    <input class="col-" type="submit" value="submit" name=""></input>
    
</form>
</div>`;
{
}
document.body.append(div);
let form = document.getElementById("form");
let username = document.getElementById("username");
let email = document.getElementById("email");
let phone = document.getElementById("phone");
let password = document.getElementById("password");
let Cpassword = document.getElementById("Cpassword");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  trimVal();
  successmsg();
  errormsg();
  configrate();
});

const trimVal = () => {
  let usernameVal = username.value.trim();
  let emailVal = email.value.trim();
  let phoneVal = phone.value.trim();
  let passwordVal = password.value.trim();
  let CpasswordVal = Cpassword.value.trim();

  if (usernameVal === "") {
    errormsg(username, "username cannot be blank at this time");
  } else if (usernameVal.length <= 2) {
    errormsg(
      username,
      "minimun at least 3 or more character in your line or feild"
    );
  } else {
    successmsg(username);
  }

  if (emailVal === "") {
    errormsg(email, "Email cannot be bank at this time");
  } else if (!configrate(emailVal)) {
    errormsg(email, "this Email cannot be exsits");
  } else {
    successmsg(email);
  }

  if (phoneVal === "") {
    errormsg(phone, "Phone Number cannot be bank at this time");
  } else if (phoneVal.length != 10) {
    errormsg(phone, "Number Validity only 10 character");
  } else {
    successmsg(phone);
  }

  if (passwordVal === "") {
    errormsg(password, "password cannot be bank at this time");
  } else if (passwordVal.length > 6) {
    errormsg(password, "password only 6 character");
  } else {
    successmsg(password);
  }
  if (CpasswordVal === "") {
    errormsg(Cpassword, "password cannot be bank at this time");
  } else if (passwordVal !== CpasswordVal) {
    errormsg(Cpassword, "Confirm Password not Match");
  } else {
    successmsg(Cpassword);
  }
};

const errormsg = (input, errormsgs) => {
  let formControl = input.parentElement;
  formControl.className = "form-control error";
  let small = formControl.querySelector("small");
  small.textContent = errormsgs;
};
const successmsg = (input) => {
  let formControl = input.parentElement;
  formControl.className = "form-control success";
};

const configrate = (emailVal) => {
  let symbol = emailVal.indexOf("@");
  if (symbol < 1) return false;
  let dot = emailVal.lastIndexOf(".");
  if (dot <= symbol + 2) return false;
  return true;
};
