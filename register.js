let register = document.getElementById("register");
let fullName = document.getElementById("fullName");
let userName = document.getElementById("userName");
let email = document.getElementById("email");
let phoneNum = document.getElementById("phoneNum");
let password = document.getElementById("password");
let confirmPassword = document.getElementById("confirmPassword");
let icons = document.querySelectorAll(".icon");
let darkMode = document.querySelector(".dark-mode");
let errorConfirm = document.getElementById("errorConfirm");
let body = document.querySelector("body");
let arr = JSON.parse(localStorage.getItem("userArray"))
  ? JSON.parse(localStorage.getItem("userArray"))
  : [];
let userGender;
let hide = false;
let dark = false;

let id = 0;
form.addEventListener("submit", (e) => {
  e.preventDefault(); //sehifenin tez yenilenmesinin qarsisini alir
  let genders = document.querySelectorAll('input[name="gender"]');
  genders.forEach((gender) => {
    if (gender.checked) {
      userGender = gender.value;
    }
  });
  let sameUser = arr.find((item) => {
    return email.value == item.email || userName.value == item.userName;
  });
  console.log(sameUser);
  if (confirmPassword.value != password.value) {
    errorConfirm.style.display = "block";
  } else if (sameUser) {
    alert("Siz artiq qeydiyyatdan kecmisiniz");
  } else {
    const lastItem = arr[arr.length - 1];
    const incrementId = lastItem?.id ? lastItem.id + 1 : 1;

    let obj = {
      id: incrementId,
      fullName: `${fullName.value}`,
      userName: `${userName.value}`,
      email: `${email.value}`,
      phoneNum: `${phoneNum.value}`,
      password: `${password.value}`,
      confirmPassword: `${confirmPassword.value}`,
      gender: `${userGender}`,
      createDate: new Date().toISOString(),
    };
    arr.push(obj);
    console.log(obj);
    localStorage.setItem("userArray", JSON.stringify(arr));
    window.location.assign("login.html");
  }
});
icons.forEach((icon) => {
  icon.addEventListener("click", () => {
    if (hide == false) {
      icon.previousElementSibling.type = "text";
      hide = true;
    } else {
      icon.previousElementSibling.type = "password";
      hide = false;
    }
    icon.firstElementChild.classList.toggle("active");
    icon.lastElementChild.classList.toggle("active");
  });
});

darkMode.addEventListener("click", () => {
  if (dark == false) {
    body.style.backgroundColor = "#2b4162";
    body.style.backgroundImage =
      "linear-gradient(315deg, #2b4162 0%, #12100e 74%)";
    register.style.backgroundColor = "#2b4162";
    register.style.backgroundImage =
      "linear-gradient(315deg, #2b4162 0%, #12100e 74%)";
    dark = true;
  } else {
    body.style.background = "linear-gradient(135deg, #71b7e6, #9b59b6)";
    dark = false;
    register.style.background = "linear-gradient(135deg, #71b7e6, #9b59b6)";
  }
  darkMode.firstElementChild.classList.toggle("active");
  darkMode.lastElementChild.classList.toggle("active");
});
