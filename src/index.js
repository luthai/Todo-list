import { format } from "date-fns";
import inboxPage from "./inbox";
import todayPage from "./today";
import { Todo_list } from "./todo_list";
import "./style.css";

inboxPage();

const inbox_page = document.getElementById("inbox-page");
inbox_page.addEventListener("click", (e) => {
    const main_bar = document.getElementById("FP-mainbar");
    main_bar.textContent = " ";

    inboxPage();
});

const today_page = document.getElementById("today-page");
today_page.addEventListener("click", (e) => {
    const main_bar = document.getElementById("FP-mainbar");
    main_bar.textContent = " ";

    todayPage();
});

const body = document.querySelector("body");
body.addEventListener("click", (event) => {
    if(event.target.classList.contains("btn-add-task")) {
        togglePopup();
    }
});

const cancel_popup = document.querySelector(".btn-close-popup");
cancel_popup.addEventListener("click", (e) => {
    togglePopup();
});


function togglePopup() {
    const overlay = document.getElementById("popup-overlay");
    overlay.classList.toggle("show");
    console.log(overlay);
}

/*
const todo = new Todo_list("World", "hello", new Date(2014, 1, 11), 1, "my project");
console.log(todo);


const date = format(new Date(2014, 0, 11), 'dd-MM-yyyy')
console.log(date);


function storageAvailable(type) {
    let storage;
    try {
        storage = window[type];
        const x = "__storage_test__";
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    } catch (e) {
        return (
            e instanceof DOMException &&
            e.name === "QuotaExceededError" &&
            // acknowledge QuotaExceededError only if there's something already stored
            storage &&
            storage.length !== 0
        );
    }
}

if (storageAvailable("localStorage")) {
    console.log("yes storage");
} else {
    console.log("no storage");
}*/