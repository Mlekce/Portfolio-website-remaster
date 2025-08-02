function loadProgress(id, targetValue) {
    let progress = document.getElementById(id);
    let currentValue = 0;

    const interval = setInterval(function () {
        if (currentValue >= targetValue) {
            clearInterval(interval);
        }
        else {
            currentValue++;
            progress.value = currentValue;
        }
    }, 40)
}

function onScrollHalfPage() {
    const scrollTop = window.scrollY || window.pageYOffset;
    const windowHeight = window.innerHeight;
    const fullHeight = document.documentElement.scrollHeight;

    const scrolledPercent = (scrollTop + windowHeight) / fullHeight * 100;

    if (scrolledPercent >= 70) {
        loadProgress("html", 100);
        loadProgress("css", 90);
        loadProgress("express", 90);
        loadProgress("react", 60);
        loadProgress("javascript", 95);
        loadProgress("linux", 55);
        window.removeEventListener("scroll", checkScroll);
    }
}

function checkScroll() {
    onScrollHalfPage();
}

window.addEventListener("scroll", checkScroll);