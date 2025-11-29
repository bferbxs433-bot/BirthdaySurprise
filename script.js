function launchBalloons() {
    for (let i = 0; i < 30; i++) {
        let balloon = document.createElement("div");
        balloon.classList.add("balloon");
        balloon.style.left = Math.random() * 100 + "%";
        balloon.style.animationDuration = 4 + Math.random() * 3 + "s";
        document.body.appendChild(balloon);

        setTimeout(() => balloon.remove(), 7000);
    }
}
