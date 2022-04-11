window.onload = function () {
    const form = document.querySelector("#reservations");
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        const firstName = document.querySelector('#firstName').value;
        const lastName = document.querySelector('#lastName').value;
        const email = document.querySelector('#email').value;
        const numOfGuests = document.querySelector("#numOfGuests").value;
        const bParty = document.querySelector('#bParty').value;
        const wedding = document.querySelector('#wedding').value;
        const other = document.querySelector('#other').value;
        const date = document.querySelector('#date').value;
        var reservationType = "";
        if (bParty != null) {
            reservationType = "birthday party";
        } else if (wedding != null) {
            reservationType = "wedding";
        } else if (other != null) {
            reservationType = "party";
        }
        displayReservationInfo(firstName, lastName, reservationType, date, numOfGuests, email);
    });
    function displayReservationInfo(firstName, lastName, reservationType, date, numOfGuests, email) {
        var reservationForm = document.querySelector('#reservationForm');
        reservationForm.textContent = "";
        var reservationInfo = document.querySelector('#reservationInfo');
        reservationInfo.textContent = firstName + " " + lastName + " is scheduling a " + reservationType + " on " + date + " for " + numOfGuests + " people " + "approve reservation at " + email;
    }
}