const yourDate = new Date("2024-01-20T00:00:00");
const music = ['APT.mp3','mantra.mp3'];

document.addEventListener('DOMContentLoaded', function () {
    const rootTime = document.querySelector(".time");

    // Hiển thị ngày bắt đầu yêu
    const anniElement = document.querySelector(".anni");
    anniElement.textContent = `${yourDate.getDate().toString().padStart(2, "0")}-${(yourDate.getMonth() + 1).toString().padStart(2, "0")}-${yourDate.getFullYear()}`;

    // Hiển thị số ngày đã yêu
    const dateElement = document.querySelector(".date");
    const now = new Date();
    const days = Math.floor((now - yourDate) / (1000 * 60 * 60 * 24));
    dateElement.textContent = `${days} NGÀY`;

    // Cập nhật thời gian yêu (giờ, phút, giây)
    function oclock() {
        const now = new Date();
        const hrs = Math.floor((now - yourDate) / (1000 * 60 * 60)) % 24;
        const min = Math.floor((now - yourDate) / (1000 * 60)) % 60;
        const sec = Math.floor((now - yourDate) / 1000) % 60;
        rootTime.textContent = `${hrs.toString().padStart(2, "0")}:${min.toString().padStart(2, "0")}:${sec.toString().padStart(2, "0")}`;
    }

    oclock();
    setInterval(oclock, 1000);

    // Gán nhạc nền
    document.querySelector("audio").setAttribute("src", "https://cdn.glitch.global/a1ceff4f-13f8-4993-8c0d-3b5fa6da71f6/APT.mp3?v=1730957147991");

    // Thêm lớp nền mờ
    document.body.insertAdjacentHTML("beforeend", "<div id='mask'></div>");

    // Thêm vùng trái tim rơi
    const heartContainer = document.createElement("div");
    heartContainer.classList.add("heart-container");
    document.body.appendChild(heartContainer);

    // Tạo trái tim rơi liên tục
    function createFallingHeart() {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerText = "💖";

        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = (2 + Math.random() * 3) + "s";
        heart.style.fontSize = (16 + Math.random() * 20) + "px";

        heartContainer.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 5000);
    }

    setInterval(createFallingHeart, 300);
});
