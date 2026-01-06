/* =================================
   STEP 1: DOM Elements Selection
================================= */

// সব পেজ নাম্বার বাটন
let pages = document.getElementsByClassName("pagination-item");

// Navigation বাটন
let nextBtn = document.querySelector(".btn-next");
let previousBtn = document.querySelector(".btn-previous");
let firstBtn = document.querySelector(".btn-first");
let lastBtn = document.querySelector(".btn-last");


/* =================================
   STEP 2: Core Variables
================================= */

// বর্তমানে কোন পেজে আছি
let currentPage = 1;

// মোট পেজ সংখ্যা
let totalPages = 5;


/* =================================
   STEP 3: Button Enable / Disable
================================= */

function disablePreviousAndFirstBtn() {
  previousBtn.disabled = true;
  firstBtn.disabled = true;
}

function enablePreviousAndFirstBtn() {
  previousBtn.disabled = false;
  firstBtn.disabled = false;
}

function disableNextAndLastBtn() {
  nextBtn.disabled = true;
  lastBtn.disabled = true;
}

function enableNextAndLastBtn() {
  nextBtn.disabled = false;
  lastBtn.disabled = false;
}


/* =================================
   STEP 4: Remove Active Logic
================================= */

function removeActive() {

  // সব পেজ থেকে active ক্লাস সরানো
  for (let page of pages) {
    page.classList.remove("active");
  }

  // পেজ ১ হলে Previous ও First বন্ধ
  if (currentPage === 1) {
    disablePreviousAndFirstBtn();
  } else {
    enablePreviousAndFirstBtn();
  }

  // শেষ পেজ হলে Next ও Last বন্ধ
  if (currentPage === totalPages) {
    disableNextAndLastBtn();
  } else {
    enableNextAndLastBtn();
  }
}


/* =================================
   STEP 5: Add Active Logic
================================= */

function addActive(element) {
  removeActive();                 // আগে সব Active সরাই
  element.classList.add("active"); // নতুন Active যোগ
}


/* =================================
   STEP 6: Page Number Click
================================= */

function activePage(event) {
  currentPage = Number(event.target.innerText);
  addActive(event.target);
}


/* =================================
   STEP 7: Previous Button
================================= */

function prev() {
  if (currentPage > 1) {
    currentPage--;
    addActive(pages[currentPage - 1]);
  }
}


/* =================================
   STEP 8: Next Button
================================= */

function next() {
  if (currentPage < totalPages) {
    currentPage++;
    addActive(pages[currentPage - 1]);
  }
}


/* =================================
   STEP 9: First Button
================================= */

function first() {
  currentPage = 1;
  addActive(pages[0]);
}


/* =================================
   STEP 10: Last Button
================================= */

function last() {
  currentPage = totalPages;
  addActive(pages[totalPages - 1]);
}


/* =================================
   STEP 11: Initial State
================================= */

// শুরুতে পেজ ১ Active থাকবে
disablePreviousAndFirstBtn();
pages[0].classList.add("active");
