window.addEventListener("DOMContentLoaded", () => {
    const headerButton = document.querySelector(".header-button");
    const sectionWhoAmI = document.querySelector("#whoami");

    headerButton.addEventListener("click", () => sectionWhoAmI.scrollIntoView({ behavior: "smooth" }));

    const burger = document.querySelector(".naviguator-burger");
    const list = document.querySelector(".naviguator-list");

    burger.addEventListener("click", () => {
        list.classList.toggle("active");
        burger.classList.toggle("active");
    });

    const cardImages = document.querySelectorAll(".card-image");

    cardImages.forEach((cardImage) => {
        cardImage.addEventListener("click", () => {
            cardImage.classList.toggle("active");
        });
    });
});
