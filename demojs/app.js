"use strict";
$(document).ready(function () {
        const myImage = document.querySelector("img");

        myImage.addEventListener("click", () => {
            const mySrc = myImage.getAttribute("src");
            if (mySrc === "images/firefox-icon.jpeg") {
            myImage.setAttribute("src", "images/firefox2.jpeg");
            } else {
            myImage.setAttribute("src", "images/firefox-icon.jpeg");
            }
        });



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
});