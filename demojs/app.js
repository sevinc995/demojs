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

    // function setUserName() {
    //     const myName = prompt("Please enter your name.");
    //     localStorage.setItem("name", myName);
    //     myHeading.textContent = `Mozilla is cool, ${myName}`;
    // }
    // if (!localStorage.getItem("name")) {
    //     setUserName();
    // } else {
    //     const storedName = localStorage.getItem("name");
    //     myHeading.textContent = `Mozilla is cool, ${storedName}`;
    // }
});