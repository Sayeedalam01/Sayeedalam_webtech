console.log("connected");

let count = 0;
function collectFormData() {

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  document.getElementById("emailErr").innerHTML = "";
  document.getElementById("passErr").innerHTML = "";

  let isValid = true;

  if (!email.includes("@")) {
    document.getElementById("emailErr").innerHTML = "Email must contain @";
    isValid = false;
  }

  if (password.length < 6) {
    document.getElementById("passErr").innerHTML =
      "Password should not be less than 6 characters";
    isValid = false;
  }

  else if (!password.includes("#")) {
    document.getElementById("passErr").innerHTML =
      "Password must contain #";
    isValid = false;
  }

  if (!isValid) {
    count++;
    document.getElementById("errCount").innerHTML =
      "Wrong Submission Count: " + count;
    return false;
  }
  
  alert("Login Successful!");
  return true;
}