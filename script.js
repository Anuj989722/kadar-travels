document.getElementById("bookingForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let pickup = document.getElementById("pickup").value;
    let destination = document.getElementById("destination").value;
    let date = document.getElementById("date").value;
    let message = document.getElementById("message").value;

    let text =
`🚖 New Taxi Booking

👤 Name: ${name}
📞 Mobile: ${phone}
📍 Pickup: ${pickup}
🏁 Destination: ${destination}
📅 Date: ${date}
📝 Message: ${message}`;

    let whatsapp = "https://wa.me/919897223414?text=" + encodeURIComponent(text);

    window.open(whatsapp, "_blank");
});
const images = [
    "eeco-front.jpg",
    "eeco-side.jpg",
    "eeco-back.jpg",
    "side-front.jpg",
    "side-back.jpg"
];

let index = 0;

setInterval(() => {
    index++;
    if (index >= images.length) {
        index = 0;
    }

    document.getElementById("slider").src = images[index];
}, 3000);
function calculateFare() {

    let km = Number(document.getElementById("km").value);

    let fare = 0;

    if (km <= 60) {
        fare = 1200;
    }
    else if (km < 100) {
        fare = 1500;
    }
    else {
        fare = km * 2 * 13;
    }

    document.getElementById("result").innerHTML =
    "Total Fare: ₹" + fare;
}