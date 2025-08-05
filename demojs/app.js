"use strict";
$(document).ready(function () {
    const myImage = document.querySelector("img");
    // sekli klik etdikde sekli deyisir
    myImage.addEventListener("click", () => {
        const mySrc = myImage.getAttribute("src");
        if (mySrc === "images/firefox-icon.jpeg") {
            myImage.setAttribute("src", "images/firefox2.jpeg");
        } else {
            myImage.setAttribute("src", "images/firefox-icon.jpeg");
        }
    });


    // yaziya klik etdikde ustunden xett cekir ve qirmizi renge boyayir.
    const listItems = document.querySelectorAll("li");

    function toggleDone(e) {
        if (!e.target.className) {
            e.target.className = "done";
        } else {
            e.target.className = "";
        }
    }

    listItems.forEach((item) => {
        item.addEventListener("click", toggleDone);
    });

    // Store a reference to the <h2> in a variable
    const myHeading = document.querySelector("h2");
    // Update the text content of the <h2>
    myHeading.textContent = "Hello world!";

});