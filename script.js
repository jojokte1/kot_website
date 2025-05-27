
  document.querySelectorAll('.flip-card').forEach(card => {
    card.addEventListener('click', () => {
      card.classList.toggle('clicked');
    });
  });

 let currentIndex = 0;
const slides = document.querySelectorAll(".news");
const totalSlides = slides.length;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = (i === index) ? "block" : "none";
    });
}

// ปุ่มเลื่อนถัดไป
function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    showSlide(currentIndex);
}

// ปุ่มเลื่อนก่อนหน้า
function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    showSlide(currentIndex);
}

// เพิ่ม event listener ให้ปุ่ม
document.querySelector(".paple .next").addEventListener("click", nextSlide);
document.querySelector(".paple .prev").addEventListener("click", prevSlide);

// แสดงสไลด์แรก
showSlide(currentIndex);

// สไลด์อัตโนมัติทุก 6 วินาที
setInterval(nextSlide, 6000);

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = (i === index) ? "block" : "none";
    });
}
