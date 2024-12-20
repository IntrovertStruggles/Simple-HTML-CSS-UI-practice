let mode;

const slider = document.querySelector(".mode-change");
const body = document.getElementById("body")
const sliderBall = document.getElementById("slider-ball");
const air = document.getElementById("air");

slider.addEventListener("click", () => {
    if (mode == "Night")
    {
        sliderBall.style.animation = "NtD 1s ease forwards";
        body.style.animation = "NtD-colors 1.5s ease forwards";
        air.style.animation = "restoreInvert 1.5s ease forwards";
        mode = "Day";
    }
    else
    {
        sliderBall.style.animation = "DtN 1s ease forwards";
        body.style.animation = "DtN-colors 1.5s ease forwards";
        air.style.animation = "invert 1.5s ease forwards";
        mode = "Night";
    }
});

