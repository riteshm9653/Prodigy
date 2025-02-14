function scrollToContact() {
  // Scroll to the contact form section smoothly
  const contactSection = document.querySelector(".contact-body");
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}
window.addEventListener("scroll", () => {
  const contactBg = document.querySelector(".contact-bg");
  if (contactBg) {
    const rect = contactBg.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      contactBg.style.opacity = 1;
      contactBg.style.transform = "translateY(0)";
    } else {
      contactBg.style.opacity = 0.8;
      contactBg.style.transform = "translateY(-20px)";
    }
  }
});

document.querySelectorAll(".info-item").forEach((item) => {
  item.addEventListener("click", () => {
    const textToCopy = item.querySelector(".text").innerText;
    navigator.clipboard.writeText(textToCopy).then(() => {
      alert(`${textToCopy} has been copied to clipboard!`);
    });
  });
});
const contactItems = document.querySelectorAll(".info-item");

const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);

contactItems.forEach((item) => observer.observe(item));
document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent the form from submitting

  // Collect form inputs
  const firstName = document.querySelector('input[placeholder="First-Name"]');
  const lastName = document.querySelector('input[placeholder="last-Name"]');
  const email = document.querySelector('input[placeholder="E-mail"]');
  const phone = document.querySelector('input[placeholder="Phone-Number"]');
  const message = document.querySelector('textarea[placeholder="messages"]');

  // Validation checks
  if (!firstName.value.trim()) {
    alert("Please enter your first name.");
    firstName.focus();
    return;
  }

  if (!lastName.value.trim()) {
    alert("Please enter your last name.");
    lastName.focus();
    return;
  }

  if (!email.value.trim() || !/\S+@\S+\.\S+/.test(email.value)) {
    alert("Please enter a valid email address.");
    email.focus();
    return;
  }

  if (!phone.value.trim() || !/^\d{10}$/.test(phone.value)) {
    alert("Please enter a valid 10-digit phone number.");
    phone.focus();
    return;
  }

  if (!message.value.trim()) {
    alert("Please enter your message.");
    message.focus();
    return;
  }

  // Success message
  alert("Thank you for your message. We will get back to you shortly!");

  // Reset the form
  document.querySelector("form").reset();
});
const sendButton = document.querySelector(".send-btn");

sendButton.addEventListener("click", () => {
  sendButton.classList.add("clicked");
  setTimeout(() => {
    sendButton.classList.remove("clicked");
  }, 300); // Reset animation after 300ms
});

// Zoom Button Interaction
document.getElementById("zoomBtn").addEventListener("click", function () {
  const iframe = document.querySelector(".map iframe");

  // Toggle zoom in/out effect
  if (iframe.style.transform === "scale(1.05)") {
    iframe.style.transform = "scale(1)";
    this.textContent = "Zoom In";
  } else {
    iframe.style.transform = "scale(1.05)";
    this.textContent = "Zoom Out";
  }
});
