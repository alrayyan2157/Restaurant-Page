export function loadHome() {
    const container = document.createElement("div");
    container.classList.add("tab-content");

    const headline = document.createElement("h1");
    headline.textContent = "Welcome to The Restaurant";

    const description = document.createElement("p");
    description.textContent = "Experience world-class culinary creations made with fresh, locally sourced ingredients. Our warm atmosphere and exceptional service make every meal unforgettable.";

    container.appendChild(headline);
    container.appendChild(description);
    return container;
}