import "./styles.css";
import { loadHome } from "./home.js";
import { loadMenu } from "./menu.js";
import { loadContact } from "./contact.js";

const contentDiv = document.getElementById("content");
const homeBtn = document.getElementById("home-btn");
const menuBtn = document.getElementById("menu-btn");
const contactBtn = document.getElementById("contact-btn");

function renderTab(tabElement) {
    contentDiv.textContent = "";
    contentDiv.appendChild(tabElement);
}

homeBtn.addEventListener("click", () => renderTab(loadHome()));
menuBtn.addEventListener("click", () => renderTab(loadMenu()));
contactBtn.addEventListener("click", () => renderTab(loadContact()));

renderTab(loadHome());