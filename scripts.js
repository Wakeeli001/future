function showForgotPassword() {
    alert("Please contact support for password assistance.");
}

function showBookingForm() {
    document.getElementById("bookingForm").style.display = "block";
}

function showSection(section) {
    document.getElementById("bookingForm").style.display = "none";
    document.getElementById("myBookings").style.display = "none";
    document.getElementById("support").style.display = "none";
    document.getElementById(section).style.display = "block";
}

function signUp() {
    let password = document.getElementById("signUpPassword").value;
    if (!validatePassword(password)) {
        alert("Password must be at least 8 characters with no spaces.");
        return;
    }
    alert("Sign up successful. Please log in.");
    document.getElementById("signUpForm").reset();
    showLogin();
}

function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    if (username === "" || password === "") {
        alert("Please enter your credentials.");
        return;
    }
    alert("Login successful.");
    document.getElementById("initialPage").style.display = "none";
    document.getElementById("homepage").style.display = "block";
}

function submitBooking() {
    let phone = document.getElementById("patientPhone").value;
    if (!validatePhoneNumber(phone)) {
        alert("Phone number must start with +234 and be 10 digits.");
        return;
    }
    let ticketId = "TID" + Math.floor(Math.random() * 10000);
    document.getElementById("ticketId").style.display = "block";
    document.getElementById("ticketId").querySelector("span").textContent = ticketId;
    alert("Booking successful. Ticket ID: " + ticketId);
    document.getElementById("bookingForm").reset();
    document.getElementById("bookingStatus").textContent = "Booking successful. Ticket ID: " + ticketId;
}

function validatePhoneNumber(phone) {
    return phone.startsWith("+234") && phone.length === 14;
}

function validatePassword(password) {
    return password.length >= 8 && !password.includes(" ");
}