// Listen for the scroll event
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");

  // Check the scroll position
  if (window.scrollY > 50) {
    // If scrolled down, change the background color to white
    navbar.style.backgroundColor = "white";
    navbar.style.color = "black";
    navbar.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.2)";
  } else {
    // If at the top, revert to the original color
    navbar.style.backgroundColor = "#030303";
    navbar.style.boxShadow = "none";
    navbar.style.color = "whitesmoke";
  }
});

document.getElementById("survey-link").addEventListener("click", function (e) {
  e.preventDefault(); // Prevent the default jump-to-anchor behavior

  const targetElement = document.getElementById("survey");
  const offset = targetElement.getBoundingClientRect().top;
  const yOffset = -200;

  // Smooth scroll to the target element
  window.scrollTo({
    top: offset + yOffset,
    behavior: "smooth",
  });
});

tippy('[data-tippy-content]');



function sendEmail() {
  // Get the user input from the textareas
  const resourceRequest = document.querySelector("#resource-request").value;
  const helpfulInfo = document.querySelector("#helpful-info").value;
  const interestedInContact = document.querySelector(
    "#interested-in-contact"
  ).value;

  emailjs.init("vLasNrhHvtqmONvWF");
  // Use the EmailJS API to send the email
  emailjs
    .send("service_nhpwrmp", "template_t1of0oe", {
      resource_request: resourceRequest,
      helpful_info: helpfulInfo,
      contact_interest: interestedInContact,
    })
    .then(
      function (response) {
        console.log("Email sent successfully", response);

        // Display the custom alert
        const customAlert = document.querySelector("#custom-alert");
        customAlert.style.display = "block";

        // Clear the form text areas
        document.querySelector("#resource-request").value = "";
        document.querySelector("#helpful-info").value = "";
        document.querySelector("#interested-in-contact").value = "";
        setTimeout(function () {
          customAlert.style.display = "none";
        }, 3000);
      },
      function (error) {
        console.error("Email sending failed", error);
        // You can display an error message to the user if needed.
      }
    );
}

// Initial language
let currentLanguage = "en";

// Translations
const translations = {
  en: {
    title: "Critical Resources",
    survey: "Survey",
    navbar: "Critical Resources",
    content:
      "Here are some critical support and resource options for members from LGBTQI+ communities who are struggling with online issues, discrimination, and other problems.",
    contact: "Contact",
    Eng: "Arabic",
    EMHS: "Mental Health Support",
    ELA: "Emergency Legal Aid",
    EHS: "Emergency Housing Support",
    DSSS: "Digital Security Service Support",
    DSTR: "Digital Security Training Resources",
    // 'ONL': 'Organisation name & logo',
    WH: "Working hours",
    CI: "Contact information",
    report: 'You can report hate speech and harmful content from social media targetting our communities here. Any instances of online outing, doxxing, etc. We do not have the capacity to respond to individual cases, but we will make sure the data is used to monitor conditions online.',
    date: 'Information last updated:',
    answers: 'The anonymised answers from this survey will be shared with humanitarian organizations ',
    one: '1. What other resources would you like access to?',
    two: '2. What else would you find helpful?',
    
  },
  ar: {
    title: "مصادر وخدمات",
    survey: "استطلاع",
    navbar: "مصادر وخدمات",
    content:
      "  جمعنا في الأسفل أهم الخدمات الضرورية والفعّالة المتوفرة في لبنان للأفراد والجماعات والمجتمعات الكوير أو الميم-عين، والتي يمكن الاستفادة منها في حال التعرّض لأي مشاكل عبر الإنترنت وما قد ينتج عنها من آثار وسلبيات.",
    contact: "اتصال",
    Eng: "Eng",
    EMHS: "خدمات الصحة النفسية",
    ELA: "خدمات قانونية",
    EHS: "خدمات السكن الطارئة",
    DSSS: "خدمات الأمن الحماية الرقمية",
    DSTR: "مصادر عن الأمن والحماية الرقمية",
    // 'ONL' : '',
    WH: "ساعات العمل",
    CI: "معلومات التواصل",
    report: 'آلية رصد خطاب الكراهية والمحتوى الضار على الانترنت:    يمكنك المساعدة في رصد خطاب الكراهية والمحتوى الضار على الانترنت، من هنا. لن نتمكن للأسف من توفير مساعدات فورية لحالات فردية، ولكن نأمل بمساعدتكن/م أن نرصد جميع تلك الحالات وبناء خطوات فعّالة بناءً عليهاز',
    date : 'أخر تحديث للمعلومات',
    answers : 'بعض نتائج هذه الاستمارة السريعة ستتم مشاركتها مع المنظمات المدنية المذكورة أعلاه',
    one: 'ما هي الخدمات والمصادر الغير متوفرة هنا وتودون الحصول عليها',
    two: 'أي اقترحات أو أفكار تودون مشاركتها معنا',
  },
};

function toggleLanguage() {
  // Toggle the language between English and Arabic
  currentLanguage = currentLanguage === "en" ? "ar" : "en";

  // Update the title
  document.title = translations[currentLanguage]["title"];

  document.querySelector(".navbar h1").textContent =
    translations[currentLanguage]["navbar"];
  document.querySelector(".lang").textContent =
    translations[currentLanguage]["Eng"];
  document.querySelector("#first h1").textContent =
    translations[currentLanguage]["EMHS"];
  document.querySelector("#second h1").textContent =
    translations[currentLanguage]["ELA"];
  document.querySelector("#third h1").textContent =
    translations[currentLanguage]["EHS"];
  document.querySelector("#fourth h1").textContent =
    translations[currentLanguage]["DSSS"];
  document.querySelector("#fifth h1").textContent =
    translations[currentLanguage]["DSTR"];
  // Update the "Contact" text
  document.querySelector(".elements .con").textContent =
    translations[currentLanguage]["contact"];
  document.querySelector(".report").textContent =
    translations[currentLanguage]["report"];
  document.querySelector(".report p").textContent =
    translations[currentLanguage]["date"];
  document.querySelector(".sur").textContent =
    translations[currentLanguage]["answers"];
  document.querySelector(".elements h2:last-child a").textContent =
    translations[currentLanguage]["survey"];
  document.querySelector(".survey-form h1:nth-of-type(1)").textContent =
    translations[currentLanguage]["one"];
  document.querySelector(".survey-form h1:nth-of-type(2)").textContent =
    translations[currentLanguage]["two"];
  

  var elements = document.querySelectorAll(".first-rectangle");

  // Loop through the selected elements
  elements.forEach(function (element) {
    // Select the <h2> elements for "Working hours" and "Contact information" within each first-rectangle
    var workingHoursH2 = element.querySelector("h2:nth-of-type(2)"); // Index 2 (0-based)
    var contactInformationH2 = element.querySelector("h2:nth-of-type(3)"); // Index 3 (0-based)

    // Update the text content of the selected <h2> elements
    workingHoursH2.textContent = translations[currentLanguage]["WH"];
    contactInformationH2.textContent = translations[currentLanguage]["CI"];
  });

  // Update the text within the <p> element
  document.querySelector(".content p").textContent =
    translations[currentLanguage]["content"];
}
