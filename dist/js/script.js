// Navbar Fixed
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;
  const toTop = document.querySelector("#to-top");

  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
    toTop.classList.remove("hidden");
    toTop.classList.add("flex");
  } else {
    header.classList.remove("navbar-fixed");
    toTop.classList.remove("flex");
    toTop.classList.add("hidden");
  }
};

// Hamburger Menu
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

// Klik diluar hamburger
window.addEventListener("click", function (e) {
  if (e.target != hamburger && e.target != navMenu) {
    hamburger.classList.remove("hamburger-active");
    navMenu.classList.add("hidden");
  }
});

// Darkmode Toggle
const darkToggle = document.querySelector("#dark-toggle");
const html = document.querySelector("html");

darkToggle.addEventListener("click", function () {
  if (darkToggle.checked) {
    html.classList.add("dark");
    localStorage.theme = "dark";
  } else {
    html.classList.remove("dark");
    localStorage.theme = "light";
  }
});

if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
  darkToggle.checked = true;
  html.classList.add("dark");
  localStorage.theme = "dark";
} else {
  darkToggle.checked = false;
  html.classList.remove("dark");
  localStorage.theme = "light";
}

// Google contact form
const scriptURL =
  "https://script.google.com/macros/s/AKfycbyFDbuPa-rXPcppmgrUBEFYpoFYG9dBWTyUNbaRhvOIfzhOz1665fBRPmYdNXwZKzPH/exec";
const form = document.forms["submit-to-google-sheet"];
const btnKirim = document.querySelector(".btn-kirim");
const btnLoading = document.querySelector(".btn-loading");
const myAlert = document.querySelector(".my-alert");
const btnClose = document.querySelector(".btn-close");

// Wa Contact Form
const formatMessage = (obj) => {
  return `Data Customer
    			Nama: ${obj.name}
    			Email: ${obj.email}
    			Pesan: ${obj.pesan}
    			`;
};

// Ketika tombol submit ditekan
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = new FormData(form);

  const ObjData = {
    name: formData.get("nama"),
    email: formData.get("email"),
    pesan: formData.get("pesan"),
  };

  const sendData = formatMessage(ObjData);

  window.open(
    "http://wa.me/6281253428575?text=" + encodeURIComponent(sendData),
  );

  form.reset();
});

// Ketika tombol submit di klik
// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   // Tampilkan tombol loading, hilangkan tombol kirim
//   btnLoading.classList.toggle("hidden");
//   btnKirim.classList.toggle("hidden");

//   fetch(scriptURL, { method: "POST", body: new FormData(form) })
//     .then((response) => {
//       // Tampilkan tombol loading, hilangkan tombol kirim
//       btnLoading.classList.toggle("hidden");
//       btnKirim.classList.toggle("hidden");
//       // Tamplikan Alert
//       myAlert.classList.toggle("hidden");
//       // Reset Form-nya
//       form.reset();

//       console.log("Success!", response);
//     })
//     .catch((error) => console.error("Error!", error.message));
// });

btnClose.addEventListener("click", function () {
  myAlert.classList.toggle("hidden");
});
