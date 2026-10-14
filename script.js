const PRESIDENT_EMAIL = "PRESIDENT_EMAIL@REPLACE_ME.COM";

const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

navToggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => navLinks.classList.remove("open"));
});

const form = document.getElementById("sponsorForm");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const companyName = document.getElementById("companyName").value.trim();
  const contactName = document.getElementById("contactName").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const tier = document.getElementById("tier").value;
  const message = document.getElementById("message").value.trim();

  const subject = `Sponsorship Inquiry: ${companyName}`;
  const body =
    `Company Name: ${companyName}\n` +
    `Contact Name: ${contactName}\n` +
    `Email: ${email}\n` +
    `Phone: ${phone || "N/A"}\n` +
    `Interested Tier: ${tier}\n\n` +
    `Message:\n${message || "N/A"}`;

  const mailtoLink = `mailto:${PRESIDENT_EMAIL}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;

  window.location.href = mailtoLink;
});
