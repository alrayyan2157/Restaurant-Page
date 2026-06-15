export function loadMenu() {
    const container = document.createElement("div");
    container.classList.add("tab-content");

    const headline = document.createElement("h1");
    headline.textContent = "Our Menu";

    const menuList = document.createElement("ul");
    
    const items = [
        "Truffle Mushroom Risotto - $24",
        "Pan-Seared Salmon fillets - $28",
        "Artisanal Chocolate Lava Cake - $10"
    ];

    items.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        menuList.appendChild(li);
    });

    container.appendChild(headline);
    container.appendChild(menuList);
    return container;
}