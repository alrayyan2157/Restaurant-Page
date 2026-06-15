export function loadContact() {
    const container = document.createElement("div");
    container.classList.add("tab-content");

    const headline = document.createElement("h1");
    headline.textContent = "Contact Us";

    const info = document.createElement("p");
    info.textContent = "📞 Phone: (555) 123-4567 | ✉️ Email: dine@restaurant.com";
    container.appendChild(headline);
    container.appendChild(info);
    return container;
}