const form = document.querySelector('#eventForm');
const travelRange = document.querySelector('#travelRange');

// Replacing "notesContainer"
const studentIDContainer = document.querySelector('#studentIDContainer');
const accessCodeContainer = document.querySelector('#accessCodeContainer');

// Replacing "notes"
const studentID = document.querySelector('#studentID');
const accessCode = document.querySelector('#accessCode');

const output = document.querySelector("#output");

// -- //

function updateInfoField() {
  const value = travelRange.value;

  // Need an if, else if, and else for the student and geust values each having their own container.
  if (value === 'student') {
    studentIDContainer.hidden = false;
    studentID.required = true;
    accessCodeContainer.hidden = true;
    accessCode.required = false;
  } else if (value === 'geust') {
    accessCodeContainer.hidden = false;
    accessCode.required = true;
    studentIDContainer.hidden = true;
    studentID.required = false;
  } else {
    studentIDContainer.hidden = true;
    studentID.required = false;
    accessCodeContainer.hidden = true;
    accessCode.required = false;
  }
}

travelRange.addEventListener("change", updateInfoField);
updateInfoField();

// Ensure they choose a date later than the current date
function isPastDate(value) {
  const today = new Date();
  const chosen = new Date(value);
  return chosen < today;
// Returns true or false
}

// Check if access code equals EVENT131
// I had to make a function because doing accesscode !== 'EVENT131' in the event listener does not work due to skipping the code in the case of falsity. 
function isFalseCode(value) {
    const text = value;
    return text !== 'EVENT131'
// To return true or false
}

form.addEventListener("submit", function (event) {
  event.preventDefault();
  output.textContent = "";

  const firstName = form.firstName.value.trim();
  const lastName = form.lastName.value.trim();
  const type = form.travelRange.value;
  const eventDate = form.eventDate.value;
  const studentID = form.studentID.value.trim();
  const accessCode = form.accessCode.value.trim();


  if (isPastDate(eventDate)) {
    output.textContent = "Please choose a later date.";
    return;
  }

// text for student ID must be 9 didgets
  if (studentID.length !== 0 && studentID.length !== 9) {
    output.textContent = "Student I# must be 9 digits";
    return;
  }

// text for 'enter the right access code'
  if (isFalseCode(accessCode)) {
    output.textContent = "Enter the right access code.";
    return;
  }

  output.innerHTML = `
  <h2>Ticket Created</h2>
  <p>${firstName} ${lastName}</p>
  <p>${type}</p>
  <p>${eventDate}</p>
  `;

  form.reset();
  updateInfoField();
});