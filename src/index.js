import "./styles/main.scss";
import './prism';


document.addEventListener("DOMContentLoaded", function () {
    const nav = document.querySelector(".main-navigation");
    const burger = document.querySelector(".burger");
    hljs.initHighlightingOnLoad();
    function toggleNav() {
        nav.classList.toggle("open");
        burger.classList.toggle("open");
    }

    burger.addEventListener("click", toggleNav);

    const links = document.querySelectorAll("header nav a");
    links.forEach(link => link.addEventListener('click', scrollToLink));

    function scrollToLink(event) {
        event.preventDefault();
        const navHeight = document.querySelector(".navbar").offsetHeight;
        const offsetTop = document.querySelector(this.hash).offsetTop;
        console.log(offsetTop);
        window.scrollTo({
            top: offsetTop - navHeight,
            behavior: 'smooth'
        });
        window.history.pushState({}, "", this.hash);
        toggleNav();
    }
});