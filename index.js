const coinImg = document.getElementById("coin-image");
const btn = document.getElementById("flip-btn");
const msg = document.getElementById("message");

btn.addEventListener("click", function() {
    coinImg.classList.add("flip-animation");
    msg.innerHTML = "Flipping...";

    setTimeout(function() {
        const randomNumber = Math.floor(Math.random() * 2) + 1;

        coinImg.src = "./sr" + randomNumber + ".png";

        if (randomNumber === 1) {
            msg.innerHTML = "Result: HEADS!";
            msg.style.color = "green";
        } else {
            msg.innerHTML = "Result: TAILS!";
            msg.style.color = "green";
        }

        coinImg.classList.remove("flip-animation");
    }, 600); 
});