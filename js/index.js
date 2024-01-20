AOS.init();

// courses section start
const courses = [
  {
    title: "Revvex",
    imgSrc: "./image/finance-image-one.jpg",
    iconClass: "fa-chart-simple",
    description:
      "Revvex presents a financial planning tool that eradicates accounting and budgeting errors effortlessly. Gain a concise, user-friendly, and graphical depiction of your company’s financial status using Revvex! ",
    link: "https://revvex.io",
  },
  {
    title: "Aiico Capital",
    imgSrc: "./image/investment-image.jpg",
    iconClass: "fa-chart-pie",
    description: `
    AIICO Capital Limited, also known as "AIICO Capital" or the "Company," stands as a prominent and secure investment management organization in Nigeria. It serves an extensive clientele exceeding 13,000, inclusive of both institutional and retail clients across diverse industries within the country.`,
    link: "https://aiico.revvex.io",
  },
  {
    title: "SmartSend",
    imgSrc: "./image/swap-image.webp",
    iconClass: "fa-list-check",
    description:
      "Embark on mastering Project Management via our comprehensive course, exploring methodologies, tools, and strategies crucial for successful project planning, execution, and delivery.",
    link: "https://www.smartsend.uk/",
  },
  {
    title: "Mance",
    imgSrc: "./image/mance-image-two.jpg",
    iconClass: "fa-list-check",
    description:
      "Mance drives employee performance by fostering regular, transparent performance reviews and ensuring a happy workforce through features like Onboarding Management, Performance Oversight, Mission Plan Alignment, Multibranch Management, In-App Engagements, and Task Management.",
    link: "https://mance.io",
  },
  {
    title: "Zojapay",
    imgSrc: "./image/zojapay-image.svg",
    iconClass: "fa-list-check",
    description:
      "Mance drives employee performance by fostering regular, transparent performance reviews and ensuring a happy workforce through features like Onboarding Management, Performance Oversight, Mission Plan Alignment, Multibranch Management, In-App Engagements, and Task Management.",
    link: "https://zojapay.com",
  },
];

document.addEventListener("DOMContentLoaded", function () {
  const carouselInner = document.querySelector(".carousel-inner");

  courses.forEach((course, index) => {
    const courseElement = document.createElement("div");
    courseElement.className =
      index === 0 ? "carousel-item active" : "carousel-item";

    courseElement.innerHTML = `
      <div class="row">
        <div class="col">
          <div class="course position-relative">
            <div class="position-relative">
            <div class="zoomable-image-wrapper">
            <a href="${course.link}" target="_blank" class="d-block">
                  <img src="${course.imgSrc}" class="zoomable-image" />
                  </a>
                </div>
              <div class="position-absolute bottom-0 start-50 translate-middle-x icon">
                <i class="fa-solid ${course.iconClass}"></i>
              </div>
            </div>
            <h5 class="mt-5 pt-4">0${index + 1}. ${course.title}</h5>
            <p>${course.description}</p>
          </div>
        </div>
      </div>
    `;

    carouselInner.appendChild(courseElement);
  });
});

// courses section end

// counter accomplishment start
const counters = [
  { label: "Html5", imgSrc: "./image/file-type-html.svg" },
  { label: "Css3", imgSrc: "./image/file-type-css.svg" },
  { label: "JavaScript", imgSrc: "./image/javascript-js.svg" },
  { label: "Tailwind CSS", imgSrc: "./image/tailwind-css.svg" },
  { label: "SCSS", imgSrc: "./image/file-type-scss.svg" },
  { label: "Bootstrap", imgSrc: "./image/bootstrap.svg" },
  { label: "TypeScript", imgSrc: "./image/typescript-icon.svg" },
  { label: "React/React Native", imgSrc: "./image/react.svg" },
  { label: "NextJS", imgSrc: "./image/nextjs.svg" },
  { label: "VueJS", imgSrc: "./image/vue.svg" },
  { label: "NodeJS", imgSrc: "./image/nodejs.svg" },
];

document.addEventListener("DOMContentLoaded", function () {
  const counterSection = document.querySelector(".counter-section");

  // Loop through the counters array and generate HTML for each counter
  counters.forEach((counter) => {
    const counterElement = document.createElement("div");
    counterElement.className = "counter"; // Add counter class

    // Adjust the size of the images or use smaller images
    counterElement.innerHTML = `
      <img src=${counter.imgSrc} alt=${counter.label} class="counter-img" />
      <p>${counter.label}</p>
    `;

    // Append each counter element to the counter section
    counterSection.appendChild(counterElement);
  });
});

// counter accomplishment end

// testimonial start
document.addEventListener("DOMContentLoaded", function () {
  const testimonialSection = document.getElementById("testimonial-section");

  const testimonials = [
    {
      name: "Ohidoa Oluwatobi",
      company: "Zojatech",
      title: "Team Lead Engineering",
      avatar: "image/tobi-image.png",
      text: "Hassan meticulous focus on detail and dedication to producing top-notch code is an exemplary model for the team. His profound expertise in frontend development substantially enhances the user experience, and your proactive problem-solving approach is truly admirable.",
    },
    {
      name: "Inioluwa D. Omidiran",
      company: "Aristack",
      title: "Senior Business Analyst",
      avatar: "image/ini-image.png",
      text: "Hassan proficiency in frontend development is truly inspiring. The way he handles complexities and seamlessly integrate various components is impressive. His contributions significantly elevates his work, and hhis willingness to collaborate makes working together a pleasure. Keep up the fantastic work!",
    },
    {
      name: "Abochi Chinonso",
      company: "IT Horizons",
      title: "Backend Engineer",
      avatar: "image/nonso-image.png",
      text: "Hassan adept frontend skills effortlessly merge with our backend systems, creating a seamless integration. His grasp of backend functionalities and its synchronization with frontend development is remarkable. His collaborative efforts result in a unified product, ensuring a smooth and efficient interaction between the frontend and backend. Great job!",
    },
    // Add other testimonials here
  ];

  // Loop through the testimonials array and generate HTML for each testimonial
  testimonials.forEach((testimonial, index) => {
    const testimonialElement = document.createElement("div");
    testimonialElement.className = `carousel-item${
      index === 0 ? " active" : ""
    }`;

    testimonialElement.innerHTML = `
      <div class="testimonia p-4">
        <div class="person">
          <img src="${testimonial.avatar}" alt="" />
          <div class="text ms-3">
            <h6 class="mb-0">${testimonial.name}</h6>
            <small>${testimonial.title},<br /> ${testimonial.company}</small>
      
          </div>
        </div>
        <p class="pt-4">${testimonial.text}</p>
        <div class="stars">
          ${'<i class="fa-solid fa-star"></i>'.repeat(5)}
        </div>
      </div>
    `;

    // Append each testimonial element to the testimonial section
    testimonialSection.appendChild(testimonialElement);
  });

  // Initialize the carousel without controls
  const carousel = new bootstrap.Carousel(
    document.getElementById("testimonialCarousel"),
    {
      interval: 3000, // Interval set to 2 seconds
      controls: false, // Disable navigation arrows
      pause: "hover", // Pause on hover
    }
  );
});

const textElements = {
  text: [
    "Hassan Lamidi.",
    "A Software Engineer.",
    "Frontend Heavy.",
    "Backend Light :)",
  ],
};

function typeWriterEffect(elementId, texts, delay) {
  const element = document.getElementById(elementId);
  let textIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function type() {
    const currentText = texts[textIndex];

    if (isDeleting) {
      element.textContent = `I am ${currentText.substring(0, charIndex)}`;
      charIndex--;

      if (charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
      }
    } else {
      element.textContent = `I am ${currentText.substring(0, charIndex)}`;
      charIndex++;

      if (charIndex === currentText.length + 1) {
        isDeleting = true;
        setTimeout(type, 1000); // Delay before starting deletion
        return;
      }
    }

    setTimeout(type, delay);
  }

  type();
}

// Start the typewriter effect for textToggle
typeWriterEffect("textToggle", textElements.text, 200);

// Event listener for scroll
// window.addEventListener("scroll", handleScroll);

function submitForm(event) {
  event.preventDefault();

  const firstName = document.getElementById("first_name").value;
  const lastName = document.getElementById("last_name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  const submitButton = document.getElementById("submitBtn");
  submitButton.innerText = "Sending...";
  submitButton.disabled = true;

  const data = {
    firstName,
    lastName,
    email,
    message,
  };

  fetch("/submit-form", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (response.ok) {
        // Handle success, e.g., show a success message to the user
        console.log("Form submitted successfully");
        // Reset form fields after submission
        document.getElementById("first_name").value = "";
        document.getElementById("last_name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
      } else {
        // Handle error, e.g., show an error message to the user
        console.error("Form submission failed");
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    })
    .finally(() => {
      submitButton.innerText = "Submit";
      submitButton.disabled = false;
    });
}
