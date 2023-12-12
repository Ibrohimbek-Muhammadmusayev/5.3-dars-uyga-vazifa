const images = document.querySelector(".left_img");
const birinchibtn = document.querySelector(".active");
const ikkinchibtn = document.querySelector(".right_btn2");
const uchinchibtn = document.querySelector(".right_btn3");

birinchibtn.addEventListener("click", ()=> {
    images.setAttribute("src", src="/rasimlar/1.1png.png")
});

ikkinchibtn.addEventListener("click", ()=> {
    images.setAttribute("src", src="/rasimlar/1.2png.png")
});

uchinchibtn.addEventListener("click", ()=> {
    images.setAttribute("src", "/rasimlar/1.3png.png")
})

birinchibtn.addEventListener("click", ()=> {
    birinchibtn.classList.add("actives");
    ikkinchibtn.classList.remove("acrtives");
    uchinchibtn.classList.remove("actives");
});

ikkinchibtn.addEventListener("click", ()=> {
    birinchibtn.classList.remove("active");
    ikkinchibtn.classList.add("actives");
    ikkinchibtn,classList.add("right_btn1:hover")
    uchinchibtn.classList.remove("actives");
});

uchinchibtn.addEventListener("click", ()=> {
    birinchibtn.classList.remove("actives");
    ikkinchibtn.classList.remove("actives");
    uchinchibtn.classList.add("actives");
})